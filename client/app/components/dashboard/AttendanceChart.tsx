"use client";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AttendanceChart = () => {
  const chartOptions: ApexOptions = {
    chart: {
      id: "graph1",
      type: "bar",
      height: 450,
      stacked: true,
      stackType: "100%",
    },
    plotOptions: {
      bar: {
        columnWidth: "40%",
      },
    },
    dataLabels: {
      formatter: (val: number) => {
        return val + "%";
      },
    },
    xaxis: {
      categories: [
        "Staff",
        "Internal Audit",
        "Marketing",
        "Accounts",
        "Electrical",
      ],
    },
    yaxis: {
      labels: {
        formatter: (val: number) => {
          return val + "%";
        },
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      offsetX: 10,
      offsetY: 5,
    },
  };

  const chartSeries = [
    {
      name: "Leave %",
      data: [10, 20, 15, 10, 5],
    },
    {
      name: "Present %",
      data: [50, 30, 40, 35, 60],
    },
    {
      name: "Absent %",
      data: [40, 50, 45, 55, 35],
    },
  ];

  return (
    <div className="bg-white py-4 lg:h-[525px] h-[450px] rounded-2xl shadow-md">
      <h2 className="lg:text-xl text-md font-semibold border-b px-4 pb-4">
        Daily Attendance Statistics
      </h2>
      <ApexChart
        options={chartOptions}
        series={chartSeries}
        type="bar"
        height={"92%"}
      />
    </div>
  );
};

export default AttendanceChart;
