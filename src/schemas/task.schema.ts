import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop()
  id: number;

  @Prop()
  key: string;

  @Prop()
  description: string;

  @Prop()
  favorite: boolean;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
