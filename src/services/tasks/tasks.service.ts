import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Task, TaskDocument } from "../../schemas/task.schema";
import { Model } from "mongoose";
import { CreateTaskDto } from "../../tasks/dtos/create-task.dto";
import { UpdateResult } from "mongodb";
import { DeactivateTaskDto } from "../../tasks/dtos/deactivate-task.dto";

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return createdTask.save();
  }

  async findAll(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async findActiveUsers(): Promise<Task[]> {
    return this.taskModel.find({ active: true }).exec();
  }

  async deactivateUser(
    deactivateTaskDto: DeactivateTaskDto
  ): Promise<UpdateResult> {
    console.log(deactivateTaskDto);
    return this.taskModel.updateOne(
      { ticketId: deactivateTaskDto.ticketId },
      { $set: { manuallyLoggedSeconds: 0 } }
    );
  }

  async update(): Promise<UpdateResult> {
    return this.taskModel.updateMany({}, { $set: { ownerName: "Johanna" } });
  }
}
