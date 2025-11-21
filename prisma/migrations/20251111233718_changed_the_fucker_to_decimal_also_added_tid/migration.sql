/*
  Warnings:

  - You are about to alter the column `print_price` on the `printvalues` table. The data in that column could be lost. The data in that column will be cast from `Integer` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE "printvalues" ADD COLUMN     "transactionId" SERIAL NOT NULL,
ALTER COLUMN "print_price" SET DATA TYPE DECIMAL(10,2),
ADD CONSTRAINT "printvalues_pkey" PRIMARY KEY ("transactionId");
