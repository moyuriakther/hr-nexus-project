import bcrypt from "bcrypt";
import prisma from "../../../shared/prisma";

const createUser = async (payload: any) => {
  const hashPassword: string = await bcrypt.hash(payload.password, 12);
  const userData = {
    email: payload.email,
    name: payload.name,
    username: payload.username,
    password: hashPassword,
  };

  const result = await prisma.user.create({
    data: userData,
  });
  return result;
};

export const UserServices = {
    createUser
}