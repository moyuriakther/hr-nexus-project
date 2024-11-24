import express from "express";
import { leaveController } from "./leave.controller";

const router = express.Router();

router.post("/create-leave", leaveController.createLeave);
router.get("/", leaveController.getAllLeaves);
router.get("/:id", leaveController.getSingleLeave);
router.patch("/:id", leaveController.updateLeave);
router.delete("/:id", leaveController.deleteLeave);

export const LeaveRoutes = router;
