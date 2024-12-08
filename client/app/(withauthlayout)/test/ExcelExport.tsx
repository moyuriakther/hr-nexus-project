"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSVLink } from "react-csv";
import Loader from "@/app/components/utils/Loader";
import React from "react";
import * as XLSX from "xlsx";
import { Button } from "@nextui-org/react";
import { FaFileCsv, FaFileExcel } from "react-icons/fa";

interface ExcelExportProps {
  data: any[];
  headers: { label: string; key: string }[];
  baseFileName?: string;
  isLoading?: boolean;
  displayField?: string;
}

const ExcelExport: React.FC<ExcelExportProps> = ({
  data = [],
  headers,
  baseFileName = "exported_data",
  isLoading = false,
  displayField,
}) => {
  const generateFileName = (extension: string) => {
    const timestamp = new Date();
    const formattedTimestamp = `${timestamp.getDate()}-${
      timestamp.getMonth() + 1
    }-${timestamp.getFullYear()}`;

    return `${baseFileName}_${formattedTimestamp}.${extension}`;
  };

  const handleXLSXDownload = () => {
    if (data.length === 0) {
      alert("No data available to export");
      return;
    }

    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    const fileName = generateFileName("xlsx");
    XLSX.writeFile(workbook, fileName);
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="text-2xl">
      {/* {displayField && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">List View:</h3>
          {data.length > 0 ? (
            data.map((item: any, index: number) => (
              <p key={index} className="text-sm">
                {item[displayField] || "N/A"}
              </p>
            ))
          ) : (
            <p>No data available</p>
          )}
        </div>
      )} */}
      <div className="flex items-center">
        <CSVLink
          data={data}
          headers={headers}
          filename={generateFileName("csv")}
          className="bg-primary rounded-none text-sm mx-2 text-white px-4 "
        >
         <Button
           size="sm"
            className="bg-primary text-white"
          >
            <FaFileCsv /> CSV
          </Button>
        </CSVLink>
        {/* XLSX Export Button */}
        <Button
            onClick={handleXLSXDownload}
            size="sm"
            className="bg-primary rounded-none text-sm text-white px-4"
          >
            <FaFileExcel/> Excel
            
          </Button>
      </div>
    </div>
  );
};

export default ExcelExport;
