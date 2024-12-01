"use client";

import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import React, { useState } from "react";
import { reportPageHeaderData } from "../../employees/components/pageHeaderData";
import TableControls from "../../award/components/TableControls";
import Table from "../../loan/components/Table";
import Pagination from "../../award/components/pagination";

const AttendanceReport = () => {
  const tableHeader = [
    "Sl",
    "Employee name",
    "Employee id",
    "Department",
    "Position",
    "Time in",
    "Time out",
    "Present/Absent",
    "Late",
  ];

  const attendance = [
    {
      id: 1,
      employeeName: "John Doe",
      employeeId: "E001",
      department: "Sales",
      position: "Manager",
      timeIn: "9:00 AM",
      timeOut: "5:00 PM",
      status: "Present",
      late: "No",
    },
    {
      id: 2,
      employeeName: "Jane Smith",
      employeeId: "E002",
      department: "Marketing",
      position: "Senior Executive",
      timeIn: "9:15 AM",
      timeOut: "5:15 PM",
      status: "Present",
      late: "Yes",
    },
    {
      id: 3,
      employeeName: "Mary Johnson",
      employeeId: "E003",
      department: "HR",
      position: "HR Specialist",
      timeIn: "9:30 AM",
      timeOut: "6:00 PM",
      status: "Absent",
      late: "No",
    },
  ];

  const [entries, setEntries] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = entries;

  const filteredAttendance = attendance.filter((entry) => {
    const searchText = searchQuery.toLowerCase();
    return (
      entry.employeeName.toLowerCase().includes(searchText) ||
      entry.employeeId.toLowerCase().includes(searchText) ||
      entry.department.toLowerCase().includes(searchText) ||
      entry.position.toLowerCase().includes(searchText)
    );
  });

  const totalPages = Math.ceil(filteredAttendance.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAttendance = filteredAttendance.slice(
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
            Daily Attendance Report
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
            {currentAttendance.map((attendance, index) => (
              <tr key={attendance.id} className="text-xs text-center">
                <td className="py-3 border">{startIndex + index + 1}</td>
                <td className=" py-3 border">{attendance.employeeName}</td>
                <td className=" py-3 border">{attendance.employeeId}</td>
                <td className=" py-3 border">{attendance.department}</td>
                <td className=" py-3 border">{attendance.position}</td>
                <td className=" py-3 border">{attendance.timeIn}</td>
                <td className=" py-3 border">{attendance.timeOut}</td>
                <td className="py-3 border">
                  <span
                    className={`px-2 py-1 rounded-lg text-white ${
                      attendance.status === "Present"
                        ? "bg-green-400"
                        : attendance.status === "Absent"
                        ? "bg-red-400 text-red-900"
                        : "bg-black"
                    }`}
                  >
                    {attendance.status}
                  </span>
                </td>
                <td className=" py-3 border">{attendance.late}</td>
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

export default AttendanceReport;
