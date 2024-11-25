import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

const createUser = async (payload: any) => {
  const hashPassword: string = await bcrypt.hash(payload.password, 12);
  const userData = {
    email: payload.email,
    name: payload.name,
    phoneNumber: payload.phoneNumber,
    password: hashPassword,
  };

  const result = await prisma.user.create({
    data: userData,
  });
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
    },
  });
  return result;
};

export const UserServices = {
  createUser,
  getUsers,
};
