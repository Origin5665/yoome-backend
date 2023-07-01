import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://mongo:xeBY6tEJjFE5iBLpgLdD@containers-us-west-64.railway.app:7430',
    ),
    TodoModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
