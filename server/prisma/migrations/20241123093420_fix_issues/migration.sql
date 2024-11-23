/*
  Warnings:

  - Added the required column `employeeId` to the `leaves` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "AttendanceType" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY');

-- AlterTable
ALTER TABLE "attendances" ADD COLUMN     "attendanceType" "AttendanceType";

-- AlterTable
ALTER TABLE "holidays" ALTER COLUMN "holidayName" DROP NOT NULL,
ALTER COLUMN "fromDate" DROP NOT NULL,
ALTER COLUMN "toDate" DROP NOT NULL,
ALTER COLUMN "totalDays" DROP NOT NULL;

-- AlterTable
ALTER TABLE "leaves" ADD COLUMN     "employeeId" TEXT NOT NULL,
ALTER COLUMN "days" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "leaves" ADD CONSTRAINT "leaves_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
