import { Test, TestingModule } from '@nestjs/testing';
import { PrintAttribsController } from './print-attribs.controller';
import { PrintAttribsService } from './print-attribs.service';

describe('PrintAttribsController', () => {
  let controller: PrintAttribsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PrintAttribsController],
      providers: [PrintAttribsService],
    }).compile();

    controller = module.get<PrintAttribsController>(PrintAttribsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
