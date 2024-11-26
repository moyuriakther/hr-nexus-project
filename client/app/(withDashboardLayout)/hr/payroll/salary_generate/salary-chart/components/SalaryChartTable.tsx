import HRTable from "@/app/components/Table/HRTable";
import React from "react";
import { fakeData } from "./fakeData";
import HRTableRow from "@/app/components/Table/HRTableRow";

const SalaryChartTable = () => {
  const tableHeader = [
    "Sl",
    "Name",
    "Basic salary(৳)",
    "Total benefit(৳)",
    "Transport allowance(৳)",
    "Gross salary(৳)",
    "State income tax(৳)",
    "Social security npf(৳)",
    "Employer contribution(৳)",
    "Loan deduction(৳)",
    "Salary advance(৳)",
    "Total deduction(৳)",
    "Net salary(৳)",
  ];

  return (
    <div>
      <HRTable tableHeader={tableHeader}>
        {fakeData.map((salary, i) => (
          <tr
            className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
            key={salary.id}
          >
            <HRTableRow>{salary.id}</HRTableRow>
            <HRTableRow>{salary.name}</HRTableRow>
            <HRTableRow>{salary.basicSalary}</HRTableRow>
            <HRTableRow>{salary.totalBenefit}</HRTableRow>
            <HRTableRow>{salary.transportAllowance}</HRTableRow>
            <HRTableRow>{salary.grossSalary}</HRTableRow>
            <HRTableRow>{salary.stateIncomeTax}</HRTableRow>
            <HRTableRow>{salary.socialSecurityNpf}</HRTableRow>
            <HRTableRow>{salary.employerContribution}</HRTableRow>
            <HRTableRow>{salary.loanDeduction}</HRTableRow>
            <HRTableRow>{salary.salaryAdvance}</HRTableRow>
            <HRTableRow>{salary.totalDeductions}</HRTableRow>
            <HRTableRow>{salary.netSalary}</HRTableRow>
          </tr>
        ))}
      </HRTable>
    </div>
  );
};

export default SalaryChartTable;
