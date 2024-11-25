import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { EmployeeServices } from "./employee.service";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { Prisma } from "@prisma/client";
import pick from "../../../shared/pick";
import { employeeFilterableFields } from "./employee.utils";

const createEmployee = catchAsync(async (req: Request, res: Response) => {
  //   console.log(req.body);
  const result = await EmployeeServices.createEmployee(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employee Created successfully!",
    data: result,
  });
});
const getEmployees = catchAsync(async (req: Request, res: Response) => {
  // console.log(req.query)
  const filters = pick(req.query, employeeFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);

  const result = await EmployeeServices.getEmployees(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Employees retrieved  successfully!",
    meta: result.meta,
    data: result.data,
  });
});

const getSingleEmployee = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await EmployeeServices.getSingleEmployee(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: " single Employee retrieved successfully!",
    data: result,
  });
});
export const EmployeeController = {
  createEmployee,
  getEmployees,
  getSingleEmployee,
};
