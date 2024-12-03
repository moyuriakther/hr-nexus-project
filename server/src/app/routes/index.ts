import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { UserRoutes } from "../modules/user/user.router";
import { EmployeeRoutes } from "../modules/Employee/employee.route";
import { DepartmentRoutes } from "../modules/Department/department.routes";
import { SubDepartmentRoutes } from "../modules/SubDepartment/sub-department.routes";
import { AttendanceRoutes } from "../modules/Attendance/attendance.route";
import { LeaveRoutes } from "../modules/Leave/leave.route";
import { AwardRoutes } from "../modules/Award/award.route";
import { ClientRoutes } from "../modules/Client/client.route";
import { LoanRoutes } from "../modules/Loan/loan.route";
import { ProjectRoutes } from "../modules/Projects/projects.route";
import { PaymentRoutes } from "../modules/Payment/payment.route";
import { SalaryRoutes } from "../modules/Salary/salary.route";
import { HolidaysRoutes } from "../modules/Holidays/holidays.route";
import { weeklyHolidayRoutes } from "../modules/WeeklyHolidays/weekly.holidays.route";
import { NoticeboardRoutes } from "../modules/NoticeBoard/noticeboard.route";
import { ReportRoutes } from "../modules/Report/report.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/employee",
    route: EmployeeRoutes,
  },
  {
    path: "/department",
    route: DepartmentRoutes,
  },
  {
    path: "/sub-department",
    route: SubDepartmentRoutes,
  },
  {
    path: "/attendance",
    route: AttendanceRoutes,
  },
  {
    path: "/payment",
    route: PaymentRoutes,
  },
  {
    path: "/salary",
    route: SalaryRoutes,
  },
  {
    path: "/leave",
    route: LeaveRoutes,
  },
  {
    path: "/awards",
    route: AwardRoutes,
  },
  {
    path: "/clients",
    route: ClientRoutes,
  },
  {
    path: "/loan",
    route: LoanRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/holidays",
    route: HolidaysRoutes,
  },
  {
    path: "/weekly-holidays",
    route: weeklyHolidayRoutes,
  },
  {
    path: "/noticeboard",
    route: NoticeboardRoutes,
  },
  {
    path: "/reports",
    route: ReportRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
