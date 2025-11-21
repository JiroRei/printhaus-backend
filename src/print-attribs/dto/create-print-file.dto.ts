import { PaymentMethod } from "@prisma/client";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatePrintFileDTO {

    @IsString()
    @IsNotEmpty()
    paperSize: string
    
    @IsNumber()
    @IsNotEmpty()
    printCopies: number

    @IsString()
    @IsNotEmpty()
    printColor: string
    
    @IsString()
    @IsNotEmpty()
    orientation: string
    
    @IsNumber()
    @IsNotEmpty()
    printPrice: number

    @IsString()
    @IsNotEmpty()
    printer: string

    @IsString()
    @IsNotEmpty()
    paymentMethod: PaymentMethod
}