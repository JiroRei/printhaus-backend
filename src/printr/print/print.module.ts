import { Module } from '@nestjs/common';
import { PrintService } from './print.service';
import { PrintController } from './print.controller';
import { PrismaService } from 'src/shared/database/prisma.service';

@Module({
  controllers: [PrintController],
  providers: [PrintService, PrismaService],
})
export class PrintModule {}
