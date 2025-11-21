import {  EmployeeType } from "@prisma/client";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";

export class CreateEmployihDto {

    @IsNotEmpty()
    @IsString()
    nameFirst: string;

    @IsOptional()
    @IsString()
    nameLast: string;

    @IsNotEmpty()
    @IsString()
    userNameShi: string;

    @IsNotEmpty()
    @IsString()
    wordPass: string;

    @IsNotEmpty()
    @IsEnum(EmployeeType)   

    employeeTypeShi: EmployeeType;
    
}
