/*
  Warnings:

  - You are about to drop the column `name` on the `candidate_selections` table. All the data in the column will be lost.
  - You are about to drop the column `jobPosition` on the `short_lists` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `short_lists` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "candidate_selections" DROP CONSTRAINT "candidate_selections_candidateId_fkey";

-- AlterTable
ALTER TABLE "candidate_selections" DROP COLUMN "name",
ADD COLUMN     "candidateListId" TEXT;

-- AlterTable
ALTER TABLE "short_lists" DROP COLUMN "jobPosition",
DROP COLUMN "name";

-- AddForeignKey
ALTER TABLE "candidate_selections" ADD CONSTRAINT "candidate_selections_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "short_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
