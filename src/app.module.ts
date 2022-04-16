import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ActivitiesModule } from "./activities/activities.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { BillingKeysModule } from "./billingKeys/billing-keys.module";
import { PriceCodesModule } from "./priceCodes/price-codes.module";
import { TasksModule } from "./tasks/task.module";
import { TimeEntriesModule } from "./timeEntries/time-entries.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    TimeEntriesModule,
    PriceCodesModule,
    ActivitiesModule,
    BillingKeysModule,
    TasksModule,
    UsersModule,
    MongooseModule.forRoot(
      "mongodb+srv://time:timetrackingisnowawsome@timetrackingcluster.0bjsi.mongodb.net/timeTracking?retryWrites=true&w=majority"
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
