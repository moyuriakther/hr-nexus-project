import { Router } from "express";
import { EmployeeController } from "./employee.controller";

const router = Router();

router.post("/create-employee", EmployeeController.createEmployee);
// router.get("/get-employees", EmployeeController.getEmployees);

export const EmployeeRoutes = router;
