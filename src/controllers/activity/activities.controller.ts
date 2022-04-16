import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CreateActivityDto } from "../../activities/dtos/create-activity.dto";
import { ActivitiesService } from "../../services/activities/activities.service";
import { Activity } from "../../schemas/activity.schema";
import { DeactivateActivityDto } from "../../activities/dtos/deactivate-activity.dto";

@Controller("activities")
export class ActivitiesController {
  constructor(private activitiesService: ActivitiesService) {}

  @Post()
  async create(@Body() createActivityDto: CreateActivityDto) {
    return await this.activitiesService.create(createActivityDto);
  }

  @Get()
  async findAll(): Promise<Activity[]> {
    return this.activitiesService.findAll();
  }

  @Get("currentlyWaiting")
  async findActiveUsers(): Promise<Activity[]> {
    return this.activitiesService.findActiveUsers();
  }

  @Put()
  async deactivateUser(@Body() timeEntryNumber: DeactivateActivityDto) {
    return this.activitiesService.deactivateUser(timeEntryNumber);
  }

  @Put("up")
  async update() {
    return this.activitiesService.update();
  }
}
