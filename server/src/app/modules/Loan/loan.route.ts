import express from "express";
import { loanController } from "./loan.controller";

const router = express.Router();

router.post("/create-loan", loanController.createLoan);
router.get("/", loanController.getAllLoans);
router.get("/:id", loanController.getSingleLoan);
router.patch("/:id", loanController.updateLoan);
router.delete("/:id", loanController.deleteLoan);

export const LoanRoutes = router;
