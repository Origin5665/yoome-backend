import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['Content-Type', 'Authorization'],
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:3000',
        'https://master--rococo-horse-a800ae.netlify.app',
      ];
      const isAllowedOrigin = allowedOrigins.includes(origin);

      callback(null, isAllowedOrigin);
    },
    credentials: true,
  });

  // await app.listen(8080, '0.0.0.0');
  await app.listen(process.env.PORT, '0.0.0.0');
}

bootstrap();
