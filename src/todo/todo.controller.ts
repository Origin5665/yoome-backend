import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './todo.schema';
import { JwtAuthGuard } from '../guards/jwtGuard';

@Controller('todo')
@UseGuards(JwtAuthGuard)
export class TodoController {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  @Get()
  async getAllTodos(): Promise<Todo[]> {
    return this.todoModel.find().exec();
  }

  @Get('completed')
  async getCompletedTodos(): Promise<Todo[]> {
    return this.todoModel.find({ completed: true }).exec();
  }

  @Post()
  async createTodo(@Body() todo: Todo): Promise<Todo> {
    const newTodo = new this.todoModel({
      ...todo,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return newTodo.save();
  }

  @Put(':id')
  async updateTodo(
    @Param('id') id: string,
    @Body() todo: Todo,
  ): Promise<Todo | null> {
    todo.updatedAt = new Date();
    return this.todoModel.findByIdAndUpdate(id, todo, { new: true }).exec();
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: string): Promise<Todo | null> {
    return this.todoModel.findByIdAndRemove(id).exec();
  }
}
