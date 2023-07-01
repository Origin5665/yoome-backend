import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './users.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<UserDocument>,
  ) {}
  async createUser(username: string, password: string): Promise<User> {
    try {
      return await this.userModel.create({
        username,
        password,
      });
    } catch (error) {
      if (error.code === 11000) {
        throw new HttpException(
          'Пользователь с таким именем уже существует. Пожалуйста, придумайте другое имя. ',
          HttpStatus.BAD_REQUEST,
        );
      }
      throw error;
    }
  }
  async getUser(query: object): Promise<User> {
    return this.userModel.findOne(query);
  }
}
