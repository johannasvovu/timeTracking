import { Module } from "@nestjs/common";
import { UsersService } from "../services/users/users.service";
import { User, UserSchema } from "../schemas/user.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { UsersController } from "src/controllers/user/user.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
