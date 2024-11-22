/*
  Warnings:

  - The primary key for the `Department` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Employee` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `SubDepartment` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `holidays` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `leaves` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `salaries` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `weekly_holidays` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Department" DROP CONSTRAINT "Department_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Department_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Department_id_seq";

-- AlterTable
ALTER TABLE "Employee" DROP CONSTRAINT "Employee_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Employee_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Employee_id_seq";

-- AlterTable
ALTER TABLE "SubDepartment" DROP CONSTRAINT "SubDepartment_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "SubDepartment_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "SubDepartment_id_seq";

-- AlterTable
ALTER TABLE "holidays" DROP CONSTRAINT "holidays_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "holidays_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "holidays_id_seq";

-- AlterTable
ALTER TABLE "leaves" DROP CONSTRAINT "leaves_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "leaves_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "leaves_id_seq";

-- AlterTable
ALTER TABLE "salaries" DROP CONSTRAINT "salaries_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "salaries_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "salaries_id_seq";

-- AlterTable
ALTER TABLE "weekly_holidays" DROP CONSTRAINT "weekly_holidays_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "weekly_holidays_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "weekly_holidays_id_seq";
