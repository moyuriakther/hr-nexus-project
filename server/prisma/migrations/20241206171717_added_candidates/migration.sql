/*
  Warnings:

  - You are about to drop the `CandidateList` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `CandidateSelection` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NoticeData` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ShortList` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "CandidateList";

-- DropTable
DROP TABLE "CandidateSelection";

-- DropTable
DROP TABLE "NoticeData";

-- DropTable
DROP TABLE "ShortList";

-- CreateTable
CREATE TABLE "candidate_lists" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "candidateId" TEXT,
    "photograph" TEXT,
    "email" TEXT,
    "ssn" TEXT,
    "phone" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "candidate_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "candidate_selections" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "candidateId" TEXT,
    "employeeId" TEXT NOT NULL,
    "position" TEXT,
    "selectionTerms" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "candidate_selections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "short_lists" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "candidateId" TEXT,
    "jobPosition" TEXT,
    "shortlistDate" TIMESTAMP(3),
    "interviewDate" TIMESTAMP(3),
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "short_lists_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notice_boards" (
    "id" TEXT NOT NULL,
    "noticeType" TEXT,
    "description" TEXT,
    "noticeDate" TIMESTAMP(3),
    "noticeBy" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notice_boards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "candidate_lists_candidateId_key" ON "candidate_lists"("candidateId");
