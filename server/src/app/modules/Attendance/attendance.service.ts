import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { attendanceSearchableFields } from "./attendance.utils";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
const getSingleAttendance = async (id: string) => {
  // console.log(data);

  const result = await prisma.attendance.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const getAllAttendances = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.AttendanceWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: attendanceSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.AttendanceWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.attendance.findMany({
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
        include: {
          department: true,
          subDepartment: true,
          attendance: true,
        },
      },
    },
  });

  const total = await prisma.attendance.count({
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

const createAttendance = async (data: any) => {
  const result = await prisma.attendance.create({
    data,
  });
  return result;
};

export const AttendanceService = {
  getAllAttendances,
  getSingleAttendance,
  createAttendance,
};
