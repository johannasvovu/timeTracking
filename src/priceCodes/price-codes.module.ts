import { Module } from "@nestjs/common";
import { PriceCodesService } from "../services/price-codes/price-codes.service";
import { PriceCode, PriceCodeSchema } from "../schemas/price-code.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { PriceCodesController } from "../controllers/price-code/price-codes.controller";

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: PriceCode.name, schema: PriceCodeSchema },
    ]),
  ],
  controllers: [PriceCodesController],
  providers: [PriceCodesService],
})
export class PriceCodesModule {}
