"use client";

import React, { useEffect, useState } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Dashboard_Card from "../component/dashboard_cards/page";
import Dashboard_Chart from "../component/dashboard_chart/page";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from '../component/loader/page'
import Error from '../component/error_page/page'
import DashboardlineChart from '../component/dashboard_linechart/page';
import DashboardColumnChart from '../component/dashboard_columnchart/page';
import DashboardBarChart from '../component/dashboard_piechart/page';

import dynamic from "next/dynamic";

function page() {
  const API = localStorage.getItem('api');
  const Token = sessionStorage.getItem('Token')

  const headers = {
    Authorization: `Bearer ${Token}`,
  };


  // const retrieveData = async () => {
  //   const response = await axios.get(
  //     `${API}/user_management/get_count/`,
  //     { headers }
  //   );
  //   return response.data;
  // };

  // const { data, error, isLoading } = useQuery("postsData", retrieveData);


  return (
    <DashboardLayout>
     
      {/* {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error.message} />
            ) : ( */}
          <>
           <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-white">
              dashboard
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 ">
            <div>
              <Dashboard_Card
              //  data={data.data} 
               />
            </div>
            <div className="border-2 border-bgColor bg-bgColor rounded-2xl p-4">
              <DashboardlineChart />
            </div>
            <div className="border-2 border-bgColor bg-bgColor rounded-2xl p-4 xl:-mt-80 lg:-mt-48 md:-mt-36 h-fit ">
              <DashboardColumnChart />
            </div>
            <div className="border-2 border-bgColor bg-bgColor rounded-2xl p-4">
              <DashboardBarChart />
            </div>
            </div>
            {/* <div className="mt-10">
              <Dashboard_Chart
                data={data.data}
              />
            </div> */}
          </>

      {/* )} */}

    </DashboardLayout>
  );
}

export default page;