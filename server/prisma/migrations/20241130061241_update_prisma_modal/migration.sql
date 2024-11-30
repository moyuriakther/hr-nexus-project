-- DropForeignKey
ALTER TABLE "leaves" DROP CONSTRAINT "leaves_employeeId_fkey";

-- AlterTable
ALTER TABLE "leaves" ALTER COLUMN "applyDate" DROP NOT NULL,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "reason" DROP NOT NULL,
ALTER COLUMN "employeeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "leaves" ADD CONSTRAINT "leaves_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;
