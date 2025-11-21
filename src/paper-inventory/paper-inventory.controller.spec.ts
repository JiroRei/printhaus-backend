import { Test, TestingModule } from '@nestjs/testing';
import { PaperInventoryController } from './paper-inventory.controller';
import { PaperInventoryService } from './paper-inventory.service';

describe('PaperInventoryController', () => {
  let controller: PaperInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaperInventoryController],
      providers: [PaperInventoryService],
    }).compile();

    controller = module.get<PaperInventoryController>(PaperInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
