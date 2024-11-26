import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { salarySearchableFields } from "./salary.utils";

// Create a new Salary
const createSalary = async (data: any) => {
  const result = await prisma.salary.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all Salarys
const getAllSalary = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.SalaryWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: salarySearchableFields.map((field) => ({
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

  const whereConditions: Prisma.SalaryWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.salary.findMany({
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
      employee: true,
    },
  });

  const total = await prisma.salary.count({
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

// Get a single Salary by ID
const getSingleSalary = async (id: string) => {
  const result = await prisma.salary.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      employee: true,
    },
  });
  return result;
};

// Update a Salary by ID
const updateSalary = async (id: string, data: any) => {
  const result = await prisma.salary.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a Salary by ID
const deleteSalary = async (id: string) => {
  const result = await prisma.salary.delete({
    where: {
      id,
    },
  });
  return result;
};

export const SalaryService = {
  createSalary,
  getAllSalary,
  getSingleSalary,
  updateSalary,
  deleteSalary,
};
