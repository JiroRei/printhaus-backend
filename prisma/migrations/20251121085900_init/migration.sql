-- CreateEnum
CREATE TYPE "public"."EmployeeType" AS ENUM ('EMPLOYEE', 'ADMIN');

-- CreateEnum
CREATE TYPE "public"."PaymentMethod" AS ENUM ('CASH', 'DIGITAL');

-- CreateEnum
CREATE TYPE "public"."Category" AS ENUM ('A3', 'A4', 'A5', 'LETTER', 'LEGAL', 'TABLOID');

-- CreateTable
CREATE TABLE "public"."employees" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "employee_username" TEXT NOT NULL,
    "employee_type" "public"."EmployeeType" NOT NULL,
    "user_password" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "public"."printvalues" (
    "id" TEXT NOT NULL,
    "transactionId" SERIAL NOT NULL,
    "paper_size" TEXT NOT NULL,
    "print_orientation" TEXT NOT NULL,
    "print_copies" INTEGER NOT NULL,
    "print_color" TEXT NOT NULL,
    "print_price" DECIMAL(10,2) NOT NULL,
    "printer" TEXT NOT NULL,
    "payment_method" "public"."PaymentMethod" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "printvalues_pkey" PRIMARY KEY ("transactionId")
);

-- CreateTable
CREATE TABLE "public"."inventorypaper" (
    "id" TEXT NOT NULL,
    "productID" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_image" TEXT NOT NULL,
    "product_category" "public"."Category" NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "paper_amount_per_ream" INTEGER NOT NULL,
    "product_price" DECIMAL(10,2) NOT NULL,

    CONSTRAINT "inventorypaper_pkey" PRIMARY KEY ("productID")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_id_key" ON "public"."employees"("id");

-- CreateIndex
CREATE UNIQUE INDEX "printvalues_id_key" ON "public"."printvalues"("id");

-- CreateIndex
CREATE UNIQUE INDEX "inventorypaper_id_key" ON "public"."inventorypaper"("id");
