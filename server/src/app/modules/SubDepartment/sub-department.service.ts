import prisma from "../../../shared/prisma";
const getSingleSubDepartment = async (id: string) => {
  // console.log(data);

  const result = await prisma.subDepartment.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const getAllSubDepartments = async () => {
  const result = await prisma.subDepartment.findMany();
  return result;
};
const createSubDepartment = async (data: any) => {
  const result = await prisma.subDepartment.create({
    data: {
      ...data,
    },
  });
  console.log(result);
  return result;
};

export const subDepartmentService = {
  getAllSubDepartments,
  getSingleSubDepartment,
  createSubDepartment,
};
