"use client";

import React, { useState } from "react";
import Select, { SingleValue } from "react-select";
import { Menu, Transition } from "@headlessui/react";
import { FaPrint, FaFilter } from "react-icons/fa";
import PageHeader from "@/app/(withDashboardLayout)/components/PageHeader/PageHeader";
import { reportPageHeaderData } from "../../employees/components/pageHeaderData";

// Employee dropdown options
const employeeOptions = [
  { value: "honorato_imogene", label: "Honorato Imogene Curry Terry" },
  { value: "maisha_lucy", label: "Maisha Lucy Zamora Gonzales" },
  { value: "amy_aphrodite", label: "Amy Aphrodite Zamora Peck" },
];

// Date range options
const dateRangeOptions = [
  "Today",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
  "Custom Range",
];

const EmployeeWiseAttendance = () => {
  const [selectedEmployee, setSelectedEmployee] =
    useState<SingleValue<{ value: string; label: string }>>(null);

  const [selectedRange, setSelectedRange] = useState("Last 7 Days");
  console.log(selectedRange);
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });

  const calculateDateRange = (range: string) => {
    const today = new Date();
    let startDate, endDate;

    switch (range) {
      case "Today":
        startDate = today;
        endDate = today;
        break;
      case "Yesterday":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 1);
        endDate = startDate;
        break;
      case "Last 7 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 7);
        endDate = today;
        break;
      case "Last 30 Days":
        startDate = new Date(today);
        startDate.setDate(today.getDate() - 30);
        endDate = today;
        break;
      case "This Month":
        startDate = new Date(today.getFullYear(), today.getMonth(), 1);
        endDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
        break;
      case "Last Month":
        startDate = new Date(today.getFullYear(), today.getMonth() - 1, 1);
        endDate = new Date(today.getFullYear(), today.getMonth(), 0);
        break;
      default:
        startDate = today;
        endDate = today;
    }

    setDateRange({ startDate, endDate });
  };

  const handleRangeSelect = (range: string) => {
    setSelectedRange(range);
    calculateDateRange(range);
  };

  const handleFind = () => {
    console.log("Find button clicked:", { selectedEmployee, dateRange });
  };

  const handleReset = () => {
    setSelectedEmployee(null);
    setSelectedRange("Last 7 Days");
    calculateDateRange("Last 7 Days");
    console.log("Reset button clicked");
  };

  return (
    <div>
      <div className="mb-5">
        <PageHeader item={reportPageHeaderData} />
      </div>
      <div className="bg-white shadow-sm rounded-md p-4">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Employee wise attendance report
          </h2>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <button className="bg-[#198754] text-white py-1 px-3 rounded-md hover:bg-green-700 flex items-center">
              <FaPrint className="mr-1" />
              Print
            </button>
            <button className="bg-[#198754] text-white py-1 px-3 rounded-md hover:bg-green-700 flex items-center">
              <FaFilter className="mr-1" />
              Filter
            </button>
          </div>
        </div>
        <div className="border border-t-0 mb-5"></div>

        {/* Form */}
        <div className="flex flex-wrap gap-4 my-10">
          {/* Employee Selector */}
          <div className="w-full sm:w-auto">
            <Select
              options={employeeOptions}
              value={selectedEmployee}
              onChange={(option) => setSelectedEmployee(option)}
              placeholder="Select employee"
              styles={{
                control: (base) => ({
                  ...base,
                  width: "100%",
                  minWidth: "200px",
                  fontSize: "0.875rem",
                }),
              }}
            />
          </div>

          {/* Date Range Selector */}
          <div className="w-full sm:w-auto">
            <Menu
              as="div"
              className="relative inline-block text-left w-full sm:w-auto"
            >
              <Menu.Button
                as="button"
                className="border rounded-md px-4 py-2 bg-white text-sm w-full sm:w-auto"
              >
                {`${dateRange.startDate.toLocaleDateString()} - ${dateRange.endDate.toLocaleDateString()}`}
              </Menu.Button>

              <Transition
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute mt-2 w-full sm:w-56 bg-white shadow-lg border rounded-md">
                  {dateRangeOptions.map((range) => (
                    <Menu.Item key={range}>
                      {({ active }) => (
                        <button
                          onClick={() => handleRangeSelect(range)}
                          className={`${
                            active ? "bg-green-600 text-white" : "text-gray-800"
                          } block w-full text-left px-4 py-2 text-sm`}
                        >
                          {range}
                        </button>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>

          {/* Buttons */}
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
      </div>
    </div>
  );
};

export default EmployeeWiseAttendance;
