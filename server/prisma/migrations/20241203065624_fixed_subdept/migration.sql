/*
  Warnings:

  - You are about to drop the column `name` on the `sub_departments` table. All the data in the column will be lost.
  - Added the required column `subDepartmentName` to the `sub_departments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "sub_departments" DROP COLUMN "name",
ADD COLUMN     "subDepartmentName" TEXT NOT NULL;
