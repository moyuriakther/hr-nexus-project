import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import pick from "../../../shared/pick";
import { RecruitmentService } from "./recruitment.service";
import { candidateFilterableFields } from "./recruitment.utils";

// Create a new Recruitment
const createRecruitment = catchAsync(async (req: Request, res: Response) => {
  const result = await RecruitmentService.createRecruitment(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Recruitment created successfully!",
    data: result,
  });
});

const getAllCandidate = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, candidateFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await RecruitmentService.getAllCandidates(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "successfully get all candidates",
    data: result,
  });
});

const interviewSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await RecruitmentService.interviewSchedule(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Interview update",
    data: result,
  });
});

export const RecruitmentController = {
  createRecruitment,
  getAllCandidate,
  interviewSchedule,
};
