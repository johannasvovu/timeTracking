import { Module } from "@nestjs/common";
import { BillingKeysService } from "../services/billing-keys/billing-keys.service";
import { BillingKey, BillingKeySchema } from "../schemas/billing-key.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { BillingKeysController } from "src/controllers/billing-key/billing-keys.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: BillingKey.name, schema: BillingKeySchema },
    ]),
  ],
  controllers: [BillingKeysController],
  providers: [BillingKeysService],
})
export class BillingKeysModule {}
