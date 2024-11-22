import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import catchAsync from "../../../shared/catchAsync";
import { Request, Response } from "express";
import { EmployeeServices } from "./employee.service";

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

export const EmployeeController = {
  createEmployee,
};
