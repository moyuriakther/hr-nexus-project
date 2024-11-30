/*
  Warnings:

  - The `dayName` column on the `weekly_holidays` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "weekly_holidays" DROP COLUMN "dayName",
ADD COLUMN     "dayName" TEXT[];
