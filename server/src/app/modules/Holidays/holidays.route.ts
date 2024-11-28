import express from "express";
import { holidayController } from "./holidays.controller";

const router = express.Router();

router.post("/create-holiday", holidayController.createHoliday);
router.get("/", holidayController.getAllHolidays);
router.get("/:id", holidayController.getSingleHoliday);
router.patch("/:id", holidayController.updateHoliday);
router.delete("/:id", holidayController.deleteHoliday);
export const HolidaysRoutes = router;
