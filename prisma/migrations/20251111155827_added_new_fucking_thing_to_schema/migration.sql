/*
  Warnings:

  - Added the required column `employee_username` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_password` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "PaymentMethod" AS ENUM ('CASH', 'DIGITAL');

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "employee_username" TEXT NOT NULL,
ADD COLUMN     "user_password" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "printvalues" (
    "id" TEXT NOT NULL,
    "paper_size" TEXT NOT NULL,
    "print_orientation" TEXT NOT NULL,
    "print_copies" INTEGER NOT NULL,
    "print_color" TEXT NOT NULL,
    "print_price" INTEGER NOT NULL,
    "payment_method" "PaymentMethod" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "printvalues_id_key" ON "printvalues"("id");
