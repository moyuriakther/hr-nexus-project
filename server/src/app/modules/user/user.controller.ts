import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";
import catchAsync from "../../../shared/catchAsync";
import { JwtPayload } from "jsonwebtoken";
import { Request, Response } from "express";

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUser(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "User Created Successfully",
    data: {
      id: result.id,
      name: result.name,
      email: result.email,
      phoneNumber: result.phoneNumber,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt,
    },
  });
});

const getUsers = catchAsync(async (req, res) => {
  const result = await UserServices.getUsers();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Users Fetched Successfully",
    data: result,
  });
});

const getMyProfile = catchAsync(
  async (req: Request & { user?: JwtPayload }, res: Response) => {
    const user = req.user as JwtPayload;

    const result = await UserServices.getMyProfile(user);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Profile retrieved successfully",
      data: result,
    });
  }
);

const updateMyProfile = catchAsync(
  async (req: Request & { user?: JwtPayload }, res: Response) => {
    const user = req.user as JwtPayload;

    const result = await UserServices.updateMyProfile(user, req.body);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "User profile updated successfully",
      data: result,
    });
  }
);

export const UserController = {
  createUser,
  getUsers,
  getMyProfile,
  updateMyProfile,
};
