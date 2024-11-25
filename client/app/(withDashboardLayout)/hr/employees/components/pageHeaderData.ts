import { TPageHeader } from "@/app/types";

export const pageHeaderData: TPageHeader[] = [
  {
    name: "Employee",
    path: "/hr/employees/employee",
  },
  {
    name: "Position",
    path: "/hr/employees/position",
  },
  {
    name: "Inactive employees list",
    path: "/hr/employees/inactive_employees_list",
  },
];

export const attendancePageHeaderData: TPageHeader[] = [
  {
    name: "Attendance form",
    path: "/hr/attendances/create",
  },
  {
    name: "Monthly attendance",
    path: "/hr/attendances/create/monthly",
  },
  {
    name: "Missing attendance",
    path: "/hr/attendances/missing-attendance",
  },
];
export const loanPageHeaderData: TPageHeader[] = [
  {
    name: "Loan",
    path: "/hr/loan",
  },
  {
    name: "Loan Disburse Report",
    path: "/hr/loan/loan-disburse-report",
  },
  {
    name: "Employee Wise Loan",
    path: "/hr/loan/employee-wise-loan",
  },
];
