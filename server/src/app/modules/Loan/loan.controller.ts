import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { loanService } from "./loan.service";
import pick from "../../../shared/pick";
import { loanFilterableFields } from "./loan.utils";

// Create a new loan
const createLoan = catchAsync(async (req: Request, res: Response) => {
  const result = await loanService.createLoan(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Loan created successfully!",
    data: result,
  });
});

// Get all loans
const getAllLoans = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, loanFilterableFields);
  const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
  const result = await loanService.getAllLoans(filters, options);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Loans retrieved successfully!",
    data: result,
  });
});

// Get a single loan by ID
const getSingleLoan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await loanService.getSingleLoan(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Loan retrieved successfully!",
    data: result,
  });
});

// Update a loan by ID
const updateLoan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await loanService.updateLoan(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Loan updated successfully!",
    data: result,
  });
});

// Delete a loan by ID
const deleteLoan = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await loanService.deleteLoan(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Loan deleted successfully!",
    data: result,
  });
});

export const loanController = {
  createLoan,
  getAllLoans,
  getSingleLoan,
  updateLoan,
  deleteLoan,
};
