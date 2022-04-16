import { Module } from '@nestjs/common';
import { TimeEntriesService } from '../services/time-entries/time-entries.service';
import { TimeEntry, TimeEntrySchema } from '../schemas/time-entry.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { TimeEntriesController } from '../controllers/time-entry/time-entries.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TimeEntry.name, schema: TimeEntrySchema }]),
  ],
  controllers: [TimeEntriesController],
  providers: [TimeEntriesService],
})
export class TimeEntriesModule {}
