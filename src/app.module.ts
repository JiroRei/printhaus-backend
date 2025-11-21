import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployihModule } from './employih/employih.module';
import { PrintModule } from './printr/print/print.module';
import { PrintAttribsModule } from './print-attribs/print-attribs.module';
import { PaperInventoryModule } from './paper-inventory/paper-inventory.module';

@Module({
  imports: [EmployihModule, PrintModule, PrintAttribsModule, PaperInventoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
