/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Table from "./components/Table";
import Pagination from "../award/components/pagination";
import TableControls from "../award/components/TableControls";
import PageHeader from "../../components/PageHeader/PageHeader";
import { loanPageHeaderData } from "../employees/components/pageHeaderData";
import AddLoanModal from "./components/AddLoanModal";

const LoanList = () => {
  const tableHeader = [
    "Sl",
    "Employee name",
    "Permitted by",
    "Loan no",
    "Amount",
    "Interest rate",
    "Installment period",
    "Installment cleared",
    "Repayment amount",
    "Approved date",
    "Repayment from",
    "Status",
    "Action",
  ];

  const [loans, setLoans] = useState([
    {
      id: 1,
      employeeName: "Maisha Lucy Zamora Gonzales",
      permittedBy: "Oleg Hall Larson Sloan",
      loanNo: "000048",
      amount: 500000,
      interestRate: 12,
      installmentPeriod: 130000,
      installmentCleared: 0,
      repaymentAmount: 560000,
      approvedDate: "2024-11-24",
      repaymentFrom: "2024-11-30",
      status: "Active",
    },
    {
      id: 2,
      employeeName: "Maisha Lucy Zamora Gonzales",
      permittedBy: "Honorato Imogene Curry Terry",
      loanNo: "000047",
      amount: 10000,
      interestRate: 15,
      installmentPeriod: 1,
      installmentCleared: 0,
      repaymentAmount: 1150,
      approvedDate: "2024-11-23",
      repaymentFrom: "2024-12-24",
      status: "Active",
    },
  ]);

  const [entries, setEntries] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(loans.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLoans = loans.slice(startIndex, startIndex + itemsPerPage);

  // Modal state
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle entries change
  const handleEntriesChange = (value: number) => {
    setEntries(value);
  };

  // Handle search change
  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  // Handle adding new loan
  const handleAddLoan = (newLoan: any) => {
    setLoans((prevLoans) => [...prevLoans, newLoan]);
  };

  // Handlers for editing and deleting loan
  const handleEdit = (id: number) => {
    console.log("Edit loan with ID:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete loan with ID:", id);
  };

  return (
    <div>
      <div className="mb-5">
        <PageHeader item={loanPageHeaderData} />
      </div>
      <div className="bg-white shadow-sm rounded-md p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Loan list</h2>
          <div className="flex space-x-2">
            <button
              className="bg-[#198754] text-white text-xs py-1 px-4 rounded-md hover:bg-gray-300 flex items-center"
              onClick={() => console.log("Filter clicked")}
            >
              <span className="material-icons">Filter</span>
            </button>
            <button
              className="bg-[#198754] text-white py-2 px-4 text-sm rounded-md hover:bg-green-600"
              onClick={() => setModalIsOpen(true)}
            >
              + Add loan
            </button>
          </div>
        </div>

        <div className="border border-t-0 mb-8"></div>
        <TableControls
          onEntriesChange={handleEntriesChange}
          onSearch={handleSearch}
        />

        <div className="overflow-x-auto">
          <Table tableHeader={tableHeader}>
            {currentLoans.map((loan, index) => (
              <tr key={loan.id} className="text-xs text-center">
                <td className="py-3 border">{index + 1}</td>
                <td className=" py-3 border">{loan.employeeName}</td>
                <td className=" py-3 border">{loan.permittedBy}</td>
                <td className=" py-3 border">{loan.loanNo}</td>
                <td className=" py-3 border">{loan.amount}</td>
                <td className=" py-3 border">{loan.interestRate}</td>
                <td className=" py-3 border">{loan.installmentPeriod}</td>
                <td className=" py-3 border">{loan.installmentCleared}</td>
                <td className="py-3 border">{loan.repaymentAmount}</td>
                <td className=" py-3 border">{loan.approvedDate}</td>
                <td className=" py-3 border">{loan.repaymentFrom}</td>
                <td className="text-center py-3 border text-green-600 font-medium">
                  {loan.status}
                </td>
                <td className="py-3 px-3 border flex space-x-2">
                  <button
                    onClick={() => handleEdit(loan.id)}
                    className="bg-[#28a745] text-white text-xs py-1 px-2 rounded-md hover:bg-green-600 flex items-center space-x-1"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => handleDelete(loan.id)}
                    className="bg-red-500 text-white text-xs py-1 px-2 rounded-md hover:bg-red-600 flex items-center space-x-1"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </Table>
        </div>

        {/* Pagination Section */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      {/* Add Loan Modal */}
      <AddLoanModal
        modalIsOpen={modalIsOpen}
        setIsOpen={setModalIsOpen}
        onSave={handleAddLoan}
      />
    </div>
  );
};

export default LoanList;
