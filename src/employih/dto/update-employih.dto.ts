import { PartialType } from '@nestjs/mapped-types';
import { CreateEmployihDto } from './create-employih.dto';

export class UpdateEmployihDto extends PartialType(CreateEmployihDto) {}
