import { Test, TestingModule } from "@nestjs/testing";
import { PriceCodesService } from "./price-codes.service";

describe("PriceCodesService", () => {
  let service: PriceCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceCodesService],
    }).compile();

    service = module.get<PriceCodesService>(PriceCodesService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
