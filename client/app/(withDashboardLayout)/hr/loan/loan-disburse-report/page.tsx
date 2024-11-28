"use client";

import React, { useState } from "react";

import TableControls from "../../award/components/TableControls";
import Table from "../components/Table";
import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { loanPageHeaderData } from "../../employees/components/pageHeaderData";
import Pagination from "../../award/components/pagination";

const LoanDisburseList = () => {
  const tableHeader = [
    "Sl",
    "Employee name",
    "Designation",
    "Employee code",
    "Joining date",
    "Loan no",
    "Loan approved date",
    "Loan amount",
    "No of installment",
    "Repayment amount",
  ];

  const [loans, setLoans] = useState([
    {
      id: 1,
      employeeName: "Maisha Lucy Zamora Gonzales",
      designation: "",
      employeeCode: "000002",
      joiningDate: "",
      loanNo: "000048",
      loanApprovedDate: "2024-11-24",
      loanAmount: 500000,
      noOfInstallments: 130000,
      repaymentAmount: 560000,
    },
    {
      id: 2,
      employeeName: "Maisha Lucy Zamora Gonzales",
      designation: "",
      employeeCode: "000002",
      joiningDate: "",
      loanNo: "000047",
      loanApprovedDate: "2024-11-23",
      loanAmount: 1000,
      noOfInstallments: 1,
      repaymentAmount: 1150,
    },
    {
      id: 3,
      employeeName: "Iman",
      designation: "data analysis",
      employeeCode: "000025",
      joiningDate: "",
      loanNo: "000042",
      loanApprovedDate: "0000-00-00",
      loanAmount: 18,
      noOfInstallments: 82,
      repaymentAmount: 59,
    },
  ]);
  console.log(setLoans);

  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate pagination details
  const totalPages = Math.ceil(loans.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLoans = loans.slice(startIndex, startIndex + itemsPerPage);

  // Handlers
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const [entries, setEntries] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

  const handleEntriesChange = (value: number) => {
    setEntries(value);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div>
      <div className="mb-5">
        <PageHeader item={loanPageHeaderData} />
      </div>
      <div className="bg-white shadow-sm rounded-md p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Loan disburse list
          </h2>
          <button
            className="bg-[#198754] text-white py-2 px-4 rounded-md hover:bg-green-600"
            onClick={() => console.log("Add Loan clicked")}
          >
            + Add Loan
          </button>
        </div>

        {/* Table Controls */}
        <div className="border border-t-0 mb-8"></div>
        <TableControls
          onEntriesChange={handleEntriesChange}
          onSearch={handleSearch}
        />

        {/* Responsive Table */}
        <div className="overflow-x-auto">
          <Table tableHeader={tableHeader}>
            {currentLoans.slice(0, entries).map((loan, index) => (
              <tr key={loan.id} className="text-sm">
                <td className="px-4 py-2 border">{index + 1}</td>
                <td className="px-4 py-2 border">{loan.employeeName}</td>
                <td className="px-4 py-2 border">{loan.designation || "-"}</td>
                <td className="px-4 py-2 border">{loan.employeeCode}</td>
                <td className="px-4 py-2 border">{loan.joiningDate || "-"}</td>
                <td className="px-4 py-2 border">{loan.loanNo}</td>
                <td className="px-4 py-2 border">{loan.loanApprovedDate}</td>
                <td className="px-4 py-2 border">{loan.loanAmount}</td>
                <td className="px-4 py-2 border">{loan.noOfInstallments}</td>
                <td className="px-4 py-2 border">{loan.repaymentAmount}</td>
              </tr>
            ))}
          </Table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default LoanDisburseList;
