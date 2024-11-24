import prisma from "../../../shared/prisma";

const getSingleLeave = async (id: string) => {
  const result = await prisma.leave.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

const getAllLeaves = async () => {
  const result = await prisma.leave.findMany();
  return result;
};

const createLeave = async (data: any) => {
  const result = await prisma.leave.create({
    data: {
      ...data,
    },
  });
  console.log(result);
  return result;
};

const updateLeave = async (id: string, data: any) => {
  const result = await prisma.leave.update({
    where: {
      id,
    },
    data,
  });
  return result;
};

const deleteLeave = async (id: string) => {
  const result = await prisma.leave.delete({
    where: {
      id,
    },
  });
  return result;
};

export const leaveService = {
  getAllLeaves,
  getSingleLeave,
  createLeave,
  updateLeave,
  deleteLeave,
};
