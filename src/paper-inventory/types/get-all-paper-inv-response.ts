import { InventoryPaper } from "@prisma/client";



export interface GetAllPaperInventoryResponse{
    status: number;
    message: string;
    results: number;
    data: InventoryPaper[];
}