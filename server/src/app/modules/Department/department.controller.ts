import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { DepartmentService } from "./department.service";
import pick from "../../../shared/pick";
import { departmentFilterableFields } from "./department.utils";

const getSingleDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await DepartmentService.getSingleDepartment(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: " single Department retrieved successfully!",
    data: result,
  });
});

const getAllDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, departmentFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await DepartmentService.getAllDepartments(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Departments retrieved successfully!",

    data: result,
  });
});
const createDepartment = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.body);
  const result = await DepartmentService.createDepartment(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Departments Created successfully!",

    data: result,
  });
});
// Update a client
const updateDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;
  const result = await DepartmentService.updateDepartment(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Client updated successfully!",
    data: result,
  });
});

// Delete a client
const deleteDepartment = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await DepartmentService.deleteDepartment(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Client deleted successfully!",
    data: result,
  });
});

export const DepartmentController = {
  getAllDepartments,
  getSingleDepartment,
  createDepartment,
  updateDepartment,
  deleteDepartment,
};
