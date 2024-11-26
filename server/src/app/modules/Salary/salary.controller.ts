import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { SalaryService } from "./salary.service";
import { salaryFilterableFields } from "./salary.utils";

// Create a new Salary
const createSalary = catchAsync(async (req: Request, res: Response) => {
  const result = await SalaryService.createSalary(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Salary created successfully!",
    data: result,
  });
});

// Get all Salarys
const getAllSalary = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, salaryFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await SalaryService.getAllSalary(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Salary retrieved successfully!",
    data: result,
  });
});

// Get a single Salary
const getSingleSalary = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await SalaryService.getSingleSalary(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Salary retrieved successfully!",
    data: result,
  });
});

// Update a Salary
const updateSalary = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await SalaryService.updateSalary(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Salary updated successfully!",
    data: result,
  });
});

// Delete a Salary
const deleteSalary = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await SalaryService.deleteSalary(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Salary deleted successfully!",
    data: result,
  });
});

export const SalaryController = {
  createSalary,
  getAllSalary,
  getSingleSalary,
  updateSalary,
  deleteSalary,
};
