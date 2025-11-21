/*
  Warnings:

  - Added the required column `print_file` to the `printvalues` table without a default value. This is not possible if the table is not empty.
  - Added the required column `printer` to the `printvalues` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "printvalues" ADD COLUMN     "print_file" TEXT NOT NULL,
ADD COLUMN     "printer" TEXT NOT NULL;
