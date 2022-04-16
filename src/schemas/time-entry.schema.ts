import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TimeEntryDocument = TimeEntry & Document;

@Schema()
export class TimeEntry {
  @Prop()
  ownerName: string;

  @Prop()
  ownerId: number;

  @Prop()
  ticketId: string;

  @Prop()
  projectId: string;

  @Prop()
  manuallyLoggedSeconds: number;

  @Prop()
  timeIn: Date;

  @Prop()
  timeOut: Date;

  @Prop()
  created: Date;

  @Prop()
  comment: string;
}

export const TimeEntrySchema = SchemaFactory.createForClass(TimeEntry);
