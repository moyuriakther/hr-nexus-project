import prisma from "../../../shared/prisma";
// import { CandidateSearchableFields } from "./Candidate.utils";
import { paginationHelper } from "../../../Helpers/paginationHelpers";
import { IPaginationOptions } from "../../Interfaces/IPaginationOptions";
import { Prisma } from "@prisma/client";
import { CandidateSearchableFields } from "./candidate.utils";

// Create a new Candidate
const createCandidate = async (data: any) => {
  const result = await prisma.candidateList.create({
    data: {
      ...data,
    },
  });
  return result;
};
const createCandidateSelection = async (data: any) => {
  const result = await prisma.candidateSelection.create({
    data: {
      ...data,
    },
  });
  return result;
};
const createCandidateShortList = async (data: any) => {
  const result = await prisma.shortList.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all Candidates
const getAllCandidates = async (params: any, options: IPaginationOptions) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.CandidateListWhereInput[] = [
    {
      isDeleted: false, // Ensure only non-deleted records are fetched
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: CandidateSearchableFields.map((field) => ({
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
  const whereConditions: Prisma.CandidateListWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.candidateList.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    // include: {
    //   project: true,
    // },
  });

  // Get total count
  const total = await prisma.candidateList.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getAllShortListedCandidates = async (
  params: any,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.ShortListWhereInput[] = [
    {
      isDeleted: false, // Ensure only non-deleted records are fetched
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: CandidateSearchableFields.map((field) => ({
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
  const whereConditions: Prisma.ShortListWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.shortList.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    // include: {
    //   project: true,
    // },
  });

  // Get total count
  const total = await prisma.shortList.count({ where: whereConditions });

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getAllSelectedCandidates = async (
  params: any,
  options: IPaginationOptions
) => {
  const { page, limit, skip } = paginationHelper.calculatePagination(options);
  const { searchTerm, ...filterData } = params;
  console.log(searchTerm); // Debug log for searchTerm

  const andConditions: Prisma.CandidateSelectionWhereInput[] = [
    {
      isDeleted: false, // Ensure only non-deleted records are fetched
    },
  ];

  // Handle search term
  if (searchTerm) {
    andConditions.push({
      OR: CandidateSearchableFields.map((field) => ({
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
  const whereConditions: Prisma.CandidateSelectionWhereInput =
    andConditions.length > 0 ? { AND: andConditions } : {};

  // Fetch data with pagination and sorting
  const result = await prisma.candidateSelection.findMany({
    where: whereConditions,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? { [options.sortBy]: options.sortOrder }
        : { createdAt: "desc" },
    // include: {
    //   project: true,
    // },
  });

  // Get total count
  const total = await prisma.candidateSelection.count({
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

// Get a single Candidate by ID
const getSingleCandidate = async (id: string) => {
  const result = await prisma.candidateList.findUniqueOrThrow({
    where: {
      id,
    },
    // include: {
    //   project: true, // If you want to include associated projects
    // },
  });
  return result;
};
const getSingleShortListedCandidate = async (id: string) => {
  const result = await prisma.shortList.findUniqueOrThrow({
    where: {
      id,
    },
    include: {
      candidate: true,
    },
  });
  return result;
};
const getSingleSelectedCandidate = async (id: string) => {
  const result = await prisma.candidateSelection.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

// Update a Candidate by ID
const updateCandidate = async (id: string, data: any) => {
  const result = await prisma.candidateList.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
// Update a Candidate by ID
const updateShortListedCandidate = async (id: string, data: any) => {
  const result = await prisma.shortList.update({
    where: {
      id,
    },
    data,
  });
  return result;
};
// Update a Candidate by ID
const updateSelectedCandidate = async (id: string, data: any) => {
  const result = await prisma.candidateSelection.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

// Delete a Candidate by ID
const deleteCandidate = async (id: string) => {
  const result = await prisma.candidateList.delete({
    where: {
      id,
    },
  });
  return result;
};

export const CandidateService = {
  createCandidate,
  createCandidateSelection,
  getAllCandidates,
  getAllShortListedCandidates,
  getAllSelectedCandidates,
  getSingleCandidate,
  getSingleShortListedCandidate,
  getSingleSelectedCandidate,
  updateCandidate,
  updateShortListedCandidate,
  updateSelectedCandidate,
  deleteCandidate,
  createCandidateShortList,
};
