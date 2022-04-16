import { Module } from "@nestjs/common";
import { ActivitiesService } from "../services/activities/activities.service";
import { Activity, ActivitySchema } from "../schemas/activity.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ActivitiesController } from "../controllers/activity/activities.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Activity.name, schema: ActivitySchema },
    ]),
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
