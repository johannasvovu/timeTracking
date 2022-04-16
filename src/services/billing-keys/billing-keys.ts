import { Test, TestingModule } from "@nestjs/testing";
import { BillingKeysService } from "./billing-keys.service";

describe("BillingKeysService", () => {
  let service: BillingKeysService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BillingKeysService],
    }).compile();

    service = module.get<BillingKeysService>(BillingKeysService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
