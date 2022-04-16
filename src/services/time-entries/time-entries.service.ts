import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TimeEntry, TimeEntryDocument } from '../../schemas/time-entry.schema';
import { Model } from 'mongoose';
import { CreateTimeEntryDto } from '../../timeEntries/dtos/create-time-entry.dto';
import { UpdateResult } from 'mongodb';
import { DeactivateTimeEntryDto } from '../../timeEntries/dtos/deactivate-time-entry.dto';

@Injectable()
export class TimeEntriesService {
  constructor(
    @InjectModel(TimeEntry.name) private timeEntryModel: Model<TimeEntryDocument>,
  ) {}

  async create(createTimeEntryDto: CreateTimeEntryDto): Promise<TimeEntry> {
    const createdTimeEntry = new this.timeEntryModel(createTimeEntryDto);
    return createdTimeEntry.save();
  }

  async findAll(): Promise<TimeEntry[]> {
    return this.timeEntryModel.find().exec();
  }

  async findActiveUsers(): Promise<TimeEntry[]> {
    return this.timeEntryModel.find({ active: true }).exec();
  }

  async deactivateUser(
    deactivateTimeEntryDto: DeactivateTimeEntryDto,
  ): Promise<UpdateResult> {
    console.log(deactivateTimeEntryDto);
    return this.timeEntryModel.updateOne(
      { ticketId: deactivateTimeEntryDto.ticketId },
      { $set: { manuallyLoggedSeconds: 0 } },
    );
  }

  async update(): Promise<UpdateResult> {
    return this.timeEntryModel.updateMany({}, { $set: { ownerName: 'Johanna' } });
  }
}
