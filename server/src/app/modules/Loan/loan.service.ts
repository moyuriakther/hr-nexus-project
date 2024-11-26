import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { loanSearchableFields } from "./loan.utils";

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

  const andConditions: Prisma.LoanWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: loanSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.LoanWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

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
      employee: {
        include: {
          loan: true,
        },
        // select: {
        //   id: true,
        //   firstName: true,
        //   lastName: true,
        //   email: true,
        //   phoneNumber: true,

        // },
      },
    },
  });

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
