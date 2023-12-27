"use client"

import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Select,
  SelectItem,
  Input,
  Textarea,
  Avatar,
} from "@nextui-org/react";
import { useMyContext } from "@/app/context";
import axios from "axios";
import Btn_Loader from '../Btn_loader/page'
import { toast } from "react-toastify";
import moment from "moment";

export default function page(props) {
  

  const API =  localStorage.getItem('api');
  const Token = sessionStorage.getItem('Token')
  const [blog_by,set_blog_by]=useState('')
  const [blog_content,set_blog_content]=useState('')
  const [blog_image,set_blog_image]=useState('')
  const [category,set_category]=useState('')
  const [date_of_publish,set_date_of_publish]=useState('')
  const [title,set_title]=useState('')
  const [load,set_load]=useState('')
  const {static_content, update_Static_content } = useMyContext();

  const headers = {
    Authorization: `Bearer ${Token}`,
  };

  

  useEffect(()=>{
if(props.props){
   console.log('props.blog_by',props)
    set_blog_by(props.props.blog_by)
    set_blog_content(props.props.blog_content)
    set_blog_image(props.props.blog_image)
    set_category(props.props.category)
    set_title(props.props.title)
    convertDate(props.props.date_of_publish)
}
  
  },[props])

const saveData=(e)=>{
  e.preventDefault()
  const formData = {
    type:selected === "1" ? "Term_and_Condition" : "Privacy_Policy",
    heading: selected_title,
    content:selected_content,
    role: props.currentRoute === '/pro_policy' ? 'pro': 'user'
    };
    axios.post(`${API}/user/create_terms_conditions_or_privacy_policy/`,formData,{ headers }).then((res)=>{
      toast.success(res.data.message);
      static_content=== true ? update_Static_content(false):update_Static_content(true)
      set_load(false)
      document.getElementById('closeHandle').click();

    }).catch(((err)=>{
      toast.error("Some thing went wrong");
      set_load(false)


  }))
}

const convertDate = (res) => {
  const formattedDate = moment(res).format('YYYY-MM-DD');
  console.log('formattedDate',formattedDate)
  set_date_of_publish(formattedDate)

};
const handleImageChange = (e) => {
  // Your image upload logic goes here
  const selectedImage = e.target.files[0]; // Get the selected image file
  // Perform actions with the selected image (e.g., upload to server, display preview, etc.)
  set_blog_image(URL.createObjectURL(selectedImage)); // Set the selected image for preview
};
const handleClick = () => {
  // Trigger the click event of the hidden input element to open the file dialog
  document.getElementById('imageSelector').click();
};

  return (
    <>
      <Modal
        isOpen={props.isOpen}
        onOpenChange={props.onOpenChange}
        isDismissable={false}
        size="4xl"
        placement="center"
        className="bg-bgColor"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                Edit Blog
              </ModalHeader>
              <form onSubmit={(e)=>saveData(e)}>
              <ModalBody>
              <div className="w-[20%] pr-4">
                 <h4 className="text-[#ffffffa3] text-sm my-4">Edit Photo <span className="text-red-700 p-1">*</span></h4>
                 <input
                    id="imageSelector"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    style={{ display: 'none' }}
                  />
                  <Avatar
                    className="mb-4 mt-5 cursor-pointer w-28 h-28 text-large"
                    src={blog_image || API + 'default_image_url'} // Display the selected image or the default one
                    alt="Blog Image"
                    onClick={handleClick}
                  ></Avatar>
                </div>
              <div className="flex justify-between">
           
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4">Edit Title<span className="text-red-700 p-1">*</span></h4>
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
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4"> Edit Blog By: <span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={blog_by}
                onChange={(e)=>{set_blog_by(e.target.value)}}
                placeholder="Enter your Title"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
              
            </div>
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4">Edit Date of Publish <span className="text-red-700 p-1">*</span></h4>
              <input
                id="blog_date"
                type="date"
                name="title"
                label="Title"
                value={date_of_publish}
                onChange={(e)=>{set_date_of_publish(e.target.value)}}
                placeholder="Enter your Title"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
            </div>
            <div className="w-[25%] pr-4">
            <h4 className="text-[#ffffffa3] text-sm my-4">Edit Category <span className="text-red-700 p-1">*</span></h4>
              <input
                type="text"
                name="title"
                label="Title"
                value={category}
                onChange={(e)=>{set_category(e.target.value)}}
                placeholder="Enter your Title"
                className="bg-[#00000040] w-full text-[#ffffffa3] text-base h-12 p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
              />
              
            </div>
          
        </div>
       
         
          <h4 className="text-[#ffffffa3] text-sm my-4"> Edit Blog Content <span className="text-red-700 p-1">*</span></h4>

          <textarea
            name="description"
            label="Description"
            value={blog_content}
            onChange={(e)=>{set_blog_content(e.target.value)}}
            className="bg-[#00000040] text-[#ffffffa3] w-full text-base  p-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
            placeholder="Enter your description"
            rows="8" cols="50"
            required
          />
       
              </ModalBody>
              <ModalFooter>
                <Button color="danger" id="closeHandle" onPress={onClose}>
                  Close
                </Button>
                {
                  load?
                  <Button className="bg-slate-500 text-[#ffffffa3]" disabled={true}>
                   <Btn_Loader/>
                  </Button>
                :
                  <Button color="success" variant="bordered"  >
                    Update
                  </Button>
                }
               
              </ModalFooter>
              </form>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
