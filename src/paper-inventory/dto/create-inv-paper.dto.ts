import { Category } from "@prisma/client";
import {  IsNotEmpty, IsNumber, IsString } from "class-validator";


export class CreatePaperInvDTO{
    @IsString()
    @IsNotEmpty()
    productName: string

    @IsString()
    @IsNotEmpty()
    productImg: string

    @IsString()
    @IsNotEmpty()
    productCategory: Category

    @IsNumber()
    @IsNotEmpty()
    productAmt: number

    @IsNumber()
    @IsNotEmpty()
    paperAmt: number

    @IsNumber()
    @IsNotEmpty()
    productPrice: number

}