import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new holiday
const createHoliday = async (data: any) => {
  return await prisma.holidays.create({
    data,
  });
};

// Get all holidays with filters and pagination
const getAllHolidays = async (filters: any, options: any) => {
  return await prisma.holidays.findMany({
    where: filters,
    skip: options.skip,
    take: options.take,
  });
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
