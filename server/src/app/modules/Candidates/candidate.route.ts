import express from "express";
import { CandidateController } from "./candidate.controller";

const router = express.Router();

router.post("/create-candidate", CandidateController.createCandidate);

router.post(
  "/create-candidate-short-list",
  CandidateController.createCandidateShortList
);
router.post(
  "/create-candidate-selection",
  CandidateController.createCandidateSelection
);
router.post(
  "/create-candidate-interview",
  CandidateController.createCandidateInterview
);

// gets
router.get("/", CandidateController.getAllCandidates);
router.get("/short-listed", CandidateController.getAllShortListedCandidates);
router.get("/selected", CandidateController.getAllSelectedCandidates);
router.get("/interviews", CandidateController.getCandidatesInterviews);
// get by ids
router.get("/:id", CandidateController.getSingleCandidate);
router.get(
  "/short-listed/:id",
  CandidateController.getSingleShortListedCandidate
);
router.get("/selected/:id", CandidateController.getSingleSelectedCandidate);
// edit
router.patch("/:id", CandidateController.updateCandidate);
router.patch("/short-listed/:id", CandidateController.updateCandidateShortList);
router.patch("/interview/:id", CandidateController.updateCandidateInterview);
router.patch("/selected/:id", CandidateController.updateCandidateSelection);

router.delete("/:id", CandidateController.deleteCandidate);

export const CandidateRoutes = router;
