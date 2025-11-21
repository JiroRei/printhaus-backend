import { PrintValues } from "@prisma/client";


export interface CreatePrintFileResponse{
    status: number;
    message: string;
    data: PrintValues;
}