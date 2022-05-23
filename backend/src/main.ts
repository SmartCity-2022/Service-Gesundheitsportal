import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import * as dotenv from "dotenv";


async function bootstrap() {

  dotenv.config({ path: __dirname + "/.env" });

  const app = await NestFactory.create(AppModule, { cors: true });

  await app.listen(8080);
  console.log("[Nest] Api   - " + "http://localhost:8080/docs")
  
}


bootstrap();