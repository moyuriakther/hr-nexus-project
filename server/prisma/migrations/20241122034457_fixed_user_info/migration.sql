/*
  Warnings:

  - The values [admin,employee] on the enum `UserRole` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `username` on the `users` table. All the data in the column will be lost.
  - The `status` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Made the column `name` on table `users` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phoneNumber` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "UserRole_new" AS ENUM ('ADMIN', 'EMPLOYEE');
ALTER TABLE "users" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "users" ALTER COLUMN "role" TYPE "UserRole_new" USING ("role"::text::"UserRole_new");
ALTER TYPE "UserRole" RENAME TO "UserRole_old";
ALTER TYPE "UserRole_new" RENAME TO "UserRole";
DROP TYPE "UserRole_old";
ALTER TABLE "users" ALTER COLUMN "role" SET DEFAULT 'EMPLOYEE';
COMMIT;

-- DropIndex
DROP INDEX "users_username_key";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "username",
ALTER COLUMN "name" SET NOT NULL,
ALTER COLUMN "role" SET DEFAULT 'EMPLOYEE',
ALTER COLUMN "phoneNumber" SET NOT NULL,
DROP COLUMN "status",
ADD COLUMN     "status" "Status" DEFAULT 'INACTIVE';

-- DropEnum
DROP TYPE "UserAccountStatus";
