"use client";

import React from 'react';
import dynamic from 'next/dynamic';


const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

const AttendanceChart = () => {
  const chartOptions = {
    chart: {
      type: 'bar',
      height: 435,
      stacked: true,
      stackType: '100%',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    xaxis: {
        categories: [ 'Staff', 'Internal Audit',  'Marketing', 'Accounts', 'Electrical'],
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      offsetX: 10,
      offsetY: 5,
    },
  };

  const chartSeries = [
    {
        name: 'Leave %',
        data: [10, 20, 15, 10, 5 ], 
      },
      {
        name: 'Present %',
        data: [50, 30, 40, 35, 60], 
      },
      {
        name: 'Absent %',
        data: [40, 50, 45, 55, 35],
      },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
<h2 className="text-lg font-semibold mb-4">Daily Attendance Statistics (Department-wise)</h2>
      <ReactApexChart options={chartOptions} series={chartSeries} type="bar" height={435} />
    </div>
  );
};

export default AttendanceChart;
