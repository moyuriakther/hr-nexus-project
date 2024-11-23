import prisma from "../../../shared/prisma";
const getSingleAttendance = async (id: string) => {
  // console.log(data);

  const result = await prisma.attendance.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};
const getAllAttendances = async () => {
  const result = await prisma.attendance.findMany();
  return result;
};
const createAttendance = async (data: any) => {
  const result = await prisma.attendance.create({
    data,
  });
  return result;
};

export const AttendanceService = {
  getAllAttendances,
  getSingleAttendance,
  createAttendance,
};
