import prisma from "../../../shared/prisma";

import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { Prisma } from "@prisma/client";
import { NoticeboardSearchableFields } from "./noticeboard.utils";

// Create a new Noticeboard
const createNoticeboard = async (data: any) => {
  const result = await prisma.noticeBoard.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all Noticeboards
const getAllNoticeboards = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.NoticeBoardWhereInput[] = [
    {
      isDeleted: false,
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: NoticeboardSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  // Handle filter conditions
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  // Combine conditions
  const whereConditions: Prisma.NoticeBoardWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.noticeBoard.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
  });

  // Get total count
  const total = await prisma.noticeBoard.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get a single Noticeboard by ID
const getSingleNoticeboard = async (id: string) => {
  const result = await prisma.noticeBoard.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

// Update a Noticeboard by ID
const updateNoticeboard = async (id: string, data: any) => {
  const result = await prisma.noticeBoard.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a Noticeboard by ID
const deleteNoticeboard = async (id: string) => {
  const result = await prisma.noticeBoard.delete({
    where: {
      id,
    },
  });
  return result;
};

export const NoticeboardService = {
  createNoticeboard,
  getAllNoticeboards,
  getSingleNoticeboard,
  updateNoticeboard,
  deleteNoticeboard,
};
