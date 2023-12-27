"use client"    

import React, { useContext, useState } from "react";

import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image,Button} from "@nextui-org/react";
import {Input,Textarea} from "@nextui-org/react";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from '../loader/page'
import { useMyContext } from "@/app/context";
import Btn_loder from '../Btn_loader/page'


export default function page({card_head}) {
  const API =  localStorage.getItem('api');
  const Token = sessionStorage.getItem('Token')
  const {update_Notification,notification}=useMyContext()
  const headers = {
    Authorization: `Bearer ${Token}`,
  };
  const [load,set_load]=useState(false)

  const submitData=(e)=>{
      e.preventDefault()
      set_load(true)
      const formData = {
        title: e.target.title.value,
        notification: e.target.notification.value,
        };
        axios.post(`${API}/notification/notify_view/`,formData,{ headers }).then((res)=>{
          toast.success("Notification send to All users");
          update_Notification(notification+1)
          e.target.reset();
          set_load(false)

        }).catch(((err)=>{
          toast.error("Some thing went wrong");
          set_load(false)

  
      }))
  }
  return (
    <Card className="rounded-md border shadow-md " >
      <CardHeader className="flex gap-3 text-slate-50 bg-[#212529] ">
      {card_head}
      </CardHeader>
      <Divider/>
      <CardBody>
        <form onSubmit={(e)=>submitData(e)}>
        <Input
          type="text"
          name="title"
          labelPlacement="outside"
          label="Title"
          placeholder="Enter your Title"
          className="rounded-sm "
          isRequired={true}
          
        />
         
        <Textarea
            label="Message"
            name="notification"
            labelPlacement="outside"
            placeholder="Enter your description"
            minRows={8}
            className=" mt-5 rounded-sm "
            isRequired={true}

            />
             <div className="flex justify-end p-5">
              {
                load?
                <Button className='bg-slate-500 text-slate-50 rounded-sm' size="md">
                <Btn_loder/>
                </Button> :
                <Button type="submit" className='bg-slate-800 text-slate-50 rounded-sm' size="md">
                    Save
                </Button> 
              }
              
            </div>
        </form>
       
      </CardBody>
      
      
    </Card>
  );
}