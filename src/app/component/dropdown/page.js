"use client"
import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRouter } from 'next/navigation'
import axios from "axios";
import { toast } from "react-toastify";
import { useMyContext } from "@/app/context";

export default function page({data}) {

    console.log('Dropdown props ----- ', data)

    const {update_Recruiter, static_recruiter} = useMyContext()

    const api = localStorage.getItem('api')
    const token = sessionStorage.getItem('Token')
    const router = useRouter()

    const handleNavigate = () => {
        // router.push('../../user_request_details')
    }

    const handleAccept = (getData) => {

        const body = {
            id:data,
            acount_status:getData,
            reason:"xyz"
        }

        const config = { 
            headers : {
                Authorization: `Bearer ${token}`,
              }
        }

        axios.post(`${api}/user/pro_profile_request_response/`,body,config)
        .then((res)=>{
            console.log('Request Accepted Response ----- ', res.data)
            res.data.status === true ? (
                toast.success(res.data.message),
                update_Recruiter(!static_recruiter)
            ) : (
                toast.error(res.data.message)
            )
        }).catch((err)=>{
            console.log('Request Accepted Err ----- ', err)
            toast.error("Something Went Wrong")
        })
    }
    
const profile_view=()=>{
  router.push(`../profile/${data}`);
}


  return (
    <Dropdown className="bg-[#0e0f12] text-[#ffffffa3] border-0 border-default-200">
      <DropdownTrigger>
        <button onClick={handleNavigate}>
          <BsThreeDotsVertical color="white" />
        </button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem className="hover:bg-[#00000040]" key="new" onClick={profile_view}>
            Show Details
            </DropdownItem>
        <DropdownItem className="hover:bg-[#00000040]" key="copy" color="success" onClick={()=>handleAccept('accept')}>Accept</DropdownItem>
        <DropdownItem className="hover:bg-[#00000040] text-danger" key="delete" color="danger" onClick={()=>handleAccept('reject')}>
          Reject
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
