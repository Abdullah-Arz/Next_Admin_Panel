"use client";
import React, { useState } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Privacy_policy from "../component/user_policy_form/page";
import ProUser_privacy_table from "../component/ProUser_privacy_table/page";
import { Select, SelectItem } from "@nextui-org/react";
import axios from "axios";
import { useQuery } from "react-query";
import { useMyContext } from "../context";
import Loading from '../component/loader/page'
import Error from '../component/error_page/page'

function page() {
  
  const { static_content,static_deletecontent } = useMyContext();
  const api = localStorage.getItem('api');
  const token = sessionStorage.getItem("Token");


  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const retrieveData = async () => {
    const response = await axios.get(
      `${api}/user/get_pro_terms_conditions_privacy_policy/`,
      { headers }
    );
    return response.data;
  };

  const { data: data, error, isLoading } = useQuery(["Data", static_content,static_deletecontent], retrieveData);

  console.log('Policy Data ----- ',data)
  
  return (
    <DashboardLayout>
      <div className="bg-black rounded-lg mt-3 ml-3">
        
        {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error.message} />
            ) : (
              <>
              <h1 className="p-3 bg-black text-white capitalize text-inherit text-2xl ">
                Pro User Policy
              </h1>
              <div className="px-0 py-5 2lx:px-32 lx:px-32 lg:px-32 md:px-32 sm:px-32 bg-black">
       
          <Privacy_policy />
          <div className="mt-4 border-none p-3 rounded-ss-xl rounded-se-xl bg-[#0E0F12] w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12 ">
            <p className="text-white capitalize text-inherit text-md">
              content list
            </p>
          </div>
          <div className="rounded-ee-xl bg-bgColor rounded-es-xl border-none shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12 ">
            <ProUser_privacy_table
            data={data.data}
            />
          </div>
        </div>
              </>
       
        )}
      </div>
    </DashboardLayout>
  );
}

export default page;
