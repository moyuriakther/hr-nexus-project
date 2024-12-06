import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { PositionServices } from "./position.service";

const createPosition = catchAsync(async (req, res) => {
  const data = req.body;
  const result = await PositionServices.createPosition(data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Position created successfully",
    data: result,
  });
});

const getAllPositions = catchAsync(async (req, res) => {
  const result = await PositionServices.getAllPositions();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Positions retrieved successfully",
    data: result,
  });
});

const getSinglePosition = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PositionServices.getSinglePosition(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Position retrieved successfully",
    data: result,
  });
});

const updatePosition = catchAsync(async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const result = await PositionServices.updatePosition(id, data);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Position updated successfully",
    data: result,
  });
});

const deletePosition = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await PositionServices.deletePosition(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Position deleted successfully",
    data: result,
  });
});

export const PositionController = {
  createPosition,
  getAllPositions,
  getSinglePosition,
  updatePosition,
  deletePosition,
};
