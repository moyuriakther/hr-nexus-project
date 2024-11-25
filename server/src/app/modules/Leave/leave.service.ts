import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { leaveSearchableFields } from "./leave.utils";

const getSingleLeave = async (id: string) => {
  const result = await prisma.leave.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      employee: true,
    },
  });
  return result;
};

const getAllLeaves = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.LeaveWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: leaveSearchableFields.map((field) => ({
        [field]: {
          contains: params.searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  const whereConditions: Prisma.LeaveWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.leave.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
    include: {
      employee: {
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phoneNumber: true,
        },
      },
    },
  });

  const total = await prisma.leave.count({
    where: whereConditions,
  });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const createLeave = async (data: any) => {
  const result = await prisma.leave.create({
    data: {
      ...data,
    },
    include: {
      employee: true,
    },
  });
  console.log(result);
  return result;
};

const updateLeave = async (id: string, data: any) => {
  const result = await prisma.leave.update({
    where: {
      id,
    },
    data,
    include: {
      employee: true,
    },
  });
  return result;
};

const deleteLeave = async (id: string) => {
  const result = await prisma.leave.delete({
    where: {
      id,
    },
  });
  return result;
};

export const leaveService = {
  getAllLeaves,
  getSingleLeave,
  createLeave,
  updateLeave,
  deleteLeave,
};
