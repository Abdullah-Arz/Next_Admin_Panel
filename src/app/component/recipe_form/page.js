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
  const [blog_by,set_blog_by]=useState('')
  const [blog_content,set_blog_content]=useState('')
  const [blog_image,set_blog_image]=useState('')
  const [category,set_category]=useState('')
  const [date_of_publish,set_date_of_publish]=useState('')
  const [title,set_title]=useState('')
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
    const handleImageChange = (e) => {
      // Your image upload logic goes here
      const selectedImage = e.target.files[0]; // Get the selected image file
      // Perform actions with the selected image (e.g., upload to server, display preview, etc.)
      set_blog_image(URL.createObjectURL(selectedImage)); // Set the selected image for preview
    };
  return (
    <Card className="rounded-2xl bg-bgColor border border-black shadow-md ">
      <CardHeader className="flex gap-3 text-slate-50 bg-[#0E0F12] text-xl font-semibold ">
      Add Recipe
      </CardHeader>
      <Divider />
      <CardBody className="bg-bgColor">
        <form onSubmit={handleSubmit} className="px-4">
        <div className="w-full">
            <h4 className="text-[#ffffffa3] text-sm my-4">Recipe Name<span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={title}
                onChange={(e)=>{set_title(e.target.value)}}
                placeholder="Enter your Title"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
            </div>

        <div className="flex justify-between gap-4">
        <div className="w-5/6">
            <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">yield<span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={title}
                onChange={(e)=>{set_title(e.target.value)}}
                placeholder="Enter your Title"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
            </div>
            <div className="w-5/6">
            <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">preparation time<span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={blog_by}
                onChange={(e)=>{set_blog_by(e.target.value)}}
                placeholder="Enter your Time"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
              
            </div>
            <div className="w-5/6">
            <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">cooking time <span className="text-red-700 p-1">*</span></h4>
              <input
                id="blog_date"
                type="text"
                name="title"
                label="Title"
                value={date_of_publish}
                onChange={(e)=>{set_date_of_publish(e.target.value)}}
                placeholder="Enter your Time"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
            </div>
        </div>

        <div className="w-full">
            <h4 className="text-[#ffffffa3] text-sm my-4">About<span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={title}
                onChange={(e)=>{set_title(e.target.value)}}
                placeholder="Enter your Title"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
            </div>
        
       
         
          <h4 className="text-[#ffffffa3] text-sm my-4 capitalize">ingredients <span className="text-red-700 p-1">*</span></h4>

          <textarea
            name="description"
            label="Description"
            className="bg-[#00000040] text-[#ffffffa3] w-full text-base  p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
            placeholder="Enter your ingredients"
            value={blog_content}
            onChange={(e)=>{set_blog_content(e.target.value)}}
            rows="8" cols="50"
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
              // type="submit"
              
              className="bg-[#0E0F12] text-[#ffffffa3] rounded-lg"
              size="lg"
            >
              Publish
            </Button>
            }
          
          </div>
        </form>
      </CardBody>
    </Card>
  );
}