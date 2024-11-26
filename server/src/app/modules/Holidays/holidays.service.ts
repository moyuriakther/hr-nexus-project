import { Prisma, PrismaClient } from "@prisma/client";
import { holidaysSearchableFields } from "./holidays.utils";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";

const prisma = new PrismaClient();

// Create a new holiday
const createHoliday = async (data: any) => {
  return await prisma.holidays.create({
    data,
  });
};

// Get all holidays with filters and pagination
const getAllHolidays = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.HolidaysWhereInput[] = [
    {
      isDeleted: false, // Ensure only non-deleted records are fetched
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: [
        {
          holidayName: {
            contains: searchTerm,
            mode: "insensitive", // Case-insensitive search for strings
          },
        },
        {
          // Assuming totalDays is a number
          totalDays: {
            equals: parseInt(searchTerm, 10), // Convert searchTerm to a number
          },
        },
      ],
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
  const whereConditions: Prisma.HolidaysWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.holidays.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" }, // Default sorting by creation date
  });

  // Get total count
  const total = await prisma.holidays.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get a single holiday by ID
const getSingleHoliday = async (id: string) => {
  return await prisma.holidays.findUnique({
    where: { id },
  });
};

// Update a holiday by ID
const updateHoliday = async (id: string, data: any) => {
  return await prisma.holidays.update({
    where: { id },
    data,
  });
};

// Delete a holiday by ID
const deleteHoliday = async (id: string) => {
  return await prisma.holidays.delete({
    where: { id },
  });
};

export const holidayService = {
  createHoliday,
  getAllHolidays,
  getSingleHoliday,
  updateHoliday,
  deleteHoliday,
};
