"use client";
import React from "react";
import DashboardLayout from "../component/DashboardLayout/page";
import Pro_subscribed_user_table from "../component/pro_subscribed_user_table/page";
import axios from "axios";
import { useQuery } from "react-query";
import Loading from '../component/loader/page'
import Error from '../component/error_page/page'
import { useMyContext } from "../context";

function page() {

  const {static_driver } = useMyContext();

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
      `${api}/user/get_verified_pros/`,
      { headers }
    );
    return response.data;
  };

  const { data: data, error, isLoading } = useQuery(["Data",static_driver], retrieveData);

 

  return (
    <div className="overflow-y-hidden">
      <DashboardLayout>
       
                    {isLoading ? (
              <Loading />
            ) : error ? (
              <Error message={error.message} />
            ) : (
              <>
               <h1 className="text-2xl pl-1 pb-5 pt-2 font-inherit uppercase text-white ">
                
              </h1>
              <div className="px-0 2lx:px-32 lx:px-32 lg:px-10 ">
                {/* <div className="px-0 2lx:px-32 lx:px-32 lg:px-10 md:px-32 sm:px-32 bg-slate-50"> */}
                    <div className="bg-bgColor border-none p-3 rounded-ss-xl rounded-se-xl  w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-96 ">
                      <p className="text-white capitalize text-inherit text-3xl">
                        pro subscribed users list
                      </p>
                    </div>
                    <div className=" bg-bgColor rounded-ee-xl rounded-es-xl border-none shadow-md p-4 w-72 2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-96 ">
                      <Pro_subscribed_user_table
                      data={data.data}
                      />
                    </div>
                    {/* </div> */}
              </div>
              </>

            )}
     
        
      </DashboardLayout>
    </div>
  );
}

export default page;
