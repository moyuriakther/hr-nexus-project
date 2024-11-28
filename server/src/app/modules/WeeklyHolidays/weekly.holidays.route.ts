import express from "express";
import { weeklyHolidayController } from "./weekly.holidays.controller";

const router = express.Router();

router.post("/create", weeklyHolidayController.createWeeklyHoliday);

router.get("/", weeklyHolidayController.getAllWeeklyHolidays);

router.get("/:id", weeklyHolidayController.getSingleWeeklyHoliday);

router.patch("/:id", weeklyHolidayController.updateWeeklyHoliday);

router.delete("/:id", weeklyHolidayController.deleteWeeklyHoliday);

export const weeklyHolidayRoutes = router;
