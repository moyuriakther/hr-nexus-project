import express from "express";
import { awardController } from "./award.controller";

const router = express.Router();

router.post("/create-award", awardController.createAward);
router.get("/", awardController.getAllAwards);
router.get("/:id", awardController.getSingleAward);
router.patch("/:id", awardController.updateAward);
router.delete("/:id", awardController.deleteAward);

export const AwardRoutes = router;
