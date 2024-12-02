import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { candidateSearchableFields, chars } from "./recruitment.utils";
import AppError from "../../../shared/AppError";
import httpStatus from "http-status";

// Create a new Recruitment
const createRecruitment = async (data: any) => {
  const result = await prisma.recruitment.create({
    data: {
      ...data,
    },
  });
  return result;
};

const getAllCandidates = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.RecruitmentWhereInput[] = [];

  if (searchTerm) {
    // Create a search condition for the Project model itself
    const candidateSearchConditions = candidateSearchableFields.map(
      (field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })
    );

    // Combine both project and client search conditions using OR
    andConditions.push({
      OR: [...candidateSearchConditions],
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

  // Combine conditions
  const whereConditions: Prisma.RecruitmentWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.recruitment.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
  });

  // Get total count
  const total = await prisma.recruitment.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const interviewSchedule = async (data: any) => {
  await prisma.recruitment.findUniqueOrThrow({
    where: {
      id: data.candidateId,
    },
  });

  const alreadyExist = await prisma.interview.findFirstOrThrow({
    where: {
      candidateId: data.candidateId,
    },
  });

  if (alreadyExist) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      "user already exist in interview list"
    );
  }

  const result = await prisma.interview.create({
    data: {
      ...data,
    },
  });

  return result;
};

export const RecruitmentService = {
  createRecruitment,
  getAllCandidates,
  interviewSchedule,
};
