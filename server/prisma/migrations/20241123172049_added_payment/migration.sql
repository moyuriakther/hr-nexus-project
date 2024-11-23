-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('PENDING', 'PAID', 'REJECTED');

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "salaryMonth" TEXT NOT NULL,
    "totalSalary" DOUBLE PRECISION NOT NULL,
    "releaseAmount" DOUBLE PRECISION,
    "status" "PaymentStatus",
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
