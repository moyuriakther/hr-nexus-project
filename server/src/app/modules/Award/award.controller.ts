import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { awardService } from "./award.service";
import pick from "../../../shared/pick";
import { awardFilterableFields } from "./award.utils";

// Create a new award
const createAward = catchAsync(async (req: Request, res: Response) => {
  const result = await awardService.createAward(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Award created successfully!",
    data: result,
  });
});

// Get all awards
const getAllAwards = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, awardFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await awardService.getAllAwards(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All awards retrieved successfully!",
    data: result,
  });
});

// Get a single award
const getSingleAward = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await awardService.getSingleAward(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Award retrieved successfully!",
    data: result,
  });
});

// Update an award
const updateAward = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await awardService.updateAward(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Award updated successfully!",
    data: result,
  });
});

// Delete an award
const deleteAward = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await awardService.deleteAward(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Award deleted successfully!",
    data: result,
  });
});

export const awardController = {
  createAward,
  getAllAwards,
  getSingleAward,
  updateAward,
  deleteAward,
};
