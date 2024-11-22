"use client";

import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import { FaChevronDown } from "react-icons/fa";

const BarCharts = () => {
  const [timeframe, setTimeframe] = useState("Yearly");

  const [chartData, setChartData] = useState([0, 1, 0, 1, 0]);

  const handleTimeframeChange = (value: string) => {
    setTimeframe(value);

    // Update chart data based on selected timeframe
    switch (value) {
      case "Daily":
        setChartData([0.9, 0.5, 1.2, 0, 1]);
        break;
      case "Weekly":
        setChartData([1.5, 0, 1, 0.8, 0.2]);
        break;
      case "Monthly":
        setChartData([0.5, 1, 2, 2.5, 0]);
        break;
      case "Yearly":
        setChartData([0, 1, 0, 1, 0]);
        break;
      default:
        setChartData([0, 1, 0, 1, 0]);
        break;
    }
  };

  const options = {
    series: [
      {
        data: chartData,
      },
    ],
    chart: {
      type: "bar" as const,
      height: 53.6,
      toolbar: {
        show: false, // Disable toolbar (menu)
      },
    },
    plotOptions: {
      bar: {
        barHeight: "100%",
        distributed: true,
        horizontal: true,
        dataLabels: {
          position: "bottom",
        },
      },
    },
    colors: [
      "rgba(253, 72, 48, 0.85)",
      "rgba(0, 176, 116, 0.85)",
      "rgba(247, 198, 4, 0.85)",
      "rgba(0, 143, 251, 0.85)",
      "rgba(253, 136, 48, 0.85)",
    ],
    dataLabels: {
      enabled: true,
      textAnchor: "start" as const,
      style: {
        colors: ["#fff"],
      },
      formatter: function (
        val: string,
        opt: {
          w: { globals: { labels: { [x: string]: string } } };
          dataPointIndex: string | number;
        }
      ) {
        return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val;
      },
      offsetX: 0,
    },
    stroke: {
      width: 1,
      colors: ["#fff"],
    },
    xaxis: {
      categories: [
        "tes",
        "data analysis",
        "management",
        "Account Executive",
        "Medical Assistant",
      ],
      labels: {
        show: false,
      },
    },
    yaxis: {
      labels: {
        show: false,
      },
      lines: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    legend: {
      show: false,
    },
    tooltip: {
      theme: "dark",
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
    },
  };

  return (
    <div>
      <div className="flex items-center justify-between border-b-1 border-[#eff2f7] py-[20px] px-[24px] ">
        <h1 className="font-[600] text-[18px] leading-[26px]">
          Position wise recruitment
        </h1>
        <div className="relative w-fit">
          <select
            className="block w-full px-3 py-1.5 pr-10 font-normal leading-6 text-gray-900 bg-white border-1 border-[#ced4da] rounded appearance-none focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-200"
            value={timeframe}
            onChange={(e) => handleTimeframeChange(e.target.value)}
          >
            <option value="Daily">Daily</option>
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
            <option value="Yearly">Yearly</option>
          </select>
          <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>
      <div className="p-[24px]">
        <ReactApexChart
          options={options}
          series={options.series}
          type="bar"
          height={300}
          yAxis="false"
        />
      </div>
    </div>
  );
};

export default BarCharts;
