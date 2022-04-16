import { Test, TestingModule } from "@nestjs/testing";
import { BillingKeysController } from "./billing-keys.controller";

describe("BillingKeysController", () => {
  let controller: BillingKeysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BillingKeysController],
    }).compile();

    controller = module.get<BillingKeysController>(BillingKeysController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
