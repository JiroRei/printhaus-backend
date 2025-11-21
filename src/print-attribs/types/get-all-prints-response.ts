import { PrintValues } from "@prisma/client";


export interface GetAllPrintsResponse{
    status: number;
    message: string;
    results: number;
    data: PrintValues[];
}