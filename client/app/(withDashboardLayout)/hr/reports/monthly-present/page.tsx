"use client";
import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { useState } from "react";
import { reportPageHeaderData } from "../../employees/components/pageHeaderData";

export default function MonthlyPresent() {
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [employee, setEmployee] = useState("");

  const handleFind = () => {
    console.log("Filters applied:", { department, year, month, employee });
  };

  const handleReset = () => {
    setDepartment("");
    setYear("");
    setMonth("");
    setEmployee("");
    console.log("Filters reset");
  };

  // Hardcoded filter options
  const departments = [
    { value: "HR", label: "HR" },
    { value: "Engineering", label: "Engineering" },
    { value: "Sales", label: "Sales" },
  ];

  const years = [
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
    { value: "2022", label: "2022" },
  ];

  const months = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  const employees = [
    { value: "john_doe", label: "John Doe" },
    { value: "jane_smith", label: "Jane Smith" },
    { value: "michael_brown", label: "Michael Brown" },
  ];

  return (
    <div>
      <div className="mb-5">
        <PageHeader item={reportPageHeaderData} />
      </div>
      <div className=" mx-auto py-6">
        <div className="p-4 border rounded shadow-sm bg-white">
          {/* Header Section */}
          <div className="flex flex-wrap justify-between items-center mb-4">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800">
              Monthly Attendance Report
            </h2>
            <button
              className="bg-[#198754] text-white text-xs py-2 px-4 rounded-md hover:bg-green-600 flex items-center"
              onClick={() => console.log("Filter clicked")}
            >
              <span className="material-icons">Filter</span>
            </button>
          </div>
          {/* Divider */}
          <div className="border-t mb-6"></div>
          {/* Filter Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 my-10">
            {/* Department Select */}
            <div className="w-full">
              <select
                className="w-full border px-3 py-2 rounded text-gray-600 focus:outline-none focus:ring focus:ring-green-300"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
              >
                <option value="">Select department...</option>
                {departments.map((dept) => (
                  <option key={dept.value} value={dept.value}>
                    {dept.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Employee Select */}
            <div className="w-full">
              <select
                className="w-full border px-3 py-2 rounded text-gray-600 focus:outline-none focus:ring focus:ring-green-300"
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
              >
                <option value="">Select employee...</option>
                {employees.map((emp) => (
                  <option key={emp.value} value={emp.value}>
                    {emp.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Year Select */}
            <div className="w-full">
              <select
                className="w-full border px-3 py-2 rounded text-gray-600 focus:outline-none focus:ring focus:ring-green-300"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <option value="">Select year...</option>
                {years.map((yr) => (
                  <option key={yr.value} value={yr.value}>
                    {yr.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Month Select */}
            <div className="w-full">
              <select
                className="w-full border px-3 py-2 rounded text-gray-600 focus:outline-none focus:ring focus:ring-green-300"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
              >
                <option value="">Select month...</option>
                {months.map((mn) => (
                  <option key={mn.value} value={mn.value}>
                    {mn.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 w-full lg:w-auto">
              <button
                onClick={handleFind}
                className="w-full sm:w-auto bg-[#198754] text-white py-2 px-4 rounded-md hover:bg-green-600"
              >
                Find
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
