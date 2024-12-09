import { USER_ROLE } from "@/app/constants";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";

const user = getUserFromLocalStorage();

export const tableHeader = [
  "Sl",
  "Employee Name",
  "Type",
  "Apply Date",
  "Leave Start Date",
  "Leave End Date",
  "Days",
  "Approved Date",
  "Approved Start Date",
  "Approved End Date",
  "Approved Days",
  "Status",
  `${user?.role === USER_ROLE.ADMIN && "Action"}`,
];
