-- CreateEnum
CREATE TYPE "Category" AS ENUM ('A3', 'A4', 'A5', 'LETTER', 'LEGAL', 'TABLOID');

-- CreateTable
CREATE TABLE "inventory" (
    "id" TEXT NOT NULL,
    "productID" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_image" TEXT NOT NULL,
    "product_category" "Category" NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "paper_amount_per_ream" INTEGER NOT NULL,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("productID")
);

-- CreateIndex
CREATE UNIQUE INDEX "inventory_id_key" ON "inventory"("id");
