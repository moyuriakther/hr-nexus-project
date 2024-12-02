import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";
import { JwtPayload } from "jsonwebtoken";

const createUser = async (payload: any) => {
  const hashPassword: string = await bcrypt.hash(payload.password, 12);
  payload["password"] = hashPassword;
  const result = await prisma.user.create({
    data: payload,
  });
  console.log(result);
  return result;
};

const getUsers = async () => {
  const result = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      role: true,
      createdAt: true,
      updatedAt: true,
      needPasswordChange: true,
      status: true,
      photo: true,
      coverPhoto: true,
      signature: true,
    },
  });
  return result;
};

const getMyProfile = async (user: JwtPayload) => {
  const userData = await prisma.user.findFirstOrThrow({
    where: {
      email: user.email,
    },
  });

  const result = await prisma.user.findUniqueOrThrow({
    where: {
      id: userData.id,
    },
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      role: true,
      status: true,
      photo: true,
      coverPhoto: true,
      signature: true,
    },
  });

  return result;
};

const updateMyProfile = async (
  user: JwtPayload,
  payload: { name?: string; phone?: string; email?: string; signature?: string }
) => {
  const userData = await prisma.user.findFirstOrThrow({
    where: {
      email: user.email,
    },
  });

  const result = await prisma.user.update({
    where: {
      id: userData.id,
    },
    data: payload,
    select: {
      id: true,
      name: true,
      email: true,
      phoneNumber: true,
      role: true,
      status: true,
      photo: true,
      coverPhoto: true,
      signature: true,
    },
  });

  return result;
};

export const UserServices = {
  createUser,
  getUsers,
  getMyProfile,
  updateMyProfile,
};
