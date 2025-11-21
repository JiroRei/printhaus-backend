/*
  Warnings:

  - You are about to drop the `inventory` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "public"."inventory";

-- CreateTable
CREATE TABLE "inventorypaper" (
    "id" TEXT NOT NULL,
    "productID" SERIAL NOT NULL,
    "product_name" TEXT NOT NULL,
    "product_image" TEXT NOT NULL,
    "product_category" "Category" NOT NULL,
    "product_amount" INTEGER NOT NULL,
    "paper_amount_per_ream" INTEGER NOT NULL,
    "product_price" INTEGER NOT NULL,

    CONSTRAINT "inventorypaper_pkey" PRIMARY KEY ("productID")
);

-- CreateIndex
CREATE UNIQUE INDEX "inventorypaper_id_key" ON "inventorypaper"("id");
