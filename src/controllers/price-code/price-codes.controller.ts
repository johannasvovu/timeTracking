import { Body, Controller, Delete, Get, Post, Put } from "@nestjs/common";
import { CreatePriceCodeDto } from "../../priceCodes/dtos/create-price-code.dto";
import { PriceCodesService } from "../../services/price-codes/price-codes.service";
import { PriceCode } from "../../schemas/price-code.schema";
import { DeactivatePriceCodeDto } from "../../priceCodes/dtos/deactivate-price-code.dto";

@Controller("priceCodes")
export class PriceCodesController {
  constructor(private priceCodesService: PriceCodesService) {}

  @Post()
  async create(@Body() createPriceCodeDto: CreatePriceCodeDto) {
    return await this.priceCodesService.create(createPriceCodeDto);
  }

  @Get()
  async findAll(): Promise<PriceCode[]> {
    return this.priceCodesService.findAll();
  }

  @Get("currentlyWaiting")
  async findActiveUsers(): Promise<PriceCode[]> {
    return this.priceCodesService.findActiveUsers();
  }

  @Put()
  async deactivateUser(@Body() timeEntryNumber: DeactivatePriceCodeDto) {
    return this.priceCodesService.deactivateUser(timeEntryNumber);
  }

  @Put("up")
  async update() {
    return this.priceCodesService.update();
  }
}
