import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { projectService } from "./projects.service";

// Create a new project
const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.createProject(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully!",
    data: result,
  });
});

// Get all projects
const getAllProjects = catchAsync(async (req: Request, res: Response) => {
  const result = await projectService.getAllProjects();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully!",
    data: result,
  });
});

// Get a single project
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await projectService.getSingleProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully!",
    data: result,
  });
});

// Update a project
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await projectService.updateProject(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully!",
    data: result,
  });
});

// Delete a project
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await projectService.deleteProject(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully!",
    data: result,
  });
});

export const projectController = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};
