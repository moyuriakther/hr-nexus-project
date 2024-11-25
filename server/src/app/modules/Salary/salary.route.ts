import express from "express";
import { SalaryController } from "./salary.controller";

const router = express.Router();

router.post("/create-salary", SalaryController.createSalary);
router.get("/", SalaryController.getAllSalary);
router.get("/:id", SalaryController.getSingleSalary);
router.patch("/:id", SalaryController.updateSalary);
router.delete("/:id", SalaryController.deleteSalary);
export const SalaryRoutes = router;
