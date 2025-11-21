import { Module } from '@nestjs/common';
import { PrintAttribsService } from './print-attribs.service';
import { PrintAttribsController } from './print-attribs.controller';
import { PrismaService } from 'src/shared/database/prisma.service';

@Module({
  controllers: [PrintAttribsController],
  providers: [PrintAttribsService, PrismaService],
})
export class PrintAttribsModule {}
