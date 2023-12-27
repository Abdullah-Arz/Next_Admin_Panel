"use client"

import { useEffect, useState } from "react";
import ReactApexChart from 'react-apexcharts';
import dynamic from "next/dynamic";
// const ReactApexChart = dynamic(() => import("react-apexcharts"), {
//   ssr: false,
// });


function page() {

  
  // const [isMounted, setIsMounted] = useState(false);

  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  const state = {
    series: [
      {
        name: "User",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Nutritionist",
        data: [76, 45, 31, 98, 87, 15, 91, 114, 94],
        //   color:'#28930a'
      },
      {
        name: "Ad",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
        //   color: "#73858F"
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        foreColor: "#ffffff",
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "80%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      //   yaxis: {
      //     title: {
      //       text: '$ (thousands)'
      //     }
      //   },
      fill: {
        opacity: 1,
      },
      //   tooltip: {
      //     y: {
      //       formatter: function (val) {
      //         return "$ " + val + " thousands"
      //       }
      //     }
      //   }
    },
  };

  return (
    <div>
      <div className="border-b-1 border-primaryColor">
        <p className="text-textColor text-2xl font-semibold text-center py-4">
          Revenue
        </p>
      </div>
      <div className="py-4">
        {/* {isMounted && ( */}
          <ReactApexChart
            options={state.options}
            series={state.series}
            type="bar"
            height={600}
          />
        {/* )} */}
      </div>
    </div>
  );
}

export default page;
