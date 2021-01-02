import { Module } from '@nestjs/common';
import { UserController } from './user/controller/user.controller';
import { UserService } from './user/service/user.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {UserEntity} from "./user/models/user.entity";
import {AuthModule} from "../auth/auth.module";

@Module({
  imports: [
      TypeOrmModule.forFeature([UserEntity]),
      AuthModule
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
