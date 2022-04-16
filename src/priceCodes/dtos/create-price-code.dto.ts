import { Prop } from "@nestjs/mongoose";

export class CreatePriceCodeDto {
  id: number;
  priceCode: string;
  user: string;
  description: string;
}
