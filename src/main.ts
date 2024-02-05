import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('Test API')
    .setDescription('Documentación Test API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  // URL API
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
