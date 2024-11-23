import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { UserRoutes } from "../modules/user/user.router";
import { EmployeeRoutes } from "../modules/Employee/employee.route";
import { DepartmentRoutes } from "../modules/Department/department.routes";
import { SubDepartmentRoutes } from "../modules/SubDepartment/sub-department.routes";
import { AttendanceRoutes } from "../modules/Attendance/attendance.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
