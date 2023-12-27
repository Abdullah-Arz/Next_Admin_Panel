"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import RejectedUser_table from "../component/rejectedUsers_table/page";
import axios from "axios";
import Loading from '../component/loader/page'
import Error from '../component/error_page/page'
import { useMyContext } from "../context";

function Page() {
  
  const {static_recruiter } = useMyContext();

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const api = localStorage.getItem('api');
  const token = sessionStorage.getItem("Token");

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  console.log('static_recruiter',static_recruiter)

  useLayoutEffect(() => {
    async function retrieveData() {
      try {
        const response = await axios.get(
          `${api}/user/get_rejected_pro/`,
          { headers }
        );
        console.log('Pro User Data ---- ', response.data.data)
        setData(response.data.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    retrieveData();

    
  }, [static_recruiter]);

  return (
    <div className="overflow-y-hidden">
      <DashboardLayout>
       
        {isLoading ? (
          <Loading />
        ) : error ? (
          <Error message={error.message} />
        ) : (
          <>
           {/* <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-textColor ">
          pro users
        </h1> */}
          <div className="px-0 mt-9 2lx:px-32 lx:px-32 lg:px-10 bg-[#000000]">
            <div className="bg-bgColor border-none p-3 rounded-ss-xl rounded-se-xl  w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-96">
              <p className="text-white capitalize text-inherit text-3xl">
              pro users rejected List
              </p>
            </div>
            <div className=" bg-bgColor rounded-ee-xl rounded-es-xl shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-9/12">
              <RejectedUser_table data={data} />
            </div>
          </div>
          </>
        )}
      </DashboardLayout>
    </div>
  );
}

export default Page;
