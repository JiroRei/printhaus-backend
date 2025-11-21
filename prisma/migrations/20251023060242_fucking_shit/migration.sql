-- CreateEnum
CREATE TYPE "EmployeeType" AS ENUM ('EMPLOYEE', 'ADMIN');

-- CreateTable
CREATE TABLE "employees" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "employee_type" "EmployeeType" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_id_key" ON "employees"("id");
