import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreatePrintFileDTO } from './dto/create-print-file.dto';
import { UpdatePrintFileDTO } from './dto/update-print-file.dto';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CreatePrintFileResponse } from './types/create-print-file-response';
import { GetAllPrintsResponse } from './types/get-all-prints-response';

@Injectable()
export class PrintAttribsService {
    constructor(private prisma: PrismaService) {}

    async createPrintFile(payload: CreatePrintFileDTO): Promise<CreatePrintFileResponse>{
        try {
            const printvalues = await this.prisma.printValues.create({
                data:{ ...payload, printPrice: parseFloat(Number(payload.printPrice).toFixed(2)),}
            })
            
            return{
                status: 201,
                message: 'printvalues Data created successfully',
                data: printvalues,
            }
        } catch (error) {
            console.error('Error creating printvalues data', error);
            throw new InternalServerErrorException('Failed to create printvalues data.')
        }
    }


    async getAllPrints(): Promise<GetAllPrintsResponse>{
        try {
            const printvalues = await this.prisma.printValues.findMany();
            
            return{
                status: 200,
                message: "printvalues Data Fetched.",
                results: printvalues.length,
                data: printvalues,
            }
        } catch (error) {
            console.error('Error creating printvalues data', error);
            throw new InternalServerErrorException('Failed to create printvalues data.')
        }
    }

    
    //   findAll() {
    //     return `This action returns a print file job nigguhhhhh`;
    //   }
    
    //   findOne(id: number) {
    //     return `This action returns transaction id: #${id} nigguhhhhh`;
    //   }
    
    //   update(id: number, updatePrintFileDTO: UpdatePrintFileDTO) {
    //     return `This action updates transaction id: #${id} nigguhhhhh`;
    //   }
    
    //   remove(id: number) {
    //     return `This action removes transaction id: #${id} nigguhhhhh`;
    //   }
}
