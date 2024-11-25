import { Prisma } from "@prisma/client";
import prisma from "../../../shared/prisma";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { projectSearchableFields } from "./project.utils";

// Create a new project
const createProject = async (data: any) => {
  const result = await prisma.project.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all projects
const getAllProjects = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;

  const andConditions: Prisma.ProjectWhereInput[] = [];

  if (params.searchTerm) {
    andConditions.push({
      OR: projectSearchableFields.map((field) => ({
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

  const whereConditions: Prisma.ProjectWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  const result = await prisma.project.findMany({
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
      client: {
        select: {
          id: true,
          clientName: true,
          companyName: true,
          country: true,
          email: true,
          address: true,
        },
      },
    },
  });

  const total = await prisma.project.count({
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

// Get a single project by ID
const getSingleProject = async (id: string) => {
  const result = await prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      client: true, // Including client details
    },
  });
  return result;
};

// Update a project by ID
const updateProject = async (id: string, data: any) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a project by ID
const deleteProject = async (id: string) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });
  return result;
};

export const projectService = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
  deleteProject,
};