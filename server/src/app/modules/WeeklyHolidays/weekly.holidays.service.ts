import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new weekly holiday
const createWeeklyHoliday = async (data: any) => {
  return await prisma.weeklyHolidays.create({
    data,
  });
};

// Get all weekly holidays with filters and pagination
const getAllWeeklyHolidays = async () => {
  return await prisma.weeklyHolidays.findMany();
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
