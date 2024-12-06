import httpStatus from "http-status";
import AppError from "../../../shared/AppError";
import prisma from "../../../shared/prisma";

const createPosition = async (data: any) => {
  const result = await prisma.position.create({
    data: {
      ...data,
    },
  });
  return result;
};

const getAllPositions = async () => {
  const result = await prisma.position.findMany({});
  return result;
};

const getSinglePosition = async (id: string) => {
  const result = await prisma.position.findFirstOrThrow({
    where: {
      id: id,
    },
  });
  return result;
};

const updatePosition = async (id: string, data: any) => {
  const isExist = await prisma.position.findFirstOrThrow({
    where: {
      id: id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Position not found");
  }

  const result = await prisma.position.update({
    where: {
      id: id,
    },
    data: {
      ...data,
    },
  });
  return result;
};

const deletePosition = async (id: string) => {
  const isExist = await prisma.position.findFirstOrThrow({
    where: {
      id: id,
    },
  });

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Position not found");
  }

  const result = await prisma.position.delete({
    where: {
      id: id,
    },
  });
  return result;
};

export const PositionServices = {
  createPosition,
  getAllPositions,
  updatePosition,
  deletePosition,
  getSinglePosition,
};
