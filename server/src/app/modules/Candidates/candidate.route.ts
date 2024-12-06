import express from "express";
import { CandidateController } from "./candidate.controller";

const router = express.Router();

router.post("/create-candidate", CandidateController.createCandidate);
router.post(
  "/create-candidate-selection",
  CandidateController.createCandidateSelection
);
router.post(
  "/create-candidate-short-list",
  CandidateController.createCandidateShortList
);

// gets
router.get("/", CandidateController.getAllCandidates);
router.get("/short-listed", CandidateController.getAllShortListedCandidates);
router.get("/selected", CandidateController.getAllSelectedCandidates);
// get by ids
router.get("/:id", CandidateController.getSingleCandidate);
router.get(
  "/short-listed/:id",
  CandidateController.getSingleShortListedCandidate
);
// router.get("/selected/:id", CandidateController.getSingleSelectedCandidate);

router.patch("/:id", CandidateController.updateCandidate);
router.delete("/:id", CandidateController.deleteCandidate);

export const CandidateRoutes = router;
