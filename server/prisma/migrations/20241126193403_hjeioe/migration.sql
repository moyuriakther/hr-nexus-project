-- AlterTable
ALTER TABLE "holidays" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "weekly_holidays" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
