import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { PrismaService } from 'src/shared/database/prisma.service';
import { CreatePaperInvDTO } from './dto/create-inv-paper.dto';
import { CreatePaperInventoryResponse } from './types/create-inv-response';
import { GetAllPaperInventoryResponse } from './types/get-all-paper-inv-response';

@Injectable()
export class PaperInventoryService {
    constructor(private prisma: PrismaService){}

    async createPaperInventory(payload: CreatePaperInvDTO): Promise<CreatePaperInventoryResponse>{
        try {
            const paperInv = await this.prisma.inventoryPaper.create({
                data: payload,
            })

            return{
                status: 201,
                message: 'paperInv Data created successfully',
                data: paperInv,
            }
        } catch (error) {
            console.error('Error creating paperInv data', error);
            throw new InternalServerErrorException('Failed to create paperInv data.')
        }
    }

    async getAllPaperInventory(): Promise<GetAllPaperInventoryResponse>{
        try {
            const inventoryPaper = await this.prisma.inventoryPaper.findMany();
            
            return{
                status: 200,
                message: "inventoryPaper Data Fetched.",
                results: inventoryPaper.length,
                data: inventoryPaper,
            }
        } catch (error) {
            console.error('Error creating employee data', error);
            throw new InternalServerErrorException('Failed to create employee data.')
        }
    }
}
