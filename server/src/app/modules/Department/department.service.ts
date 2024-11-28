import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { departmentSearchableFields } from "./department.utils";
const getSingleDepartment = async (id: string) => {
  // console.log(data);

  const result = await prisma.department.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const getAllDepartments = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.DepartmentWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: departmentSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.DepartmentWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.department.findMany({
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
      subDepartment: {
        select: {
          id: true,
          name: true,
          description: true,
          createdAt: true,
          updatedAt: true,
        },
      },
    },
  });

  const total = await prisma.department.count({
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

const createDepartment = async (data: any) => {
  console.log(data);
  const result = await prisma.department.create({
    data: {
      ...data,
    },
  });
  console.log(result);
  return result;
};

export const DepartmentService = {
  getAllDepartments,
  getSingleDepartment,
  createDepartment,
};
