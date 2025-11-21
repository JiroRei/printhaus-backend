import { Injectable } from "@nestjs/common"
import * as path from "path"
import * as fs from "fs"
import printer from "pdf-to-printer"

@Injectable()
export class PrintService {
  findAll() {
    return "Printer service active"
  }

  async printFile(
    file: Express.Multer.File,
    body: {
      paperSize: string
      copies: string
      printColor: string
      orientation: string
      printer?: string
    }
  ) {
    const uploadPath = path.join(process.cwd(), "uploads", file.filename)

    try {
      if (!fs.existsSync(uploadPath)) {
        fs.writeFileSync(uploadPath, file.buffer)
      }

      const options: any = {
        printer: body.printer || "Microsoft Print to PDF",
        copies: parseInt(body.copies, 10) || 1,
        paperSize: body.paperSize,
      }

      console.log("Sending file to printer:", options)

      if (path.extname(file.filename).toLowerCase() === ".pdf") {
        await printer.print(uploadPath, options)
        console.log("Printed successfully")
        return { success: true, message: "Printed successfully" }
      } else {
        return {
          success: false,
          message: "Only PDF files can be printed directly",
        }
      }
    } catch (error) {
      console.error("Print error:", error)
      return { success: false, message: error.message }
    }
  }
}
