import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type PriceCodeDocument = PriceCode & Document;

@Schema()
export class PriceCode {
  @Prop()
  id: number;

  @Prop()
  priceCode: string;

  @Prop()
  user: string;

  @Prop()
  description: string;
}

export const PriceCodeSchema = SchemaFactory.createForClass(PriceCode);
