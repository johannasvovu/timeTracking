import { Prop } from "@nestjs/mongoose";

export class CreateUserDto {
  id: string;
  jiraUser: string;
  key: string;
}
