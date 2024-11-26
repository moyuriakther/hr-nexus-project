import express, { NextFunction, Request, Response } from "express";
import { subDepartmentController } from "./sub-department.controller";

const router = express.Router();
router.post(
  "/create-sub-department",
  subDepartmentController.createSubDepartment
);
router.get("/", subDepartmentController.getAllSubDepartments);
router.get("/:id", subDepartmentController.getSingleSubDepartment);
export const SubDepartmentRoutes = router;
