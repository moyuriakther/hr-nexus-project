import { Prisma, PrismaClient } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { weekly_holidaysSearchableFields } from "./weekly.holidays.utils";

const prisma = new PrismaClient();

// Create a new weekly holiday
const createWeeklyHoliday = async (data: any) => {
  return await prisma.weeklyHolidays.create({
    data,
  });
};

// Get all weekly holidays with filters and pagination

const getAllWeeklyHolidays = async (
  params: any,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.WeeklyHolidaysWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: weekly_holidaysSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.WeeklyHolidaysWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.weeklyHolidays.findMany({
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
  });

  const total = await prisma.weeklyHolidays.count({
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

// Get a single weekly holiday by ID
const getSingleWeeklyHoliday = async (id: string) => {
  return await prisma.weeklyHolidays.findUnique({
    where: { id },
  });
};

// Update a weekly holiday by ID
const updateWeeklyHoliday = async (id: string, data: any) => {
  return await prisma.weeklyHolidays.update({
    where: { id },
    data,
  });
};

// Delete a weekly holiday by ID
const deleteWeeklyHoliday = async (id: string) => {
  return await prisma.weeklyHolidays.delete({
    where: { id },
  });
};

export const weeklyHolidayService = {
  createWeeklyHoliday,
  getAllWeeklyHolidays,
  getSingleWeeklyHoliday,
  updateWeeklyHoliday,
  deleteWeeklyHoliday,
};
