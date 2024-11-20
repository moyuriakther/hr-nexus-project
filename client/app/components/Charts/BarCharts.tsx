"use client";

import { useState } from "react";
import ReactApexChart from "react-apexcharts";

const BarCharts = () => {
  const [timeframe, setTimeframe] = useState("Yearly");

  var options = {
    series: [
      {
        data: [0, 1, 0, 1, 0],
      },
    ],
    chart: {
      type: "bar" as const,
      height: 53.6,
      menubar: false,
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
      textAnchor: "start" as "start",
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
        <select
          className="block px-3 py-1.5 font-normal leading-6 text-gray-900 bg-white bg-no-repeat bg-right pr-8 border-1 border-[#ced4da] rounded appearance-none focus:outline-none focus:ring focus:ring-blue-200 focus:border-blue-200"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27%3e%3cpath fill=%27none%27 stroke=%27%23343a40%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27M2 5l6 6 6-6%27/%3e%3c/svg%3e')",
            backgroundSize: "16px 12px",
            paddingRight: "24px",
          }}
          value={timeframe}
          onChange={(e) => setTimeframe(e.target.value)}
        >
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
          <option value="Yearly">Yearly</option>
        </select>
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
