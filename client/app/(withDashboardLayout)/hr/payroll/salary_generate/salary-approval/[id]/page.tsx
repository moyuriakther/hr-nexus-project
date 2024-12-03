/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { Divider } from "@nextui-org/react";
import { pageHeaderData } from "../../../components/pageHeaderData";
// import HRTable from "@/app/components/Table/HRTable";
// import HRTableRow from "@/app/components/Table/HRTableRow";

const SalaryApprovalPage = ({ useParams }: { useParams: { id: string } }) => {
  const fakeData = [
    { id: 1, name: "Gross salary", debit: 2000 },
    { id: 1, name: "Net salary", credit: 4000 },
    { id: 1, name: "Loans", debit: 7000 },
    { id: 1, name: "Salary advance", debit: 1000 },
    { id: 1, name: "State income tax", credit: 5000 },
  ];

  return (
    <div className="min-h-[89vh]">
      <PageHeader item={pageHeaderData} />

      <div className="bg-white py-4 rounded-[3px] shadow-lg mt-4">
        <h2 className="text-xl px-6 text-center text-black font-semibold mt-3">
          Payroll posting sheet for November, 2050
        </h2>
        <div className="font-semibold text-[28px] text-center mb-6">
          <span>(</span>
          <span className="text-[#37a000] ">Approved</span>
          <span>)</span>
        </div>
        <Divider className="mb-6" />

        <div className="px-4">
          <table className="min-w-full border-collapse border border-gray-300 text-sm text-left">
            <thead>
              <tr className="bg-gray-500 text-white">
                <th
                  className="border border-gray-400 px-6 py-3  font-medium"
                  colSpan={1}
                >
                  Description
                </th>
                <th
                  className="border border-gray-400 px-6 py-3 font-medium text-center"
                  colSpan={2}
                >
                  Amount
                </th>
              </tr>
              <tr className="bg-gray-500 text-white">
                <th className="border border-gray-400 px-6 py-3 font-medium">
                  Debit
                </th>
                <th className="border border-gray-400 px-6 py-3 font-medium">
                  Credit
                </th>
              </tr>
            </thead>
            <tbody>
              {fakeData.map((payroll, i) => (
                <tr
                  className={`${
                    i % 2 === 0 ? "bg-gray-100" : ""
                  } hover:bg-gray-50`}
                  key={payroll.id}
                >
                  <td className="border border-gray-300 text-center px-6 py-4 font-semibold">
                    {payroll.name}
                  </td>
                  <td className="border border-gray-300 text-center px-6 py-4">
                    {payroll?.debit && "৳"} {payroll?.debit}
                  </td>
                  <td className="border border-gray-300 px-6 text-center py-4 text-gray-800">
                    {payroll?.credit && "৳"} {payroll?.credit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SalaryApprovalPage;
