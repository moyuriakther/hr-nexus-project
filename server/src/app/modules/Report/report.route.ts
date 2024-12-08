import express from "express";
import { ReportController } from "./report.controller";

const router = express.Router();

router.get("/attendance", ReportController.getAttendancesReport);
router.get("/leave", ReportController.getLeaveReport);
router.get("/employees", ReportController.getEmployeeReport);

export const ReportRoutes = router;
