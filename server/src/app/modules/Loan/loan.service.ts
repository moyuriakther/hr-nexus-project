import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import {
  employeeSearchableFieldsForLoan,
  numericSearchableFields,
  stringSearchableFields,
} from "./loan.utils";

// Create a new loan
const createLoan = async (data: any) => {
  const result = await prisma.loan.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all loans
const getAllLoans = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.LoanWhereInput[] = [
    {
      isDeleted: false, // Exclude deleted records
    },
  ];

  // Add search term filters
  if (searchTerm) {
    const orConditions: Prisma.LoanWhereInput[] = [];

    // Add string-based search conditions for Loan
    stringSearchableFields.forEach((field) => {
      orConditions.push({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      });
    });

    // Add numeric-based search conditions for Loan if searchTerm is a number
    const numericSearchValue = parseFloat(searchTerm);
    if (!isNaN(numericSearchValue)) {
      numericSearchableFields.forEach((field) => {
        orConditions.push({
          [field]: {
            equals: numericSearchValue,
          },
        });
      });
    }

    // Add string-based search conditions for Employee
    const employeeSearchConditions: Prisma.EmployeeWhereInput = {
      OR: employeeSearchableFieldsForLoan.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    };

    // Include Employee search conditions in OR
    orConditions.push({
      employee: { is: employeeSearchConditions }, // Nested search for employee fields
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
  const whereConditions: Prisma.LoanWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination
  const result = await prisma.loan.findMany({
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
  const total = await prisma.loan.count({
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

// Get a single loan by ID
const getSingleLoan = async (id: string) => {
  const result = await prisma.loan.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      employee: true,
    },
  });
  return result;
};

// Update a loan by ID
const updateLoan = async (id: string, data: any) => {
  const result = await prisma.loan.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a loan by ID
const deleteLoan = async (id: string) => {
  const result = await prisma.loan.delete({
    where: {
      id,
    },
  });
  return result;
};

export const loanService = {
  createLoan,
  getAllLoans,
  getSingleLoan,
  updateLoan,
  deleteLoan,
};
