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
} from "@nextui-org/react";
import { useMyContext } from "@/app/context";
import { toast } from "react-toastify";
import axios from "axios";
import Btn_Loader from '../Btn_loader/page'

export default function page(props) {
  
  // const {static_editcontent,static_editcontent_type,static_editcontent_title,static_editcontent_content} = useMyContext()
  const [selected, setSelected] = useState(props.type);
  const [selected_title, setSelected_Title] = useState(props.title);
  const [selected_content, setSelected_Content] = useState(props.content);
 
  const API =  localStorage.getItem('api');
  const Token = sessionStorage.getItem('Token')
  const [load,set_load]=useState(false)
  const {static_content, update_Static_content } = useMyContext();

  const headers = {
    Authorization: `Bearer ${Token}`,
  };
  console.log('selected_id ----- ', props.id)
  console.log('selected_type ----- ', props.type)
  console.log('selected_title ----- ', props.title)
  console.log('selected_content ----- ', props.content)
  

  useEffect(()=>{
    setSelected(props.type)
    setSelected_Title(props.title)
    setSelected_Content(props.content)
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
                Edit Question
              </ModalHeader>
              <form onSubmit={(e)=>saveData(e)}>
              <ModalBody>
              <h4 className="text-[#ffffffa3] text-sm my-2">Select Content Type <span className="text-red-700 p-1">*</span></h4>

                  <select
                  value={selected}
                    id="Content"
                    required
                    name="Content"
                    className="w-full text-base h-12 pl-5 pr-3 rounded-md text-[#ffffffa3] opacity-90  focus:outline-none  bg-[#00000040]"
                    onChange={(e)=>setSelected(e.target.value)}
                  >
                  <option
                  key="Term and Condition"
                  id="option_style"
                  className="text-[#ffffffa3] h-12 m-52 opacity-90 hover:bg-black hover:border-black focus:outline-none hover:text-white focus:ring-black focus:border-black bg-[#1A1B1E]"
                  >
                  Term and Condition
                  </option>
                  <option
                  key="Privacy and Policy"
                  id="option_style"
                  className="text-white h-12 m-52 opacity-90 hover:bg-[#ffffffa3] hover:text-white focus:outline-none hover:border-black hover:ring-black focus:ring-black focus:border-black bg-[#1A1B1E]"
                  >
                  Privacy Policy
                  </option>
                  <option
                  key="About"
                  id="option_style"
                  className="text-white h-12 m-52 opacity-90 hover:bg-[#ffffffa3] hover:text-white focus:outline-none hover:border-black hover:ring-black focus:ring-black focus:border-black bg-[#1A1B1E]"
                  >
                  About
                  </option>
                  </select>
                  <h4 className="text-[#ffffffa3] text-sm my-2">Enter your Title <span className="text-red-700 p-1">*</span></h4>
                  <input
                  value={selected_title}
                    type="text"
                    name="title"
                    label="Title"
                    placeholder="Enter your Title"
                    className="bg-[#00000040] text-[#ffffffa3] text-base w-full h-12 p-5 opacity-90 rounded-md focus:outline-none hover:border-black hover:ring-black focus:ring-black focus:border-black"
                    onChange={(e)=>{setSelected_Title(e.target.value)}}
                  />
                  <h4 className="text-[#ffffffa3] text-sm my-2">Description <span className="text-red-700 p-1">*</span></h4>

                  <textarea
                  value={selected_content}
                    name="description"
                    label="Description"
                    className="bg-[#00000040] text-[#ffffffa3] w-full text-base  p-5 opacity-90 rounded-md focus:outline-none hover:border-black hover:ring-black focus:ring-black focus:border-black"
                    placeholder="Enter your description"
                    rows="4" cols="50"
                    required
                    onChange={(e)=>{setSelected_Content(e.target.value)}}

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
                  <Button color="success" variant="bordered" type="submit" >
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
