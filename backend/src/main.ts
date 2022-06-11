import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { publish, listen } from './rabbitmq'
import * as cookieParser from 'cookie-parser';
import * as dotenv from "dotenv";


async function bootstrap() {

    dotenv.config({ path: __dirname + "/.env" })

    const app = await NestFactory.create(AppModule, { 
        cors: {
            credentials: true,
            origin: true
        }
    })

    app.use(cookieParser())
    await app.listen(8080);

    listen("", process.env.SERVICE_WORLD, (secret: any) => {
        process.env.SECRET = secret
    })
    publish(process.env.SERVICE_HELLO, "")

}


bootstrap();
