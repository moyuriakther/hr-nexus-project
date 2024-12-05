import express, { NextFunction, Request, Response } from "express";
import { subDepartmentController } from "./sub-department.controller";

const router = express.Router();
router.post(
  "/create-sub-department",
  subDepartmentController.createSubDepartment
);
router.get("/", subDepartmentController.getAllSubDepartments);
router.get("/:id", subDepartmentController.getSingleSubDepartment);

router.patch("/:id", subDepartmentController.updateSubDepartment);
// router.patch("/:id", subDepartmentController.deleteSubDepartment);
export const SubDepartmentRoutes = router;
