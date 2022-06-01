import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios'
import * as jwt from 'jsonwebtoken'


@Injectable()
export class AuthMiddleware implements NestMiddleware {

    async use(req: Request, res: Response, next: NextFunction) {
    
        var access_token = req.cookies['accessToken']
        var refresh_token = req.cookies['refreshToken']
        
        if (!access_token || !refresh_token) {
            throw new UnauthorizedException("Missing Token");
        }

        var result = this.decode_token(access_token);

        if (result.payload && !result.expired) {
            console.log(result.payload)
        } else if (result.expired) {
            access_token = await this.refresh_token(refresh_token);
            res.cookie("accessToken", access_token)
            var payload = this.decode_token(access_token);
            console.log(payload)
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

}


