// import { Request, Response } from "express";
// import catchAsync from "../../../shared/catchAsync";
// import sendResponse from "../../../shared/sendResponse";
// import httpStatus from "http-status";
// import { ReportService } from "./report.service";

// const getAttendancesReport = catchAsync(async (req: Request, res: Response) => {
//   const result = await ReportService.getAttendancesReport();

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Attendances Report retrieved successfully!",
//     data: result,
//   });
// });
// const getLeaveReport = catchAsync(async (req: Request, res: Response) => {
//   const result = await ReportService.getLeaveReport();

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Leave Report retrieved successfully!",
//     data: result,
//   });
// });
// export const ReportController = {
//   getAttendancesReport,
//   getLeaveReport,
// };
