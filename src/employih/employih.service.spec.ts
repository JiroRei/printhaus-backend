import { Test, TestingModule } from '@nestjs/testing';
import { EmployihService } from './employih.service';

describe('EmployihService', () => {
  let service: EmployihService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmployihService],
    }).compile();

    service = module.get<EmployihService>(EmployihService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
