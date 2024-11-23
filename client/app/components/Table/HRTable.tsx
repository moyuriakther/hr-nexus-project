import React, { ReactNode } from "react";

type THRTableProps = {
  tableHeader: string[];
  children: ReactNode;
};

const HRTable: React.FC<THRTableProps> = ({ tableHeader, children }) => {
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-100 bg-white rounded-[3px]">
          <thead>
            <tr className="text-left">
              {tableHeader.map((item, i) => (
                <th key={i} className="px-4 py-2 border border-gray-200">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </>
  );
};

export default HRTable;
