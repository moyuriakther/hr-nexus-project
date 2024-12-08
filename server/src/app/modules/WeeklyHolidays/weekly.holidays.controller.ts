import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";

import pick from "../../../shared/pick";
import { weekly_holidaysFilterableFields } from "./weekly.holidays.utils";
import { weeklyHolidayService } from "./weekly.holidays.service";

// Create a new weekly holiday
const createWeeklyHoliday = catchAsync(async (req: Request, res: Response) => {
  const result = await weeklyHolidayService.createWeeklyHoliday(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Weekly holiday created successfully!",
    data: result,
  });
});

// Get all weekly holidays
const getAllWeeklyHolidays = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, weekly_holidaysFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await weeklyHolidayService.getAllWeeklyHolidays(
    filters,
    options
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Weekly holidays retrieved successfully!",
    data: result,
  });
});

// Get a single weekly holiday
const getSingleWeeklyHoliday = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await weeklyHolidayService.getSingleWeeklyHoliday(id);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Weekly holiday retrieved successfully!",
      data: result,
    });
  }
);

// Update a weekly holiday
const updateWeeklyHoliday = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await weeklyHolidayService.updateWeeklyHoliday(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Weekly holiday updated successfully!",
    data: result,
  });
});

// Delete a weekly holiday
const deleteWeeklyHoliday = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await weeklyHolidayService.deleteWeeklyHoliday(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Weekly holiday deleted successfully!",
    data: result,
  });
});

export const weeklyHolidayController = {
  createWeeklyHoliday,
  getAllWeeklyHolidays,
  getSingleWeeklyHoliday,
  updateWeeklyHoliday,
  deleteWeeklyHoliday,
};
