import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { subDepartmentService } from "./sub-department.service";
import { subDepartmentFilterableFields } from "./sub-department.utils";
import pick from "../../../shared/pick";

const getSingleSubDepartment = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await subDepartmentService.getSingleSubDepartment(id);

    sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "sub single Department retrieved successfully!",
      data: result,
    });
  }
);

const getAllSubDepartments = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, subDepartmentFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await subDepartmentService.getAllSubDepartments(
    filters,
    options
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "sub Departments retrieved successfully!",

    data: result,
  });
});
const createSubDepartment = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.body);
  const result = await subDepartmentService.createSubDepartment(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: " sub Departments Created successfully!",

    data: result,
  });
});
export const subDepartmentController = {
  getAllSubDepartments,
  getSingleSubDepartment,
  createSubDepartment,
};
