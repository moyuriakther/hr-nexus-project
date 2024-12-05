import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { awardSearchableFields } from "./award.utils";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

// Create a new award
const createAward = async (data: any) => {
  console.log(data, 'award')
  const result = await prisma.award.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all awards
const getAllAwards = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm);

  const andConditions: Prisma.AwardWhereInput[] = [
    {
      isDeleted: false,
    }, 
  ];

  if (params.searchTerm) {
    andConditions.push({
      OR: awardSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.AwardWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.award.findMany({
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
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          phoneNumber: true,
        },
      },
    },
  });

  const total = await prisma.award.count({
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

// Get a single award by ID
const getSingleAward = async (id: string) => {
  const result = await prisma.award.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

// Update an award by ID
const updateAward = async (id: string, data: any) => {
  console.log(id, data)
  const isExist = await prisma.award.findUnique({
    where: {
      id
    }
  })
  if(!isExist){
    throw new ApiError(httpStatus.NOT_FOUND, "Award not found")
  }
  const result = await prisma.award.update({
    where: {
      id,
    },
    data: data,
  });
  console.log(result)
  return result;
};

// Delete an award by ID
const deleteAward = async (id: string) => {
  const result = await prisma.award.delete({
    where: {
      id,
    },
  });
  return result;
};

export const awardService = {
  createAward,
  getAllAwards,
  getSingleAward,
  updateAward,
  deleteAward,
};
