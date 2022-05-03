import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
  .setTitle('Gesundheitsportal-Backend')
  .setDescription('Dokumentation für das Gesundheitsportal-Backend')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(8080);
  console.log("Backend launched:      " + "http://localhost:8080/docs")
}

bootstrap();
