import { Test, TestingModule } from '@nestjs/testing';
import { PrintAttribsService } from './print-attribs.service';

describe('PrintAttribsService', () => {
  let service: PrintAttribsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrintAttribsService],
    }).compile();

    service = module.get<PrintAttribsService>(PrintAttribsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
