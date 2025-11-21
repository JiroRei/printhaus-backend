import { Injectable } from '@nestjs/common';
import { CreateEmployihDto } from './dto/create-employih.dto';
import { UpdateEmployihDto } from './dto/update-employih.dto';

@Injectable()
export class EmployihService {
  create(createEmployihDto: CreateEmployihDto) {
    return 'This action adds a new employih';
  }

  findAll() {
    return `This action returns all employih`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employih`;
  }

  update(id: number, updateEmployihDto: UpdateEmployihDto) {
    return `This action updates a #${id} employih`;
  }

  remove(id: number) {
    return `This action removes a #${id} employih`;
  }
}
