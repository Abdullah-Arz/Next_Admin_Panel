"use client";
import React, { useState } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Privacy_policy from "../component/user_policy_form/page";
import User_privacy_table from "../component/user_policy_table/page";
import { Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useQuery } from "react-query";
import { useMyContext } from "../context";
// import Loading from '../component/loader/page'
// import Error from '../component/error_page/page'
import { saveAs } from 'file-saver';
import { Button } from "@nextui-org/react";
import { FaFileExport } from "react-icons/fa6";
import Static_Content from './static_content.json';

function page() {
  
  const { static_content,static_deletecontent } = useMyContext();
  const api = localStorage.getItem('api');
  const token = sessionStorage.getItem("Token");

  const data = Static_Content.data; // Assuming your JSON structure has a 'data' key

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

  // const headers = {
  //   Authorization: `Bearer ${token}`,
  // };

  // const retrieveData = async () => {
  //   const response = await axios.get(
  //     `${api}/user/get_user_terms_conditions_privacy_policy/`,
  //     { headers }
  //   );
  //   return response.data;
  // };

  // const { data: data, error, isLoading } = useQuery(["Data", static_content,static_deletecontent], retrieveData);

  // console.log('Policy Data ----- ',data)
  
  return (
    <DashboardLayout>
      <div className="bg-black rounded-lg mt-3 ml-3">
        
        {/* {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error.message} />
            ) : ( */}
              <>
              <h1 className="p-3 bg-black text-white uppercase font-semibold text-2xl ">
                Static Content
              </h1>
              <div className="px-0 py-5 2lx:px-32 lx:px-32 lg:px-32 md:px-32 sm:px-32 bg-black">
       
          <Privacy_policy />

          <div className="mt-4 flex gap-4 justify-between  border-none p-3 rounded-ss-xl rounded-se-xl bg-[#0E0F12] w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12 ">
                <p className="text-white pt-2 capitalize text-inherit text-xl font-semibold">
                content list
                </p>
                    <Button color="default" className="text-white" variant="bordered" onClick={()=>{handleExport()}} startContent={<FaFileExport/>}>
                            Export
                          </Button>
            
          </div>
          <div className="rounded-ee-xl bg-bgColor rounded-es-xl border-none shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12 ">
            <User_privacy_table
           data={data}
            />
          </div>
        </div>
              </>
       
        {/* )} */}
      </div>
    </DashboardLayout>
  );
          }


export default page;
