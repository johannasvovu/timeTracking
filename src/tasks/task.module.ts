import { Module } from "@nestjs/common";
import { TasksService } from "../services/tasks/tasks.service";
import { Task, TaskSchema } from "../schemas/task.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { TasksController } from "../controllers/task/tasks.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Task.name, schema: TaskSchema }]),
  ],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
