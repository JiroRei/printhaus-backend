import { InventoryPaper } from "@prisma/client";


export interface CreatePaperInventoryResponse{
    status: number;
    message: string;
    data: InventoryPaper;
}