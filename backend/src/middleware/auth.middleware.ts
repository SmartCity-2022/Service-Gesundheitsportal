import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { PrismaService } from '../prisma/prisma.service'
import axios from 'axios'
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthMiddleware implements NestMiddleware {

    constructor(private readonly prismaService: PrismaService) {}

    async use(req: Request, res: Response, next: NextFunction) {
    
        var access_token = req.cookies['accessToken']
        var refresh_token = req.cookies['refreshToken']
        
        if (!access_token || !refresh_token) {
            throw new UnauthorizedException("Missing Token");
        }

        var result = this.decode_token(access_token);
        this.check_citizen(result.payload)

        if (result.payload && !result.expired) {
            res.locals.email = result.payload
        } else if (result.expired) {
            access_token = await this.refresh_token(refresh_token);
            res.cookie("accessToken", access_token)
            result = this.decode_token(access_token);
            res.locals.email = result.payload
        }

        next();
    }

    decode_token(token: string) {
        try {
            const values = jwt.verify(token, process.env.SECRET);
            return { payload: values, expired: false }
        } catch(error) {
            return { payload: null, expired: true }
        }
    }

    async refresh_token(token: string) {
        return await axios.post(process.env.MAINHUB_URL + "/api/token", { "token": token })
        .then(response => { return response.data.accessToken })
    }

    async check_citizen(payload: any) {
        var citizen = await this.prismaService.citizen.findUnique({
            where: {
                email: payload.email
            }
        })
        if (citizen == null) {
            await this.prismaService.citizen.create({
                data: {
                    email: payload.email
                }
            })
        }
    }

}


