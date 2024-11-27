import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import {
  numericSearchableFieldsPayment,
  // paymentSearchableFields,
  stringSearchableFieldsPayment,
} from "./payment.utils";

// Create a new Payment
const createPayment = async (data: any) => {
  const result = await prisma.payment.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all Payments
const getAllPayments = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.PaymentWhereInput[] = [];

  // Handle search term
  if (searchTerm) {
    const orConditions: Prisma.PaymentWhereInput[] = [];

    // Add string-based search conditions
    stringSearchableFieldsPayment.forEach((field) => {
      orConditions.push({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      });
    });

    // Add numeric-based search conditions if searchTerm is a number
    const numericSearchValue = parseFloat(searchTerm);
    if (!isNaN(numericSearchValue)) {
      numericSearchableFieldsPayment.forEach((field) => {
        orConditions.push({
          [field]: {
            equals: numericSearchValue,
          },
        });
      });
    }

    // Add combined OR conditions to AND conditions
    andConditions.push({ OR: orConditions });
  }

  // Add filter conditions
  if (Object.keys(filterData).length > 0) {
    andConditions.push({
      AND: Object.entries(filterData).map(([key, value]) => ({
        [key]: {
          equals: value,
        },
      })) as Prisma.PaymentWhereInput[],
    });
  }

  // Combine conditions
  const whereConditions: Prisma.PaymentWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch paginated results
  const result = await prisma.payment.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    include: {
      employee: true, // Include related employee data
    },
  });

  // Count total results
  const total = await prisma.payment.count({
    where: whereConditions,
  });

  // Return paginated data
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get a single Payment by ID
const getSinglePayment = async (id: string) => {
  const result = await prisma.payment.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      employee: true,
    },
  });
  return result;
};

// Update a Payment by ID
const updatePayment = async (id: string, data: any) => {
  const result = await prisma.payment.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a Payment by ID
const deletePayment = async (id: string) => {
  const result = await prisma.payment.delete({
    where: {
      id,
    },
  });
  return result;
};

export const PaymentService = {
  createPayment,
  getAllPayments,
  getSinglePayment,
  updatePayment,
  deletePayment,
};
