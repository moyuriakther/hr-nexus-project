import express, { NextFunction, Request, Response } from "express";
import { DepartmentController } from "./department.controller";

const router = express.Router();
router.post("/create-department", DepartmentController.createDepartment);
router.get("/", DepartmentController.getAllDepartments);
router.get("/:id", DepartmentController.getSingleDepartment);

router.patch("/:id", DepartmentController.updateDepartment);
router.patch("/:id", DepartmentController.deleteDepartment);
export const DepartmentRoutes = router;
