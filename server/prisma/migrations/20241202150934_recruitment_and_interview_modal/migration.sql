/*
  Warnings:

  - You are about to drop the column `passportPhoto` on the `employees` table. All the data in the column will be lost.
  - The `dayName` column on the `weekly_holidays` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[email]` on the table `recruitment` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `notice_boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noticeType` to the `notice_boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `recruitment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `recruitment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `recruitment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `recruitment` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "leaves" DROP CONSTRAINT "leaves_employeeId_fkey";

-- AlterTable
ALTER TABLE "Payment" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "date" DROP NOT NULL,
ALTER COLUMN "date" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "attendances" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "awards" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "clients" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "employees" DROP COLUMN "passportPhoto",
ADD COLUMN     "bankName" TEXT,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "userRole" "UserRole" NOT NULL DEFAULT 'EMPLOYEE',
ALTER COLUMN "dateOfBirth" SET DATA TYPE TEXT,
ALTER COLUMN "joiningDate" SET DATA TYPE TEXT,
ALTER COLUMN "hireDate" SET DATA TYPE TEXT,
ALTER COLUMN "rehireDate" SET DATA TYPE TEXT,
ALTER COLUMN "terminationDate" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "holidays" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "leaves" ADD COLUMN     "leaveCode" TEXT DEFAULT '',
ALTER COLUMN "applyDate" DROP NOT NULL,
ALTER COLUMN "applyDate" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "startDate" DROP NOT NULL,
ALTER COLUMN "endDate" DROP NOT NULL,
ALTER COLUMN "reason" DROP NOT NULL,
ALTER COLUMN "employeeId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "loans" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "notice_boards" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "noticeAttachment" TEXT,
ADD COLUMN     "noticeBy" TEXT,
ADD COLUMN     "noticeDate" TIMESTAMP(3),
ADD COLUMN     "noticeType" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "project_managements" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "recruitment" ADD COLUMN     "alternativePhone" TEXT,
ADD COLUMN     "cgpa" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "comments" TEXT,
ADD COLUMN     "companyName" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "duties" TEXT,
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lastName" TEXT,
ADD COLUMN     "obtainedDegree" TEXT,
ADD COLUMN     "permanentAddress" TEXT,
ADD COLUMN     "phone" TEXT NOT NULL,
ADD COLUMN     "picture" TEXT,
ADD COLUMN     "presentAddress" TEXT,
ADD COLUMN     "ssn" TEXT,
ADD COLUMN     "supervisor" TEXT,
ADD COLUMN     "university" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "workingPeriod" TEXT,
ADD COLUMN     "zipCode" TEXT;

-- AlterTable
ALTER TABLE "salaries" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "sub_departments" ADD COLUMN     "isActive" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "weekly_holidays" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "dayName",
ADD COLUMN     "dayName" TEXT[];

-- CreateTable
CREATE TABLE "interview" (
    "id" TEXT NOT NULL,
    "candidateName" TEXT NOT NULL,
    "interviewer" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "interviewDate" TEXT NOT NULL,
    "vivaMarks" TEXT NOT NULL,
    "writtenMarks" TEXT NOT NULL,
    "mcqTotalMarks" TEXT NOT NULL,
    "totalMarks" TEXT NOT NULL,
    "selection" TEXT NOT NULL,
    "candidateId" TEXT NOT NULL,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "interview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recruitment_email_key" ON "recruitment"("email");

-- AddForeignKey
ALTER TABLE "leaves" ADD CONSTRAINT "leaves_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "interview" ADD CONSTRAINT "interview_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "recruitment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
