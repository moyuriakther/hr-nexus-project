import HRTable from "@/app/components/Table/HRTable";
import HRTableRow from "@/app/components/Table/HRTableRow";
import { fakeData } from "./fakeData";

const SalaryPayslipTable = () => {
  const tableHeader = [
    "Description",
    "Amount (৳)",
    "Rate (৳)",
    "#Value (৳)",
    "Deduction (৳)",
  ];

  return (
    <div>
      <HRTable tableHeader={tableHeader}>
        {fakeData.map((salary, i) => (
          <tr
            className={`${i % 2 === 0 ? "bg-gray-100" : ""} hover:bg-gray-50`}
            key={salary.id}
          >
            <HRTableRow>{salary?.description}</HRTableRow>
            <HRTableRow>{salary?.amount}</HRTableRow>
            <HRTableRow>
              {salary?.rate} {salary?.rate && "%"}
            </HRTableRow>
            <HRTableRow>{salary?.value}</HRTableRow>
            <HRTableRow>{salary?.deduction}</HRTableRow>
          </tr>
        ))}
      </HRTable>
    </div>
  );
};

export default SalaryPayslipTable;
