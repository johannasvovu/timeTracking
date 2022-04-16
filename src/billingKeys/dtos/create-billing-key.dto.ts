import { Prop } from "@nestjs/mongoose";

export class CreateBillingKeyDto {
  id: number;
  billingKey: string;
  description: string;
  task: string;
  default: boolean;
}
