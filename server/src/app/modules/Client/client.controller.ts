import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { clientService } from "./client.service";

// Create a new client
const createClient = catchAsync(async (req: Request, res: Response) => {
  const result = await clientService.createClient(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Client created successfully!",
    data: result,
  });
});

// Get all clients
const getAllClients = catchAsync(async (req: Request, res: Response) => {
  const result = await clientService.getAllClients();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Clients retrieved successfully!",
    data: result,
  });
});

// Get a single client
const getSingleClient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await clientService.getSingleClient(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Client retrieved successfully!",
    data: result,
  });
});

// Update a client
const updateClient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = req.body;

  const result = await clientService.updateClient(id, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Client updated successfully!",
    data: result,
  });
});

// Delete a client
const deleteClient = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await clientService.deleteClient(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Client deleted successfully!",
    data: result,
  });
});

export const clientController = {
  createClient,
  getAllClients,
  getSingleClient,
  updateClient,
  deleteClient,
};
