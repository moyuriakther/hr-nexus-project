// import prisma from "../../../shared/prisma";

// const getAttendancesReport = async () => {
//   const results = await prisma.attendance.findMany({
//     select: {
//       id: true,
//       checkIn: true,
//       checkOut: true,
//       attendanceType: true,
//       employee: {
//         select: {
//           firstName: true,
//           middleName: true,
//           lastName: true,
//           department: {
//             select: { departmentName: true },
//           },
//         },
//       },
//     },
//   });

//   // Map the results to include the 'Name' field
//   const formattedResults = results.map((attendance) => ({
//     id: attendance.id,
//     checkIn: attendance.checkIn,
//     checkOut: attendance.checkOut,
//     attendanceType: attendance.attendanceType,
//     Name: [
//       attendance.employee.firstName,
//       attendance.employee.middleName,
//       attendance.employee.lastName,
//     ]
//       .filter(Boolean)
//       .join(" "),
//     departmentName: attendance.employee.department?.departmentName || null,
//   }));

//   return formattedResults;
// };
// const getLeaveReport = async () => {
//   const results = await prisma.leave.findMany({
//     select: {
//       id: true,
//       leaveType: true,
//       startDate: true,
//       endDate: true,

//       employee: {
//         select: {
//           firstName: true,
//           middleName: true,
//           lastName: true,
//           department: {
//             select: { departmentName: true },
//           },
//         },
//       },
//     },
//   });

//   // Map the results to include the 'Name' field
//   const formattedResults = results.map((leave) => ({
//     id: leave.id,
//     startDate: leave.startDate,
//     leaveType: leave.leaveType,
//     endDate: leave.endDate,
//     Name: [
//       leave.employee.firstName,
//       leave.employee.middleName,
//       leave.employee.lastName,
//     ]
//       .filter(Boolean)
//       .join(" "),
//     departmentName: leave.employee.department?.departmentName || null,
//   }));

//   return formattedResults;
// };

// export const ReportService = {
//   getAttendancesReport,
//   getLeaveReport,
// };
