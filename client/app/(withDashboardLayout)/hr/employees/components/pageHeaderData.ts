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
    name: "Daily attendance form",
    path: "/hr/attendances/create/daily",
  },
  {
    name: "Attendance list",
    path: "/hr/attendances/attendance-list",
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

export const reportPageHeaderData: TPageHeader[] = [
  {
    name: "Attendance Report",
    path: "/hr/reports/attendance-report",
  },
  {
    name: "Daily Present",
    path: "/hr/reports/daily-present",
  },
  {
    name: "Monthly Present",
    path: "/hr/reports/monthly-present",
  },

  {
    name: "Leave Reports",
    path: "/hr/reports/leave-report",
  },
  {
    name: "Employee Reports",
    path: "/hr/reports/employee-reports",
  },
  {
    name: "Employee Wise Attendance",
    path: "/hr/reports/employee-wise-attendance",
  },
];
