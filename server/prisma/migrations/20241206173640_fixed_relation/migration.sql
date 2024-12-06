/*
  Warnings:

  - You are about to drop the column `employeeId` on the `candidate_selections` table. All the data in the column will be lost.
  - Made the column `candidateId` on table `candidate_selections` required. This step will fail if there are existing NULL values in that column.
  - Made the column `candidateId` on table `short_lists` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "candidate_selections" DROP COLUMN "employeeId",
ALTER COLUMN "candidateId" SET NOT NULL;

-- AlterTable
ALTER TABLE "short_lists" ALTER COLUMN "candidateId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "candidate_selections" ADD CONSTRAINT "candidate_selections_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidate_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "short_lists" ADD CONSTRAINT "short_lists_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "candidate_lists"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
