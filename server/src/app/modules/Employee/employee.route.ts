import { Router } from "express";
import { EmployeeController } from "./employee.controller";

const router = Router();

router.post("/create-employee", EmployeeController.createEmployee);
router.get("/get-employees", EmployeeController.getEmployees);
router.get("/:id", EmployeeController.getSingleEmployee);
router.patch("/:id", EmployeeController.updateEmployee);

export const EmployeeRoutes = router;
