"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Nutrition_Request_table from "../component/nutritionist_request_table/page";
import NutriReq_Data from './nutrition_request.json'
import { saveAs } from 'file-saver';
import { Button } from "@nextui-org/react";
import { FaFileExport } from "react-icons/fa6";
// import axios from "axios";
// import Loading from "../component/loader/page";
// import Error from "../component/error_page/page";
// import { useMyContext } from "../context";

function Page() {
  // const { static_recruiter } = useMyContext();

  // const [data, setData] = useState(null);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(true);

  const data = NutriReq_Data.data; // Assuming your JSON structure has a 'data' key

  const handleExport = () => {
    const csvContent = convertArrayToCSV(data);
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'table_data.csv');
  };
  const convertArrayToCSV = (arr) => {
    const array = [Object.keys(arr[0])].concat(arr);

    return array
      .map((row) => {
        return Object.values(row).join(',');
      })
      .join('\n');
  };

  // const api = localStorage.getItem("api");
  // const token = sessionStorage.getItem("Token");

  // const headers = {
  //   Authorization: `Bearer ${token}`,
  // };

  // console.log("static_recruiter", static_recruiter);

  // useLayoutEffect(() => {
  //   async function retrieveData() {
  //     try {
  //       const response = await axios.get(`${api}/user_management/list_nutritionist/`, {
  //         headers,
  //       });
  //       console.log("Request User Data ---- ", response.data);
  //       setData(response.data.users);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   }

  //   retrieveData();
  // }, [static_recruiter]);

  return (
    <div className="overflow-y-hidden">
      <DashboardLayout>
        {/* {isLoading ? (
          <Loading />
        ) : error ? (
          <Error message={error.message} />
        ) : ( */}
          <>
            {/* <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-textColor ">
              pro users
            </h1> */}
            <div className="px-0 mt-9 2lx:px-32 lx:px-32 lg:px-10 bg-[#000000]">
            <div className="mt-4 flex gap-4 justify-between  border-none p-3 rounded-ss-xl rounded-se-xl bg-[#0E0F12] w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12 ">
                <p className="text-white pt-2 capitalize text-inherit text-xl font-semibold">
                Nutritions Request list
                </p>
                    <Button color="default" className="text-white" variant="bordered" onClick={()=>{handleExport()}} startContent={<FaFileExport/>}>
                            Export
                          </Button>
            
          </div>
              
              <div className=" bg-bgColor rounded-ee-xl rounded-es-xl shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12">
                <Nutrition_Request_table 
                data={data} 
                />
              </div>
            </div>
          </>
        {/* )} */}
      </DashboardLayout>
    </div>
  );
}

export default Page;
