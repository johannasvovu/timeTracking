import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CreateBillingKeyDto } from "../../billingKeys/dtos/create-billing-key.dto";
import { BillingKeysService } from "../../services/billing-keys/billing-keys.service";
import { BillingKey } from "../../schemas/billing-key.schema";
import { DeactivateBillingKeyDto } from "../../billingKeys/dtos/deactivate-billing-key.dto";

@Controller("billingKeys")
export class BillingKeysController {
  constructor(private billingKeysService: BillingKeysService) {}

  @Post()
  async create(@Body() createBillingKeyDto: CreateBillingKeyDto) {
    return await this.billingKeysService.create(createBillingKeyDto);
  }

  @Get()
  async findAll(): Promise<BillingKey[]> {
    return this.billingKeysService.findAll();
  }

  @Get("currentlyWaiting")
  async findActiveUsers(): Promise<BillingKey[]> {
    return this.billingKeysService.findActiveUsers();
  }

  @Put()
  async deactivateUser(@Body() timeEntryNumber: DeactivateBillingKeyDto) {
    return this.billingKeysService.deactivateUser(timeEntryNumber);
  }

  @Put("up")
  async update() {
    return this.billingKeysService.update();
  }
}
