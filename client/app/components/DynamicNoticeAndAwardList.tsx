"use client";

import React, { useState, useEffect } from "react";

// Types for notices and awards
interface Notice {
  id: number;
  title: string;
  description: string;
  date: string;
}

interface Award {
  id: number;
  name: string;
  department: string;
  awardName: string;
  date: string;
}

//  dynamic data
const fetchNotices = (): Notice[] => {
  return [
    { id: 1, title: "dsffdsf", description: "sfdsf", date: "22-Oct-24" },
    { id: 2, title: "Testing", description: "Testing", date: "23-Oct-24" },
    { id: 3, title: "sample", description: "sample", date: "13-Oct-24" },
  ];
};

const fetchAwards = (): Award[] => {
  return [
    {
      id: 1,
      name: "Amy Aphrodite Zamora Peck",
      department: "Production",
      awardName: "🏆 sat",
      date: "20-11-2024",
    },
  ];
};

const DynamicNoticeAndAwardList: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [awards, setAwards] = useState<Award[]>([]);

  useEffect(() => {
    //api
    setNotices(fetchNotices());
    setAwards(fetchAwards());
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-6 py-3 bg-gray-100">
      {/* Notice Section */}
      <div className="w-full lg:w-1/3 bg-white shadow-sm rounded-2xl p-4">
        <h2 className="text-lg font-semibold mb-4 flex items-center text-[#198754]">
          <span className="mr-2">📜</span> Notice
        </h2>
        <div className="space-y-4">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="px-4 py-7 bg-[#f4f7f8] rounded-lg flex justify-between items-center shadow-sm"
            >
              <div>
                <h3 className="text-md font-medium">{notice.title}</h3>
                <p className="text-md text-gray-500">{notice.description}</p>
              </div>
              <div className="text-md text-gray-500 flex items-center space-x-2">
                <span>{notice.date}</span>
                <button className="text-gray-400 hover:text-black">⭐</button>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full text-center text-sm text-[#198754] hover:text-green-700">
          See More
        </button>
      </div>

      {/* Employee Award List Section */}
      <div className="w-full lg:w-2/3 bg-white shadow-sm rounded-2xl p-4">
        <div className="flex flex-wrap justify-between items-center mb-4">
          <h2 className="text-lg font-semibold flex items-center text-[#198754]">
            <span className="mr-2">🎖️</span> Employee award list
          </h2>
          <button className="bg-[#198754] text-white text-sm px-5 py-2 rounded-lg hover:bg-green-600">
            Award list
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-sm">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="border border-gray-200 px-4 py-2">Sl.</th>
                <th className="border border-gray-200 px-4 py-2">Image</th>
                <th className="border border-gray-200 px-4 py-2">Name</th>
                <th className="border border-gray-200 px-4 py-2">
                  Department name
                </th>
                <th className="border border-gray-200 px-4 py-2">Award name</th>
                <th className="border border-gray-200 px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {awards.map((award, index) => (
                <tr key={award.id} className="border-t border-gray-200 s">
                  <td className="border border-gray-200 px-4 py-2">
                    {index + 1}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-sm text-gray-500 font-semibold">
                        {award.name[0]}
                      </span>
                    </div>
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {award.name}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {award.department}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {award.awardName}
                  </td>
                  <td className="border border-gray-200 px-4 py-2">
                    {award.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicNoticeAndAwardList;
