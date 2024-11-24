import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { leaveService } from "./leave.service";

const getSingleLeave = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await leaveService.getSingleLeave(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Leave retrieved successfully!",
    data: result,
  });
});

const getAllLeaves = catchAsync(async (req: Request, res: Response) => {
  const result = await leaveService.getAllLeaves();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All leaves retrieved successfully!",
    data: result,
  });
});

const createLeave = catchAsync(async (req: Request, res: Response) => {
  const result = await leaveService.createLeave(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Leave created successfully!",
    data: result,
  });
});

const updateLeave = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await leaveService.updateLeave(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Leave updated successfully!",
    data: result,
  });
});

const deleteLeave = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await leaveService.deleteLeave(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Leave deleted successfully!",
    data: result,
  });
});

export const leaveController = {
  getSingleLeave,
  getAllLeaves,
  createLeave,
  updateLeave,
  deleteLeave,
};
