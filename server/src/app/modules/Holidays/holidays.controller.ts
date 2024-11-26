import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

import pick from "../../../shared/pick";
import { holidaysFilterableFields } from "./holidays.utils";
import { holidayService } from "./holidays.service";

// Create a new holiday
const createHoliday = catchAsync(async (req: Request, res: Response) => {
  const result = await holidayService.createHoliday(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Holiday created successfully!",
    data: result,
  });
});

// Get all holidays
const getAllHolidays = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, holidaysFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await holidayService.getAllHolidays(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Holidays retrieved successfully!",
    data: result,
  });
});

// Get a single holiday
const getSingleHoliday = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await holidayService.getSingleHoliday(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Holiday retrieved successfully!",
    data: result,
  });
});

// Update a holiday
const updateHoliday = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await holidayService.updateHoliday(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Holiday updated successfully!",
    data: result,
  });
});

// Delete a holiday
const deleteHoliday = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await holidayService.deleteHoliday(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Holiday deleted successfully!",
    data: result,
  });
});

export const holidayController = {
  createHoliday,
  getAllHolidays,
  getSingleHoliday,
  updateHoliday,
  deleteHoliday,
};
