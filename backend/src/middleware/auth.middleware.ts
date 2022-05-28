import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken'

@Injectable()
export class AuthMiddleware implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
    
        const access_token = req.cookies['accessToken']
        const refresh_token = req.cookies['refreshToken']
        
        if (!access_token || !refresh_token) {
            throw new UnauthorizedException("Missing Token");
        }

        

        next();
    }

    verify_token(token: string) {

        try {
            const values = jwt.verify(token, process.env.SECRET);
        } 
        catch(error) {
            
        }

    }

}


