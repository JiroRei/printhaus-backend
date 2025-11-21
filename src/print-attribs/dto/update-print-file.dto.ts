import { PartialType } from "@nestjs/mapped-types";
import { CreatePrintFileDTO } from "./create-print-file.dto";


export class UpdatePrintFileDTO extends PartialType(CreatePrintFileDTO) {}