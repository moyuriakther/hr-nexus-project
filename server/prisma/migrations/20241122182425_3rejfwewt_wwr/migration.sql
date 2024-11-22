/*
  Warnings:

  - You are about to drop the column `card_no` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `employees` table. All the data in the column will be lost.
  - You are about to drop the column `photo` on the `users` table. All the data in the column will be lost.
  - Added the required column `firstName` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "card_no",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "cardNumber" TEXT,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ALTER COLUMN "attendanceShift" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "emergencyContactNumber" DROP NOT NULL,
ALTER COLUMN "emergencyContactPerson" DROP NOT NULL,
ALTER COLUMN "emergencyContactRelationship" DROP NOT NULL,
ALTER COLUMN "hireDate" DROP NOT NULL,
ALTER COLUMN "isDisabled" SET DEFAULT false,
ALTER COLUMN "monthlyWorkHours" DROP NOT NULL,
ALTER COLUMN "payFrequency" DROP NOT NULL,
ALTER COLUMN "workPermit" DROP NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "photo",
ALTER COLUMN "status" SET DEFAULT 'ACTIVE';
