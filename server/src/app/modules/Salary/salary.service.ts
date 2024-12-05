import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import {
  employeeSearchableFieldsForLoanForSalary,
  numericSearchableFieldsForSalary,
  // salarySearchableFields,
  stringSearchableFieldsForSalary,
} from "./salary.utils";

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

  if (searchTerm) {
    const orConditions: Prisma.SalaryWhereInput[] = [];

    // Add string-based search conditions for Salary
    stringSearchableFieldsForSalary.forEach((field) => {
      orConditions.push({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      });
    });

    // Add numeric-based search conditions for Salary if searchTerm is a number
    const numericSearchValue = parseFloat(searchTerm);
    if (!isNaN(numericSearchValue)) {
      numericSearchableFieldsForSalary.forEach((field) => {
        orConditions.push({
          [field]: {
            equals: numericSearchValue,
          },
        });
      });
    }

    // Add string-based search conditions for Employee
    const employeeSearchConditions: Prisma.EmployeeWhereInput = {
      OR: employeeSearchableFieldsForLoanForSalary.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    };

    // Include Employee search conditions in OR
    orConditions.push({
      employee: { OR: employeeSearchConditions.OR }, // Nested search for employee fields
    });

    andConditions.push({ OR: orConditions });
  }

  // Add additional filters
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.keys(filterData).map((key) => ({
        [key]: {
          equals: (filterData as any)[key],
        },
      })),
    });
  }

  // Construct where conditions
  const whereConditions: Prisma.SalaryWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination
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
      employee: true, // Include related employee data
    },
  });

  // Count total matching records
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
