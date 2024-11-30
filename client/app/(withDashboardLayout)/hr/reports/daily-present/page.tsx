"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { reportPageHeaderData } from "../../employees/components/pageHeaderData";
import TableControls from "../../award/components/TableControls";
import Table from "../../loan/components/Table";
import Pagination from "../../award/components/pagination";

const DailyPresent = () => {
  const tableHeader = [
    "SI",
    "Employee ID",
    "Name",
    "Department",
    "Date",
    "In Time",
    "Out Time",
    "Status",
  ];

  const employeeData = [
    {
      id: 1,
      employeeId: "E001",
      name: "John Doe",
      department: "HR",
      date: "2024-12-01",
      inTime: "09:00 AM",
      outTime: "06:00 PM",
      status: "Present",
    },
    {
      id: 2,
      employeeId: "E002",
      name: "Jane Smith",
      department: "Finance",
      date: "2024-12-01",
      inTime: "09:30 AM",
      outTime: "05:30 PM",
      status: "Absent",
    },
    {
      id: 3,
      employeeId: "E003",
      name: "Mary Johnson",
      department: "Marketing",
      date: "2024-12-01",
      inTime: "09:15 AM",
      outTime: "06:00 PM",
      status: "Present",
    },
  ];

  // State variables for searching
  const [employeeNameQuery, setEmployeeNameQuery] = useState("");
  const [employeePositionQuery, setEmployeePositionQuery] = useState("");
  const [entries, setEntries] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = entries;

  // Filter employee data based on both Name and Position
  const filteredEmployeeData = employeeData.filter((entry) => {
    return (
      entry.name.toLowerCase().includes(employeeNameQuery.toLowerCase()) &&
      entry.department
        .toLowerCase()
        .includes(employeePositionQuery.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredEmployeeData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentEmployeeData = filteredEmployeeData.slice(
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

  const handleSearchName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeeNameQuery(event.target.value);
  };

  const handleSearchPosition = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmployeePositionQuery(event.target.value);
  };

  const handleFind = () => {
    console.log("Find button clicked");
  };

  const handleReset = () => {
    setEmployeeNameQuery("");
    setEmployeePositionQuery("");
    console.log("Reset button clicked");
  };

  return (
    <div>
      <div className="mb-5">
        <PageHeader item={reportPageHeaderData} />
      </div>
      <div className="bg-white shadow-sm rounded-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Daily Present Report
          </h2>
        </div>

        {/* Input fields for search */}
        <div className="flex gap-4 my-4">
          <div className="w-full sm:w-auto">
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Search by Name"
              value={employeeNameQuery}
              onChange={handleSearchName}
            />
          </div>
          <div className="w-full sm:w-auto">
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="Search by Department"
              value={employeePositionQuery}
              onChange={handleSearchPosition}
            />
          </div>
          <div className="w-full sm:w-auto">
            <button
              onClick={handleFind}
              className="bg-[#198754] text-white py-2 px-4 rounded-md hover:bg-green-600 w-full sm:w-auto"
            >
              Find
            </button>
          </div>

          <div className="w-full sm:w-auto">
            <button
              onClick={handleReset}
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 w-full sm:w-auto"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="border border-t-0 mb-8"></div>

        <TableControls onEntriesChange={handleEntriesChange} />

        {/* Conditional rendering for no data */}
        {filteredEmployeeData.length === 0 ? (
          <div className="text-center text-gray-500 py-4">
            No data available
          </div>
        ) : (
          <div className="overflow-x-auto">
            <Table tableHeader={tableHeader}>
              {currentEmployeeData.map((employee, index) => (
                <tr key={employee.id} className="text-xs text-center">
                  <td className="py-3 border">{startIndex + index + 1}</td>
                  <td className="py-3 border">{employee.employeeId}</td>
                  <td className="py-3 border">{employee.name}</td>
                  <td className="py-3 border">{employee.department}</td>
                  <td className="py-3 border">{employee.date}</td>
                  <td className="py-3 border">{employee.inTime}</td>
                  <td className="py-3 border">{employee.outTime}</td>
                  <td className="py-3 border">
                    <span
                      className={`px-2 py-1 rounded-lg text-white ${
                        employee.status === "Present"
                          ? "bg-green-400"
                          : "bg-red-400"
                      }`}
                    >
                      {employee.status}
                    </span>
                  </td>
                </tr>
              ))}
            </Table>
          </div>
        )}

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default DailyPresent;