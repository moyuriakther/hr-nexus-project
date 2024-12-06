import { Router } from "express";
import { PositionController } from "./position.controller";

const router = Router();

router.post("/create-position", PositionController.createPosition);
router.get("/", PositionController.getAllPositions);
router.get("/:id", PositionController.getSinglePosition);
router.patch("/:id", PositionController.updatePosition);
router.delete("/:id", PositionController.deletePosition);

export const PositionRoutes = router;
