import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type ActivityDocument = Activity & Document;

@Schema()
export class Activity {
  @Prop()
  id: number;

  @Prop()
  billingKeyId: string;

  @Prop()
  activityId: string;

  @Prop()
  description: string;

  @Prop()
  default: boolean;
}

export const ActivitySchema = SchemaFactory.createForClass(Activity);
