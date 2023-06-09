import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:3000',
        'https://master--rococo-horse-a800ae.netlify.app/todo',
      ];
      const isAllowedOrigin = allowedOrigins.includes(origin);
      console.log(origin, isAllowedOrigin);

      callback(null, isAllowedOrigin);
    },
    credentials: true,
  });

  await app.listen(process.env.PORT, '0.0.0.0');
}

bootstrap();
