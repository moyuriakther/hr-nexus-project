import prisma from "../../../shared/prisma";
const getSingleDepartment = async (id: string) => {
  // console.log(data);

  const result = await prisma.department.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const getAllDepartments = async () => {
  const result = await prisma.department.findMany();
  return result;
};
const createDepartment = async (data: any) => {
  const result = await prisma.department.create({
    data: {
      ...data,
    },
  });
  console.log(result);
  return result;
};

export const DepartmentService = {
  getAllDepartments,
  getSingleDepartment,
  createDepartment,
};
