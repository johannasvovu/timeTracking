import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { CreateTimeEntryDto } from '../../timeEntries/dtos/create-time-entry.dto';
import {TimeEntriesService} from '../../services/time-entries/time-entries.service';
import { TimeEntry } from '../../schemas/time-entry.schema';
import { DeactivateTimeEntryDto } from '../../timeEntries/dtos/deactivate-time-entry.dto';

@Controller('timeEntries')
export class TimeEntriesController {
  constructor(private timeEntriesService: TimeEntriesService) {}

  @Post()
  async create(@Body() createTimeEntryDto: CreateTimeEntryDto) {
    return await this.timeEntriesService.create(createTimeEntryDto);
  }

  @Get()
  async findAll(): Promise<TimeEntry[]> {
    return this.timeEntriesService.findAll();
  }

  @Get('currentlyWaiting')
  async findActiveUsers(): Promise<TimeEntry[]> {
    return this.timeEntriesService.findActiveUsers();
  }

  @Put()
  async deactivateUser(@Body() timeEntryNumber: DeactivateTimeEntryDto) {
    return this.timeEntriesService.deactivateUser(timeEntryNumber);
  }

  @Put('up')
  async update() {
    return this.timeEntriesService.update();
  }
}
