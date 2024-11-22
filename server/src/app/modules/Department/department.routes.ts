import express, { NextFunction, Request, Response } from "express";
import { DepartmentController } from "./department.controller";

const router = express.Router();
router.post("/create-Department", DepartmentController.createDepartment);
router.get("/", DepartmentController.getAllDepartments);
router.get("/:id", DepartmentController.getSingleDepartment);
export const DepartmentRoutes = router;
