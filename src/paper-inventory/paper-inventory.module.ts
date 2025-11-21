import { Module } from '@nestjs/common';
import { PaperInventoryService } from './paper-inventory.service';
import { PaperInventoryController } from './paper-inventory.controller';
import { PrismaService } from 'src/shared/database/prisma.service';

@Module({
  controllers: [PaperInventoryController],
  providers: [PaperInventoryService, PrismaService],
})
export class PaperInventoryModule {}
