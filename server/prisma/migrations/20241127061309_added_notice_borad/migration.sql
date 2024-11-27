/*
  Warnings:

  - Added the required column `description` to the `notice_boards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `noticeType` to the `notice_boards` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notice_boards" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "noticeBy" TEXT,
ADD COLUMN     "noticeDate" TIMESTAMP(3),
ADD COLUMN     "noticeType" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "project_managements" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
