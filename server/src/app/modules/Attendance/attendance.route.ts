import express, { NextFunction, Request, Response } from "express";
import { AttendanceController } from "./attendance.controller";

const router = express.Router();
router.post("/create-attendance", AttendanceController.createAttendance);
router.get("/", AttendanceController.getAllAttendances);
router.get("/:id", AttendanceController.getSingleAttendance);
export const AttendanceRoutes = router;
