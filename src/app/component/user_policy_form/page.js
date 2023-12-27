"use client"    
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, Divider, Button, Select, SelectItem } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { useMutation, useQueryClient } from 'react-query';
import axios from "axios";
import { toast } from "react-toastify";
import { useMyContext } from "@/app/context";
import Btn_Loader from '../Btn_loader/page'
import { usePathname } from "next/navigation";


export default function Page() {
  const API =  localStorage.getItem('api');
  const Token = sessionStorage.getItem('Token')
  const [load,set_load]=useState(false)
  const {static_content, update_Static_content } = useMyContext();
  const [selected, setSelected] = useState("Privacy Policy");
  const currentRoute = usePathname();
  console.log('Pro User slug ----- ', currentRoute)

  const handleChange = (value) => {
    
    setSelected(value.target.value);
    console.log(`Option selected:`, value.target.value);
  };

  const headers = {
    Authorization: `Bearer ${Token}`,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if(e.target.title.value !=="" ||  e.target.description.value !=="" ){
      set_load(true)
      const formData = {
        type:selected.split(' ').join('_'),
        heading: e.target.title.value,
        content: e.target.description.value,
        role: currentRoute === '/pro_policy' ? 'pro' : 'user'
        };
        axios.post(`${API}/user/create_terms_conditions_or_privacy_policy/`,formData,{ headers }).then((res)=>{
          toast.success(res.data.message);
          static_content=== true ? update_Static_content(false):update_Static_content(true)
          e.target.reset();
          set_load(false)

        }).catch(((err)=>{
          toast.error("Some thing went wrong");
          set_load(false)

  
      }))
    }
    else{
      toast.error("All Fields are Required");
    }

    } 

  return (
    <Card className="rounded-2xl bg-bgColor border border-black shadow-md ">
      <CardHeader className="flex gap-3 text-slate-50 bg-[#0E0F12] font-semibold text-xl ">
       {/* {selected} */}
       FAQ's
      </CardHeader>
      <Divider />
      <CardBody className="bg-bgColor">
        <form onSubmit={handleSubmit}>
          <h4 className="text-[#ffffffa3] text-sm my-4">Select Content Type <span className="text-red-700 p-1">*</span></h4>

          <select
            id="Content"
            required
            name="Content"
            className="w-full text-base h-12 pl-5 pr-3 rounded-md text-[#ffffffa3]  focus:outline-none  bg-[#00000040]"
            onChange={handleChange}
          >
            <option
    key="Privacy Policy"
    id="option_style"
    className="text-white h-12 m-52 opacity-90 hover:bg-black hover:text-white focus:outline-none hover:border-black hover:ring-black focus:ring-black focus:border-black bg-[#1A1B1E]"
  >
    Privacy Policy
  </option>
  <option
    key="Term and Condition"
    id="option_style"
    className="text-[#ffffffa3] h-12 m-52 opacity-90 hover:bg-black hover:border-black focus:outline-none hover:text-white focus:ring-black focus:border-black bg-[#1A1B1E]"
  >
    Term and Condition
  </option>
  <option
    key="about"
    id="option_style"
    className="text-[#ffffffa3] h-12 m-52 opacity-90 hover:bg-black hover:border-black focus:outline-none hover:text-white focus:ring-black focus:border-black bg-[#1A1B1E]"
  >
    About
  </option>
  
</select>
          <h4 className="text-[#ffffffa3] text-sm my-4">Enter your Title <span className="text-red-700 p-1">*</span></h4>
          <input
            type="text"
            name="title"
            label="Title"
            placeholder="Enter your Title"
            className="bg-[#00000040] text-[#ffffffa3] text-base w-full h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
          />
          <h4 className="text-[#ffffffa3] text-sm my-4">Description <span className="text-red-700 p-1">*</span></h4>

          <textarea
            name="description"
            label="Description"
            className="bg-[#00000040] text-[#ffffffa3] w-full text-base  p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
            placeholder="Enter your Content"
            rows="4" cols="50"
            required
          />
          <div className="flex justify-end p-5">
            {load?
              <Button
              color="default"
              type="submit"
              className="bg-slate-500 text-[#ffffffa3] rounded-lg"
              size="md"
              disabled
            >
             <Btn_Loader/>
            </Button>:
              <Button
              color="primary"
              type="submit"
              
              className="bg-[#0E0F12] text-[#ffffffa3] rounded-lg"
              size="md"
            >
              Save
            </Button>
            }
          
          </div>
        </form>
      </CardBody>
    </Card>
  );
}