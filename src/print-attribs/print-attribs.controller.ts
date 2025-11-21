import { Body, Controller, Get, InternalServerErrorException, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { PrintAttribsService } from './print-attribs.service';
import { CreatePrintFileDTO } from './dto/create-print-file.dto';
import { CreatePrintFileResponse } from './types/create-print-file-response';
import { GetAllPrintsResponse } from './types/get-all-prints-response';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('print-attribs')
export class PrintAttribsController {
  constructor(private readonly printAttribsService: PrintAttribsService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createPrintFileDTO(
    @UploadedFile() file: Express.Multer.File,
    @Body() createPrintFileDTO: CreatePrintFileDTO,
  ): Promise<CreatePrintFileResponse>{
      try {
      console.log('File received:', file?.originalname);
      console.log('Body:', createPrintFileDTO);
      
      return await this.printAttribsService.createPrintFile(createPrintFileDTO);
    } catch (err) {
      console.error('Error in print-attribs:', err);
      throw new InternalServerErrorException(err.message);
    }
    }
    

  @Get()
    async getAllPrints(): Promise<GetAllPrintsResponse>{
      return this.printAttribsService.getAllPrints();
    }
    // findAll() {
    //   return this.printAttribsService.findAll();
    // }
}
