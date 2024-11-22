/*
  Warnings:

  - You are about to drop the column `selaryAdvance` on the `salaries` table. All the data in the column will be lost.
  - You are about to drop the column `totalBenifits` on the `salaries` table. All the data in the column will be lost.
  - You are about to drop the `Department` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `SubDepartment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attendanceShift` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `card_no` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `department` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContactNumber` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContactPerson` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `emergencyContactRelationship` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `employeeType` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hireDate` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isDisabled` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `maritalStatus` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monthlyWorkHours` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nidNumber` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `payFrequency` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `position` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workPermit` to the `employees` table without a default value. This is not possible if the table is not empty.
  - Added the required column `salaryAdvance` to the `salaries` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalBenefits` to the `salaries` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EmployeeType" AS ENUM ('FULL_TIME', 'PART_TIME', 'CONTRACT', 'INTERN', 'TEMPORARY', 'REMOTE');

-- CreateEnum
CREATE TYPE "Shift" AS ENUM ('GENERAL', 'OVERTIME', 'NIGHT');

-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('MALE', 'FEMALE', 'OTHER');

-- CreateEnum
CREATE TYPE "MaritalStatus" AS ENUM ('SINGLE', 'MARRIED', 'DIVORCED', 'WIDOWED');

-- AlterTable
ALTER TABLE "SubDepartment" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "accountNumber" TEXT,
ADD COLUMN     "alternateEmergencyContact" TEXT,
ADD COLUMN     "alternateEmergencyHomePhone" TEXT,
ADD COLUMN     "alternateEmergencyWorkPhone" TEXT,
ADD COLUMN     "alternateNumber" TEXT,
ADD COLUMN     "attendanceShift" "Shift" NOT NULL,
ADD COLUMN     "basicSalary" DOUBLE PRECISION,
ADD COLUMN     "bloodGroup" TEXT,
ADD COLUMN     "branchAddress" TEXT,
ADD COLUMN     "card_no" TEXT NOT NULL,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "department" TEXT NOT NULL,
ADD COLUMN     "disabilitiesDescription" TEXT,
ADD COLUMN     "dutyType" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "emergencyContactNumber" TEXT NOT NULL,
ADD COLUMN     "emergencyContactPerson" TEXT NOT NULL,
ADD COLUMN     "emergencyContactRelationship" TEXT NOT NULL,
ADD COLUMN     "emergencyHomePhone" TEXT,
ADD COLUMN     "emergencyWorkPhone" TEXT,
ADD COLUMN     "employeeGrade" TEXT,
ADD COLUMN     "employeeType" TEXT NOT NULL,
ADD COLUMN     "ethnicGroup" TEXT,
ADD COLUMN     "familyBenefit" DOUBLE PRECISION,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "gender" "Gender" NOT NULL,
ADD COLUMN     "grossSalary" DOUBLE PRECISION,
ADD COLUMN     "healthCondition" TEXT,
ADD COLUMN     "hireDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "homeEmail" TEXT,
ADD COLUMN     "homePhone" TEXT,
ADD COLUMN     "hourlyRate" DOUBLE PRECISION,
ADD COLUMN     "hourlyRate2" DOUBLE PRECISION,
ADD COLUMN     "isDisabled" BOOLEAN NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "maritalStatus" "MaritalStatus" NOT NULL,
ADD COLUMN     "medicalBenefit" DOUBLE PRECISION,
ADD COLUMN     "middleName" TEXT,
ADD COLUMN     "monthlyWorkHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "nidNumber" TEXT NOT NULL,
ADD COLUMN     "numberOfKids" INTEGER DEFAULT 0,
ADD COLUMN     "otherBenefit" DOUBLE PRECISION,
ADD COLUMN     "passport" TEXT,
ADD COLUMN     "passportPhoto" TEXT,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "payFrequency" TEXT NOT NULL,
ADD COLUMN     "payFrequencyText" TEXT,
ADD COLUMN     "phoneNumber" TEXT NOT NULL,
ADD COLUMN     "position" TEXT NOT NULL,
ADD COLUMN     "profileImage" TEXT,
ADD COLUMN     "rehireDate" TIMESTAMP(3),
ADD COLUMN     "religion" TEXT,
ADD COLUMN     "routingNumber" TEXT,
ADD COLUMN     "sosNumber" TEXT,
ADD COLUMN     "subDepartment" TEXT,
ADD COLUMN     "terminationDate" TIMESTAMP(3),
ADD COLUMN     "terminationReason" TEXT,
ADD COLUMN     "tinNumber" TEXT,
ADD COLUMN     "transportAllowance" DOUBLE PRECISION,
ADD COLUMN     "transportationBenefit" DOUBLE PRECISION,
ADD COLUMN     "workInCity" TEXT,
ADD COLUMN     "workPermit" BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE "salaries" DROP COLUMN "selaryAdvance",
DROP COLUMN "totalBenifits",
ADD COLUMN     "salaryAdvance" INTEGER NOT NULL,
ADD COLUMN     "totalBenefits" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Department";

-- CreateTable
CREATE TABLE "departments" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "departments_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- AddForeignKey
ALTER TABLE "SubDepartment" ADD CONSTRAINT "SubDepartment_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "departments"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
