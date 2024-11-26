"use client";

import React from "react";

type TableControlsProps = {
  entriesOptions?: number[];
  defaultEntries?: number;
  onEntriesChange?: (value: number) => void;
  onSearch?: (value: string) => void;
};

const TableControls: React.FC<TableControlsProps> = ({
  entriesOptions = [10, 25, 50, 100],
  defaultEntries = 10,
  onEntriesChange,
  onSearch,
}) => {
  const handleEntriesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value, 10);
    if (onEntriesChange) {
      onEntriesChange(value);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (onSearch) {
      onSearch(value);
    }
  };

  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <label className="text-sm font-medium text-gray-700">Show</label>
        <select
          className="ml-2 border rounded-md px-2 py-1 text-sm"
          defaultValue={defaultEntries}
          onChange={handleEntriesChange}
        >
          {entriesOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="ml-2 text-sm text-gray-700">entries</span>
      </div>
      <div>
        <label className="text-sm font-medium text-gray-700">Search:</label>
        <input
          type="text"
          className="ml-2 border rounded-md px-2 py-1 text-sm"
          placeholder="Search"
          onChange={handleSearch}
        />
      </div>
    </div>
  );
};

export default TableControls;
