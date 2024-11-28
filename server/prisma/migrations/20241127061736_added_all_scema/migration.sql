/*
  Warnings:

  - You are about to drop the column `name` on the `departments` table. All the data in the column will be lost.
  - Added the required column `departmentName` to the `departments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "departments" DROP COLUMN "name",
ADD COLUMN     "departmentName" TEXT NOT NULL;
