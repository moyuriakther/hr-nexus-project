/*
  Warnings:

  - You are about to drop the column `userId` on the `loans` table. All the data in the column will be lost.
  - Added the required column `employeeId` to the `loans` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_userId_fkey";

-- AlterTable
ALTER TABLE "loans" DROP COLUMN "userId",
ADD COLUMN     "employeeId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "loans" ADD CONSTRAINT "loans_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
