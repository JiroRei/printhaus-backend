import { Test, TestingModule } from '@nestjs/testing';
import { PaperInventoryService } from './paper-inventory.service';

describe('PaperInventoryService', () => {
  let service: PaperInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaperInventoryService],
    }).compile();

    service = module.get<PaperInventoryService>(PaperInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
