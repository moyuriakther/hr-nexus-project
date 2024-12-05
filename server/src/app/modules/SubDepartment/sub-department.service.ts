import { Prisma } from "@prisma/client";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import prisma from "../../../shared/prisma";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { subDepartmentSearchableFields } from "./sub-department.utils";
const getSingleSubDepartment = async (id: string) => {
  // console.log(data);

  const result = await prisma.subDepartment.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      department: true,
    },
  });
  return result;
};
const getAllSubDepartments = async (
  params: any,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.SubDepartmentWhereInput[] = [
    {
      isDeleted: false,
    },
  ];

  if (params.searchTerm) {
    andConditions.push({
      OR: subDepartmentSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.SubDepartmentWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.subDepartment.findMany({
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
      department: true,
    },
  });

  const total = await prisma.subDepartment.count({
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

const createSubDepartment = async (data: any) => {
  // Adjusting the data structure
  const { departmentId, subDepartmentName, description } = data;

  const result = await prisma.subDepartment.create({
    data: {
      departmentId,
      subDepartmentName,
      description,
    },
  });

  return result;
};

const updateSubDepartment = async (id: string, data: any) => {
  // console.log(data);
  const result = await prisma.subDepartment.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteSubDepartment = async (id: string) => {
  const result = await prisma.department.update({
    where: { id },
    data: { isDeleted: true },
  });
  return result;
};

export const subDepartmentService = {
  getAllSubDepartments,
  getSingleSubDepartment,
  createSubDepartment,
  updateSubDepartment,
  deleteSubDepartment,
};
