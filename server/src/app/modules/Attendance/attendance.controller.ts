import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { AttendanceService } from "./attendance.service";

const getSingleAttendance = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await AttendanceService.getSingleAttendance(id);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: " single Attendance retrieved successfully!",
    data: result,
  });
});

const getAllAttendances = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.getAllAttendances();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Attendances retrieved successfully!",

    data: result,
  });
});
const createAttendance = catchAsync(async (req: Request, res: Response) => {
  const result = await AttendanceService.createAttendance(req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Attendances Created successfully!",

    data: result,
  });
});
export const AttendanceController = {
  getAllAttendances,
  getSingleAttendance,
  createAttendance,
};
