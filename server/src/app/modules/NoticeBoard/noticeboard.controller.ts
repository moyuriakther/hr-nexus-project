// import { Request, Response } from "express";
// import catchAsync from "../../../shared/catchAsync";
// import sendResponse from "../../../shared/sendResponse";
// import httpStatus from "http-status";

// import pick from "../../../shared/pick";
// import { NoticeboardService } from "./noticeboard.service";
// import { NoticeboardFilterableFields } from "./noticeboard.utils";

// // Create a new Noticeboard
// const createNoticeboard = catchAsync(async (req: Request, res: Response) => {
//   const result = await NoticeboardService.createNoticeboard(req.body);

//   sendResponse(res, {
//     statusCode: httpStatus.CREATED,
//     success: true,
//     message: "Noticeboard created successfully!",
//     data: result,
//   });
// });

// // Get all Noticeboards
// const getAllNoticeboards = catchAsync(async (req: Request, res: Response) => {
//   const filters = pick(req.query, NoticeboardFilterableFields);
//   const options = pick(req.query, ["limit", "page", "sortBy", "sortOrder"]);
//   const result = await NoticeboardService.getAllNoticeboards(filters, options);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Noticeboards retrieved successfully!",
//     data: result,
//   });
// });

// // Get a single Noticeboard
// const getSingleNoticeboard = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const result = await NoticeboardService.getSingleNoticeboard(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Noticeboard retrieved successfully!",
//     data: result,
//   });
// });

// // Update a Noticeboard
// const updateNoticeboard = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const data = req.body;

//   const result = await NoticeboardService.updateNoticeboard(id, data);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Noticeboard updated successfully!",
//     data: result,
//   });
// });

// // Delete a Noticeboard
// const deleteNoticeboard = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;

//   const result = await NoticeboardService.deleteNoticeboard(id);

//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Noticeboard deleted successfully!",
//     data: result,
//   });
// });

// export const NoticeboardController = {
//   createNoticeboard,
//   getAllNoticeboards,
//   getSingleNoticeboard,
//   updateNoticeboard,
//   deleteNoticeboard,
// };
