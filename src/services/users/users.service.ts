import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from "../../schemas/user.schema";
import { Model } from "mongoose";
import { CreateUserDto } from "../../users/dtos/create-user.dto";
import { UpdateResult } from "mongodb";
import { DeactivateUserDto } from "../../users/dtos/deactivate-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const createdUser = new this.userModel(createUserDto);
    return createdUser.save();
  }

  async findAll(): Promise<User[]> {
    return this.userModel.find().exec();
  }

  async findActiveUsers(): Promise<User[]> {
    return this.userModel.find({ active: true }).exec();
  }

  async deactivateUser(
    deactivateUserDto: DeactivateUserDto
  ): Promise<UpdateResult> {
    console.log(deactivateUserDto);
    return this.userModel.updateOne(
      { ticketId: deactivateUserDto.ticketId },
      { $set: { manuallyLoggedSeconds: 0 } }
    );
  }

  async update(): Promise<UpdateResult> {
    return this.userModel.updateMany({}, { $set: { ownerName: "Johanna" } });
  }
}
