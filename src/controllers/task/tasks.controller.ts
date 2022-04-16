import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CreateTaskDto } from "../../tasks/dtos/create-task.dto";
import { TasksService } from "../../services/tasks/tasks.service";
import { Task } from "../../schemas/task.schema";
import { DeactivateTaskDto } from "../../tasks/dtos/deactivate-task.dto";

@Controller("tasks")
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Post()
  async create(@Body() createTaskDto: CreateTaskDto) {
    return await this.tasksService.create(createTaskDto);
  }

  @Get()
  async findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  @Get("currentlyWaiting")
  async findActiveUsers(): Promise<Task[]> {
    return this.tasksService.findActiveUsers();
  }

  @Put()
  async deactivateUser(@Body() timeEntryNumber: DeactivateTaskDto) {
    return this.tasksService.deactivateUser(timeEntryNumber);
  }

  @Put("up")
  async update() {
    return this.tasksService.update();
  }
}
