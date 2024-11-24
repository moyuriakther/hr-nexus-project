import express from "express";
import { projectController } from "./projects.controller";

const router = express.Router();

router.post("/create-project", projectController.createProject);
router.get("/", projectController.getAllProjects);
router.get("/:id", projectController.getSingleProject);
router.patch("/:id", projectController.updateProject);
router.delete("/:id", projectController.deleteProject);
export const ProjectRoutes = router;
