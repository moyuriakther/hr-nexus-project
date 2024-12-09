import { USER_ROLE } from "@/app/constants";
import { getUserFromLocalStorage } from "@/app/utils/localStorage";

const user = getUserFromLocalStorage();

export const tableHeader = [
  "Sl",
  "Employee name",
  "Permitted by",
  "Loan no",
  "Amount",
  "Interest rate",
  "Installment period",
  "Installment cleared",
  // "Repayment amount",
  // "Approved date",
  // "Repayment from",
  // "Status",
  `${user?.role === USER_ROLE.ADMIN && "Action"}`,
];
