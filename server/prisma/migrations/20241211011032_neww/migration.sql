/*
  Warnings:

  - A unique constraint covering the columns `[candidateId]` on the table `interview` will be added. If there are existing duplicate values, this will fail.
  - Made the column `candidateId` on table `candidate_lists` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "candidate_selections" DROP CONSTRAINT "candidate_selections_interviewId_fkey";

-- AlterTable
ALTER TABLE "candidate_lists" ALTER COLUMN "candidateId" SET NOT NULL;

-- AlterTable
ALTER TABLE "candidate_selections" ALTER COLUMN "interviewId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "short_lists" ADD COLUMN     "meetingLink" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "interview_candidateId_key" ON "interview"("candidateId");

-- AddForeignKey
ALTER TABLE "candidate_selections" ADD CONSTRAINT "candidate_selections_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "interview"("candidateId") ON DELETE RESTRICT ON UPDATE CASCADE;
