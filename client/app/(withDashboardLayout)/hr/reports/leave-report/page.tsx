"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { reportPageHeaderData } from "../../employees/components/pageHeaderData";
import TableControls from "../../award/components/TableControls";
import Table from "../../loan/components/Table";
import Pagination from "../../award/components/pagination";

const LeaveReport = () => {
  const tableHeader = [
    "Sl",
    "Employee name",
    "Leave type",
    "Department",
    "Start date",
    "End date",
  ];

  const leaveData = [
    {
      id: 1,
      employeeName: "John Doe",
      leaveType: "Sick Leave",
      department: "Sales",
      startDate: "2024-11-01",
      endDate: "2024-11-03",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      leaveType: "Annual Leave",
      department: "Marketing",
      startDate: "2024-11-05",
      endDate: "2024-11-10",
    },
    {
      id: 3,
      employeeName: "Mary Johnson",
      leaveType: "Emergency Leave",
      department: "HR",
      startDate: "2024-11-08",
      endDate: "2024-11-10",
    },
  ];

  const [entries, setEntries] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = entries;

  const filteredLeave = leaveData.filter((entry) => {
    const searchText = searchQuery.toLowerCase();
    return (
      entry.employeeName.toLowerCase().includes(searchText) ||
      entry.leaveType.toLowerCase().includes(searchText) ||
      entry.department.toLowerCase().includes(searchText)
    );
  });

  const totalPages = Math.ceil(filteredLeave.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentLeave = filteredLeave.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleEntriesChange = (value: number) => {
    setEntries(value);
    setCurrentPage(1);
  };

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div>
      <div className="mb-5">
        <PageHeader item={reportPageHeaderData} />
      </div>
      <div className="bg-white shadow-sm rounded-md p-4">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Employee Leave Report
          </h2>
          <div className="flex space-x-2">
            <button
              className="bg-[#198754] text-white text-xs py-1 px-4 rounded-md hover:bg-gray-300 flex items-center"
              onClick={() => console.log("Filter clicked")}
            >
              <span className="material-icons">Filter</span>
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
            {currentLeave.map((leaveItem, index) => (
              <tr key={leaveItem.id} className="text-xs text-center">
                <td className="py-3 border">{startIndex + index + 1}</td>
                <td className="py-3 border">{leaveItem.employeeName}</td>
                <td className="py-3 border">{leaveItem.leaveType}</td>
                <td className="py-3 border">{leaveItem.department}</td>
                <td className="py-3 border">{leaveItem.startDate}</td>
                <td className="py-3 border">{leaveItem.endDate}</td>
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
    </div>
  );
};

export default LeaveReport;
