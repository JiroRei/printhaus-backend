import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmployihService } from './employih.service';
import { CreateEmployihDto } from './dto/create-employih.dto';
import { UpdateEmployihDto } from './dto/update-employih.dto';

@Controller('employih')
export class EmployihController {
  constructor(private readonly employihService: EmployihService) {}

  @Post()
  create(@Body() createEmployihDto: CreateEmployihDto) {
    return this.employihService.create(createEmployihDto);
  }

  @Get()
  findAll() {
    return this.employihService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.employihService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEmployihDto: UpdateEmployihDto) {
    return this.employihService.update(+id, updateEmployihDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.employihService.remove(+id);
  }
}
