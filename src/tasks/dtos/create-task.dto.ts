import { Prop } from "@nestjs/mongoose";

export class CreateTaskDto {
  id: number;
  key: string;
  description: string;
  favorite: boolean;
}
