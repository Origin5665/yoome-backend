import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    allowedHeaders: ['content-type'],
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:3000'];
      const isAllowedOrigin = allowedOrigins.includes(origin);
      console.log(origin);

      callback(null, isAllowedOrigin);
    },
    credentials: true,
  });

  await app.listen(process.env.PORT || 8080, '0.0.0.0');
}

bootstrap();
