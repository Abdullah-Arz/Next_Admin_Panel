"use client"    
import React, { useState } from "react";
import { Card, CardHeader, CardBody, Divider, Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { useMutation, useQueryClient } from 'react-query';
import axios from "axios";
import { toast } from "react-toastify";
import { useMyContext } from "@/app/context";
import Btn_Loader from '../Btn_loader/page'


export default function Page({ card_head }) {
  const API =  localStorage.getItem('api');
  const Token = sessionStorage.getItem('Token')
  let header=card_head === "1" ? "Term and Condition" : "Privacy Policy"
  const [load,set_load]=useState(false)
  const {static_content, update_Static_content } = useMyContext();
  const headers = {
    Authorization: `Bearer ${Token}`,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(e.target.title.value !=="" ||  e.target.description.value !=="" ){
      set_load(true)
      const formData = {
        type:card_head === "1" ? "terms_and_conditions" : "privacy_policy",
        title: e.target.title.value,
        content: e.target.description.value,
        };
        axios.post(`${API}/user_management/add_static_content/`,formData,{ headers }).then((res)=>{
          toast.success("Content Added");
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
    <Card className="rounded-xl border shadow-md ">
      <CardHeader className="flex gap-3 text-slate-50 bg-[#212529] font-inherit text-md">
       {card_head === "1" ? "Term and Condition" : "Privacy Policy"}
      </CardHeader>
      <Divider />
      <CardBody>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="title"
            labelPlacement="outside"
            label="Title"
            placeholder="Enter your Title"
            className="rounded-sm"
            isRequired={true}
          />
          <Textarea
            name="description"
            label="Description"
            labelPlacement="outside"
            placeholder="Enter your description"
            minRows={8}
            className=" mt-5 rounded-sm"
            isRequired={true}

          />
          <div className="flex justify-end p-5">
            {load?
              <Button
              type="submit"
              className="bg-slate-500 text-slate-50 rounded-sm"
              size="md"
              disabled
            >
             <Btn_Loader/>
            </Button>:
              <Button
              type="submit"
              className="bg-slate-800 text-slate-50 rounded-sm"
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
