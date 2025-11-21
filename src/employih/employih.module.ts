import { Module } from '@nestjs/common';
import { EmployihService } from './employih.service';
import { EmployihController } from './employih.controller';

@Module({
  controllers: [EmployihController],
  providers: [EmployihService],
})
export class EmployihModule {}
