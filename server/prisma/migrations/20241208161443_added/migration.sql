/*
  Warnings:

  - You are about to drop the column `shortListedCandidateId` on the `candidate_selections` table. All the data in the column will be lost.
  - Added the required column `interviewId` to the `candidate_selections` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "candidate_selections" DROP CONSTRAINT "candidate_selections_shortListedCandidateId_fkey";

-- AlterTable
ALTER TABLE "candidate_selections" DROP COLUMN "shortListedCandidateId",
ADD COLUMN     "interviewId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "candidate_selections" ADD CONSTRAINT "candidate_selections_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
