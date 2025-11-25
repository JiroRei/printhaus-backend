import { Body, Controller, Get, Post } from '@nestjs/common';
import { PaperInventoryService } from './paper-inventory.service';
import { CreatePaperInvDTO } from './dto/create-inv-paper.dto';
import { CreatePaperInventoryResponse } from './types/create-inv-response';
import { GetAllPaperInventoryResponse } from './types/get-all-paper-inv-response';

@Controller('paper-inventory')
export class PaperInventoryController {
  constructor(private readonly paperInventoryService: PaperInventoryService) {}

  @Post()
  async createPaperInvDTO(
    @Body() createPaperInvDTO: CreatePaperInvDTO,
  ): Promise<CreatePaperInventoryResponse>{
      return this.paperInventoryService.createPaperInventory(createPaperInvDTO);
    }

  @Get()
    async getAllPaperInventory(): Promise<GetAllPaperInventoryResponse>{
      return this.paperInventoryService.getAllPaperInventory();
    }
  
  @Post("use")
    usePaper(@Body() body: { reamId: string; papersUsed: number }) {
      return this.paperInventoryService.usePaper(body);
    }

}
