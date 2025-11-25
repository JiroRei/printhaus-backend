import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
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

    async usePaper(payload: { reamId: string; papersUsed: number }) {
        const { reamId, papersUsed } = payload;

        // 1. Find the ream in the database
        const paper = await this.prisma.inventoryPaper.findUnique({
            where: { id: reamId },
        });

        if (!paper) {
            throw new NotFoundException("Inventory item not found");
        }

        // 2. Extract values from db
        const productAmt = paper.productAmt;   // number of reams
        const paperAmt = paper.paperAmt;       // papers per ream

        // 3. Calculate total papers available
        const totalPapers = paperAmt;

        // 4. Subtract how much was used
        const remainingPapers = totalPapers - papersUsed;

        if (remainingPapers < 0) {
            throw new BadRequestException("Not enough paper left!");
        }

        // 5. Convert remaining papers back to reams + leftover
        const updatedReams = Math.floor(remainingPapers / paperAmt);
        const leftoverPapers = remainingPapers % paperAmt; // optional

        // 6. Update database
        return this.prisma.inventoryPaper.update({
            where: { id: reamId },
            data: {
            productAmt: updatedReams,
            // If you want to store leftover, add a column and save leftoverPapers
            },
        });
        }

}
