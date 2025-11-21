import { Test, TestingModule } from '@nestjs/testing';
import { EmployihController } from './employih.controller';
import { EmployihService } from './employih.service';

describe('EmployihController', () => {
  let controller: EmployihController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmployihController],
      providers: [EmployihService],
    }).compile();

    controller = module.get<EmployihController>(EmployihController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
