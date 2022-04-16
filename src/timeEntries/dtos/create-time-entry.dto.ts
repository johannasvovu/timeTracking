import {Prop} from "@nestjs/mongoose";

export class CreateTimeEntryDto {
  ownerName: string;
  ownerId: number;
  reason: string;
  ticketId: string;
  projectId: string;
  manuallyLoggedSeconds: number;
  timeIn: Date;
  timeOut: Date;
  created: Date;
  comment: string;
}
