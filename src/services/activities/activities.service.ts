import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Activity, ActivityDocument } from "../../schemas/activity.schema";
import { Model } from "mongoose";
import { CreateActivityDto } from "../../activities/dtos/create-activity.dto";
import { UpdateResult } from "mongodb";
import { DeactivateActivityDto } from "../../activities/dtos/deactivate-activity.dto";

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity.name) private activityModel: Model<ActivityDocument>
  ) {}

  async create(createActivityDto: CreateActivityDto): Promise<Activity> {
    const createdActivity = new this.activityModel(createActivityDto);
    return createdActivity.save();
  }

  async findAll(): Promise<Activity[]> {
    return this.activityModel.find().exec();
  }

  async findActiveUsers(): Promise<Activity[]> {
    return this.activityModel.find({ active: true }).exec();
  }

  async deactivateUser(
    deactivateActivityDto: DeactivateActivityDto
  ): Promise<UpdateResult> {
    console.log(deactivateActivityDto);
    return this.activityModel.updateOne(
      { ticketId: deactivateActivityDto.ticketId },
      { $set: { manuallyLoggedSeconds: 0 } }
    );
  }

  async update(): Promise<UpdateResult> {
    return this.activityModel.updateMany(
      {},
      { $set: { ownerName: "Johanna" } }
    );
  }
}
