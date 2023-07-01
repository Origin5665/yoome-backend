import { forwardRef, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoController } from './todo.controller';
import { TodoSchema } from './todo.schema';
import { AuthModule } from '../auth/auth.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Todo', schema: TodoSchema }]),
    forwardRef(() => AuthModule),
    JwtModule.register({
      secret: 'yoome-todo',
    }),
  ],
  controllers: [TodoController],
})
export class TodoModule {}
