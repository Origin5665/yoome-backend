import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { LocalStrategy } from './local.auth';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module';
import { UsersController } from '../users/users.controller';
import { UsersSchema } from '../users/users.model';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'yoome-todo',
      signOptions: { expiresIn: '4h' },
    }),
    MongooseModule.forFeature([{ name: 'users', schema: UsersSchema }]),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, UsersService],
  controllers: [AuthController, UsersController],
  exports: [AuthService],
})
export class AuthModule {}
