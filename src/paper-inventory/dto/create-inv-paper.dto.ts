import { Category } from "@prisma/client";
import {  IsEnum, IsNotEmpty, IsNumber,  IsString } from "class-validator";


export class CreatePaperInvDTO{
    @IsString()
    @IsNotEmpty()
    productName: string

    @IsEnum(Category)
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