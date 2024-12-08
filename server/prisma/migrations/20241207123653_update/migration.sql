/*
  Warnings:

  - You are about to drop the column `employeeId` on the `loans` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "loans" DROP CONSTRAINT "loans_employeeId_fkey";

-- AlterTable
ALTER TABLE "loans" DROP COLUMN "employeeId";
