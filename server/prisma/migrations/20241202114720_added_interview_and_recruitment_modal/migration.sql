-- CreateTable
CREATE TABLE "recruitment" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "alternativePhone" TEXT,
    "ssn" TEXT,
    "presentAddress" TEXT,
    "permanentAddress" TEXT,
    "country" TEXT,
    "city" TEXT,
    "zipCode" TEXT,
    "picture" TEXT,
    "obtainedDegree" TEXT,
    "university" TEXT,
    "cgpa" TEXT,
    "comments" TEXT,
    "companyName" TEXT,
    "workingPeriod" TEXT,
    "duties" TEXT,
    "supervisor" TEXT,
    "interviewId" TEXT NOT NULL,

    CONSTRAINT "recruitment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "interview" (
    "id" TEXT NOT NULL,
    "jobPosition" TEXT NOT NULL,
    "interviewData" TEXT NOT NULL,
    "vivaMarks" TEXT NOT NULL,
    "writtenMarks" TEXT NOT NULL,
    "mcqTotalMarks" TEXT NOT NULL,
    "totalMarks" TEXT NOT NULL,
    "selection" TEXT NOT NULL,

    CONSTRAINT "interview_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "recruitment_email_key" ON "recruitment"("email");

-- AddForeignKey
ALTER TABLE "recruitment" ADD CONSTRAINT "recruitment_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
