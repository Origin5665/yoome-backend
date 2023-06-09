import { Controller, Get, Post, Body } from '@nestjs/common';
import { Todo } from './todo.interface';

@Controller('todo')
export class TodoController {
  private todos: Todo[] = [];

  @Get()
  getAllTodos(): Todo[] {
    return this.todos;
  }

  @Post()
  createTodo(@Body() todo: Todo): Todo {
    this.todos.push(todo);
    return todo;
  }
}
