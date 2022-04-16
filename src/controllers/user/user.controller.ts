import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CreateUserDto } from "../../users/dtos/create-user.dto";
import { UsersService } from "../../services/users/users.service";
import { User } from "../../schemas/user.schema";
import { DeactivateUserDto } from "../../users/dtos/deactivate-user.dto";

@Controller("users")
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    return await this.usersService.create(createUserDto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get("currentlyWaiting")
  async findActiveUsers(): Promise<User[]> {
    return this.usersService.findActiveUsers();
  }

  @Put()
  async deactivateUser(@Body() timeEntryNumber: DeactivateUserDto) {
    return this.usersService.deactivateUser(timeEntryNumber);
  }

  @Put("up")
  async update() {
    return this.usersService.update();
  }
}
