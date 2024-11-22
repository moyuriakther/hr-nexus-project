"use client";
import dynamic from "next/dynamic";
import { Card } from "@nextui-org/react";
import { useState } from "react";

// Dynamically import ApexCharts to avoid server-side rendering issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Awarded() {
  const [chartData] = useState({
    options: {
      chart: {
        id: "basic-bar",
        toolbar: { show: false },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      colors: [
        "#FF5733", // Finance
        "#33FFBD", // Staff
        "#FFC300", // Internal Audit Control
        "#5DADE2", // Testing
      ],
      legend: {
        position: "top" as const,
      },
    },
    series: [
      {
        name: "Finance",
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
      },
      {
        name: "Staff",
        data: [5, 15, 25, 35, 45, 55, 65, 75, 85, 95, 105, 115],
      },
      {
        name: "Internal Audit Control",
        data: [8, 18, 28, 38, 48, 58, 68, 78, 88, 98, 108, 118],
      },
      {
        name: "Testing",
        data: [12, 22, 32, 42, 52, 62, 72, 82, 92, 102, 112, 122],
      },
    ],
  });

  const chartData2 = {
    options: {
      chart: {
        type: "radialBar" as const, // Explicitly set the chart type
        height: 300,
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "60%", // Adjust the inner circle size
          },
          track: {
            background: "#E5E7EB", // Gray background for the track
            strokeWidth: "100%", // Full-width track
          },
          dataLabels: {
            name: {
              show: false, // Hide "series name" label
            },
            value: {
              show: true, // Show value inside the circle
              formatter: () => "", // Custom amount
              fontSize: "24px",
              fontWeight: "semibold",
              color: "#424a94", // Text color
              offsetY: 5,
            },
          },
        },
      },
      fill: {
        type: "gradient", // Use gradient for the circular progress
        gradient: {
          shade: "light",
          type: "horizontal", // Horizontal gradient
          gradientToColors: ["#007CF0"], // Second color
          stops: [0, 100], // Start and end points for gradient
        },
      },
      stroke: {
        // eslint-disable-next-line @typescript-eslint/prefer-as-const
        lineCap: "round" as "round", // Explicitly cast to the correct union type
        width: 12, // Wider progress bar
      },
      colors: ["#4ADE80"], // Start color of the gradient
    },
    series: [100], // Progress percentage
  };

  return (
    <div className="bg-gray-100 p-3">
      <div className="grid grid-cols-12 gap-4">
        {/* Awarded Chart */}
        <Card className="col-span-12 md:col-span-8 lg:col-span-8">
          <h2 className="text-md font-semibold mb-4 pt-4 pl-4">Awarded</h2>
          {/* Horizontal Line */}
          <div className="w-full h-[1px] bg-gray-100 mb-6"></div>
          <div className="h-64 pb-4">
            <Chart
              options={chartData.options}
              series={chartData.series}
              type="line"
              height="100%"
            />
          </div>
        </Card>
        {/* Loan Payment */}
        <Card className="col-span-12 md:col-span-4 lg:col-span-4 flex flex-col items-center">
          {/* Title */}
          <h2 className="text-md text-left my-4 text-[#333d78] font-semibold">
            Loan payment received
          </h2>

          {/* Horizontal Line */}
          <div className="w-full h-[1px] bg-gray-100 mb-6"></div>

          {/* Radial Bar Chart */}
          <div className="relative w-64 h-64">
            <Chart
              options={chartData2.options}
              series={chartData2.series}
              type="radialBar"
              height="100%"
            />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center pt-20">
            <p className="text-gray-500 text-sm">Total Loan Amount</p>
            <p className="text-2xl font-semibold text-[#424a94]">12509</p>
          </div>
        </Card>
      </div>
    </div>
  );
}
