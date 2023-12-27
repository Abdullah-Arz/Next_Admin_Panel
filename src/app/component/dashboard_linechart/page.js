"use client"

import { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import dynamic from 'next/dynamic';
import { TbCircleArrowUpFilled } from "react-icons/tb";
// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function page() {
  

  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const state = {
    series: [
      {
        name: "Status",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      },
    ],
    options: {
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false,
        },
        foreColor: '#ffffff'
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      //   title: {
      //     text: 'Product Trends by Month',
      //     align: 'left'
      //   },
      grid: {
        row: {
          colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5,
        },
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
        ],
      },
    },
  };

  return (
    <div>
      {/* {isMounted && ( */}
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="line"
        height={350}
      />
      {/* )} */}
      <p className="text-2xl font-semibold text-textColor text-center">Booking</p>
      <p className="text-xl font-semibold text-primaryColor text-center" >1,400</p>
      <div className="flex item-center justify-center mt-4">
        <TbCircleArrowUpFilled className="text-[#6ba814] text-2xl mr-1" />
        <p className="text-md text-primaryColor">
          <span className="text-xl font-semibold text-[#6ba814] mr-1">
            9%
          </span>
          This Month
        </p>
      </div>
    </div>
  );
}

export default page;
