import prisma from "../../../shared/prisma";

// Create a new award
const createAward = async (data: any) => {
  const result = await prisma.award.create({
    data: {
      ...data,
    },
  });
  return result;
};

// Get all awards
const getAllAwards = async () => {
  const result = await prisma.award.findMany();
  return result;
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
  const result = await prisma.award.update({
    where: {
      id,
    },
    data,
  });
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
