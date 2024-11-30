/*
  Warnings:

  - You are about to drop the column `passportPhoto` on the `employees` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "passportPhoto",
ADD COLUMN     "bankName" TEXT,
ALTER COLUMN "dateOfBirth" SET DATA TYPE TEXT,
ALTER COLUMN "joiningDate" SET DATA TYPE TEXT,
ALTER COLUMN "hireDate" SET DATA TYPE TEXT,
ALTER COLUMN "rehireDate" SET DATA TYPE TEXT,
ALTER COLUMN "terminationDate" SET DATA TYPE TEXT;
