/*
  Warnings:

  - A unique constraint covering the columns `[interviewId]` on the table `interview` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[candidateId]` on the table `short_lists` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "interview" DROP CONSTRAINT "interview_candidateId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "interview_interviewId_key" ON "interview"("interviewId");

-- CreateIndex
CREATE UNIQUE INDEX "short_lists_candidateId_key" ON "short_lists"("candidateId");

-- AddForeignKey
ALTER TABLE "interview" ADD CONSTRAINT "interview_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "short_lists"("candidateId") ON DELETE RESTRICT ON UPDATE CASCADE;
