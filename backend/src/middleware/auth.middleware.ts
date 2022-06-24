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
            throw new UnauthorizedException("Missing Token")
        }

        var result = await this.decode_token(res, access_token, refresh_token);

        if (result.payload && !result.expired) {
            req.body.email = result.payload
            await this.check_citizen(result.payload)
            next()
        } else {
            throw new UnauthorizedException("Authorization Failed")
        }

    }

    async decode_token(res: any, access: any, refresh: any) {
        try {
            const values = jwt.verify(access, process.env.SECRET)
            return { payload: (<any> values).email, expired: false }
        } 
        catch(error) {
            var new_token = await this.refresh_token(refresh)
            const values = jwt.verify(new_token, process.env.SECRET)
            res.cookie("accessToken", new_token, {
                domain: ".smartcity.w-mi.de",
            })
            return { payload: (<any> values).email, expired: false }
        }
    }

    async refresh_token(token: string) {
        return await axios.post(process.env.MAINHUB_URL + "/api/token", { "token": token })
        .then(r => r.data.accessToken)
    }

    async check_citizen(email: any) {
        var cit = await this.prismaService.citizen.findUnique({where:{email: email}})
        if (cit == null) {
            await this.prismaService.citizen.create({data:{email: email}})
        }
    }

}


