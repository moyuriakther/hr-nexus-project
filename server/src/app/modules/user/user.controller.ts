import httpStatus from "http-status";
import sendResponse from "../../../shared/sendResponse";
import { UserServices } from "./user.service";
import catchAsync from "../../../shared/catchAsync";

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

export const UserController = {
  createUser,
  getUsers,
};
