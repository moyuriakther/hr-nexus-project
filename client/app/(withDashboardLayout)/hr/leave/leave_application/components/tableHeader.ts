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
  "Reason",
  "Approved Date",
  "Approved Start Date",
  "Approved End Date",
  "Approved Days",
  "Manager Comments",
  "Status",
  `${user?.role === "MANAGER" ? "Action" : ""}`,
];

export const headers = tableHeader
  .filter((header) => header)
  .map((header) => ({
    label: header,
    key: header.replace(/\s+/g, "_").toLowerCase(),
  }));
