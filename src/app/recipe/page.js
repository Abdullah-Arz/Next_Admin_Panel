"use client";
import React from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Recipe_table from "../component/recipe_table/page";
import Recipe_form from "../component/recipe_form/page";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from '../component/loader/page'
import Error from '../component/error_page/page'
import { useMyContext } from "../context";
import blogData from '../recipe/blog.json'; // Import the JSON file
import { saveAs } from 'file-saver';
import { Button } from "@nextui-org/react";
import { FaFileExport } from "react-icons/fa6";

function page() {

  const {static_driver } = useMyContext();
  const data = blogData.data; // Assuming your JSON structure has a 'data' key
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
  let api;
  let token;

  if(typeof window !== "undefined"){
    api = localStorage.getItem('api');
    token = sessionStorage.getItem("Token");
  }

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const retrieveData = async () => {
    const response = await axios.get(
      `${api}/user_management/list_user/`,
      { headers }
    );
    return response.data;
  };

  // const { data: data, error, isLoading } = useQuery(["Data",static_driver], retrieveData);


  return (
    <div className="overflow-y-hidden">
      <DashboardLayout>
       
                    {/* {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error.message} />
            ) : ( */}
                <>
              <h1 className="p-3 bg-black text-white uppercase text-2xl font-semibold ">
              Recipe management
              </h1>
              <div className="px-0 py-5 2lx:px-32 lx:px-32 lg:px-32 md:px-32 sm:px-32 bg-black">
       
          <Recipe_form />
          <div className="mt-4 flex gap-4 justify-between  border-none p-3 rounded-ss-xl rounded-se-xl bg-[#0E0F12] w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12 ">
                <p className="text-white pt-2 capitalize text-xl font-semibold">
                recipes list
                </p>
                    <Button color="default" className="text-white" variant="bordered" onClick={()=>{handleExport()}} startContent={<FaFileExport/>}>
                            Export
                          </Button>
            
          </div>
          <div className="rounded-ee-xl bg-bgColor rounded-es-xl border-none shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12 ">
            <Recipe_table
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

export default page;
