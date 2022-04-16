import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BillingKeyDocument = BillingKey & Document;

@Schema()
export class BillingKey {
  @Prop()
  id: number;

  @Prop()
  billingKey: string;

  @Prop()
  description: string;

  @Prop()
  task: string;

  @Prop()
  default: boolean;
}

export const BillingKeySchema = SchemaFactory.createForClass(BillingKey);
