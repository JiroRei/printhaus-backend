import { Controller, Post, UploadedFile, UseInterceptors, Body, Get } from "@nestjs/common"
import { FileInterceptor } from "@nestjs/platform-express"
import * as fs from "fs"
import * as path from "path"
import { getPrinters } from "pdf-to-printer"
const printer = require("pdf-to-printer")

@Controller("print")
export class PrintController {
  @Post()
  @UseInterceptors(FileInterceptor("file"))
  async handlePrint(@UploadedFile() file: Express.Multer.File, @Body() body: any) {
    console.log("📩 Received POST /print request")

    if (!file) throw new Error("No file uploaded")

    const uploadPath = path.join(process.cwd(), "uploads", file.originalname)
    fs.writeFileSync(uploadPath, file.buffer)

    try {
      await printer.print(uploadPath, { printer: "Microsoft Print to PDF" })
      console.log("Printed successfully")
      return { success: true }
    } catch (err) {
      console.error("Print failed:", err)
      return { success: false, error: err.message }
    }
  }

  @Get("printers")
  async getPrinters() {
    try {
      const printers = await getPrinters()
      if (!Array.isArray(printers)) {
        console.error("Unexpected printers response:", printers)
        return []
      }
      return printers
    } catch (err) {
      console.error("Failed to get printers:", err)
      return []
    }
  }

}
