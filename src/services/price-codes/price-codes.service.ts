import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { PriceCode, PriceCodeDocument } from "../../schemas/price-code.schema";
import { Model } from "mongoose";
import { CreatePriceCodeDto } from "../../priceCodes/dtos/create-price-code.dto";
import { UpdateResult } from "mongodb";
import { DeactivatePriceCodeDto } from "../../priceCodes/dtos/deactivate-price-code.dto";

@Injectable()
export class PriceCodesService {
  constructor(
    @InjectModel(PriceCode.name)
    private priceCodeModel: Model<PriceCodeDocument>
  ) {}

  async create(createPriceCodeDto: CreatePriceCodeDto): Promise<PriceCode> {
    const createdPriceCode = new this.priceCodeModel(createPriceCodeDto);
    return createdPriceCode.save();
  }

  async findAll(): Promise<PriceCode[]> {
    return this.priceCodeModel.find().exec();
  }

  async findActiveUsers(): Promise<PriceCode[]> {
    return this.priceCodeModel.find({ active: true }).exec();
  }

  async deactivateUser(
    deactivatePriceCodeDto: DeactivatePriceCodeDto
  ): Promise<UpdateResult> {
    console.log(deactivatePriceCodeDto);
    return this.priceCodeModel.updateOne(
      { ticketId: deactivatePriceCodeDto.ticketId },
      { $set: { manuallyLoggedSeconds: 0 } }
    );
  }

  async update(): Promise<UpdateResult> {
    return this.priceCodeModel.updateMany(
      {},
      { $set: { ownerName: "Johanna" } }
    );
  }
}
