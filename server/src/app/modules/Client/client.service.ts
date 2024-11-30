import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { clientSearchableFields } from "./client.utils";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";

// Create a new client
const createClient = async (data: any) => {
  const result = await prisma.client.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all clients
const getAllClients = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.ClientWhereInput[] = [
    {
      isDeleted: false, // Ensure only non-deleted records are fetched
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: clientSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
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
  const whereConditions: Prisma.ClientWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.client.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    include: {
      project: true,
    },
  });

  // Get total count
  const total = await prisma.client.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

// Get a single client by ID
const getSingleClient = async (id: string) => {
  const result = await prisma.client.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      project: true, // If you want to include associated projects
    },
  });
  return result;
};

// Update a client by ID
const updateClient = async (id: string, data: any) => {
  const result = await prisma.client.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a client by ID
const deleteClient = async (id: string) => {
  const result = await prisma.client.delete({
    where: {
      id,
    },
  });
  return result;
};

export const clientService = {
  createClient,
  getAllClients,
  getSingleClient,
  updateClient,
  deleteClient,
};
