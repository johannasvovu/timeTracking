import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {
  BillingKey,
  BillingKeyDocument,
} from "../../schemas/billing-key.schema";
import { Model } from "mongoose";
import { CreateBillingKeyDto } from "../../billingKeys/dtos/create-billing-key.dto";
import { UpdateResult } from "mongodb";
import { DeactivateBillingKeyDto } from "../../billingKeys/dtos/deactivate-billing-key.dto";

@Injectable()
export class BillingKeysService {
  constructor(
    @InjectModel(BillingKey.name)
    private billingKeyModel: Model<BillingKeyDocument>
  ) {}

  async create(createBillingKeyDto: CreateBillingKeyDto): Promise<BillingKey> {
    const createdBillingKey = new this.billingKeyModel(createBillingKeyDto);
    return createdBillingKey.save();
  }

  async findAll(): Promise<BillingKey[]> {
    return this.billingKeyModel.find().exec();
  }

  async findActiveUsers(): Promise<BillingKey[]> {
    return this.billingKeyModel.find({ active: true }).exec();
  }

  async deactivateUser(
    deactivateBillingKeyDto: DeactivateBillingKeyDto
  ): Promise<UpdateResult> {
    console.log(deactivateBillingKeyDto);
    return this.billingKeyModel.updateOne(
      { ticketId: deactivateBillingKeyDto.ticketId },
      { $set: { manuallyLoggedSeconds: 0 } }
    );
  }

  async update(): Promise<UpdateResult> {
    return this.billingKeyModel.updateMany(
      {},
      { $set: { ownerName: "Johanna" } }
    );
  }
}
