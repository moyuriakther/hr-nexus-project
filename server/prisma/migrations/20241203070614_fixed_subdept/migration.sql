-- AlterTable
ALTER TABLE "departments" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "sub_departments" ADD COLUMN     "isDeleted" BOOLEAN NOT NULL DEFAULT false;
