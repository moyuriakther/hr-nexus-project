import express from "express";
import { RecruitmentController } from "./recruitment.controller";

const router = express.Router();

router.post("/create_candidate", RecruitmentController.createRecruitment);
router.get("/all_candidates", RecruitmentController.getAllCandidate);
router.post("/interview_schedule", RecruitmentController.interviewSchedule);

export const RecruitmentRoutes = router;
