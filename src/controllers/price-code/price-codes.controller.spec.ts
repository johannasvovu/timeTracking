import { Test, TestingModule } from "@nestjs/testing";
import { PriceCodesController } from "./price-codes.controller";

describe("PriceCodesController", () => {
  let controller: PriceCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PriceCodesController],
    }).compile();

    controller = module.get<PriceCodesController>(PriceCodesController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
