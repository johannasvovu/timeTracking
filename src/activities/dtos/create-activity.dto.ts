import { Prop } from "@nestjs/mongoose";

export class CreateActivityDto {
  id: number;
  billingKeyId: string;
  activityId: string;
  description: string;
  default: boolean;
}
