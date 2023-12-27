"use client";

import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Divider,
  Avatar,
  Textarea,
  useDisclosure,
} from "@nextui-org/react";
// import axios from "axios";
import Loading from "../CardLoader/page";
import Userlist_Bookingdetails from '../userlist_bookingdetails/page';
// import { useQuery } from "react-query";
// import { useMyContext } from "@/app/context";
// import moment from "moment";
// import Btn_Loader from '../Btn_loader/page'
// import { toast } from "react-toastify";
// import { FaClock } from "react-icons/fa6";

export default function page(props) {

  const json_data = [
    {
      id : 1,
      first_name : "Albert",
      last_name : "Morris",
      phone : "+111-22-333",
      email : "a.morris@gmail.com",
      gender : "m",
      height : "5ft 9inch",
      weight : "97",
      activeness : "moderate",
      goals : "loose weight",
      dob : "May 17 1995"
    }
  ]

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //   const {static_recruiter, update_Recruiter } = useMyContext();
  //   console.log('post_id ----- ',props,props.post_id,props.disputeStatus,props.switchModal)
  //   const { isOpen, onOpen, onOpenChange } = useDisclosure();

  //   const [description, setDescription] = useState('');
  //   const[switchModal,setswitchModal]=useState(props.switchModal)
  //   const[showDispute,setshowDispute]=useState(props.disputeStatus)
  //   const [isModalOpen, setIsModalOpen] = useState(null);

  //   let api = localStorage.getItem('api');
  //   const Token = sessionStorage.getItem('Token')
  //   const [load,set_load]=useState(false)

  //   const headers = {
  //     Authorization: `Bearer ${Token}`,
  //   };
  //   console.log('selected_id ----- ', props.id)
  //   console.log('selected_type ----- ', props.type)
  //   console.log('selected_title ----- ', props.title)
  //   console.log('selected_content ----- ', props.content)

  // const saveData=(e)=>{
  //   e.preventDefault();

  //   const body = {
  //     dispute_id:props.post_id,
  //     dispute_status:props.disputeStatus,
  //     reviewer_response :description
  //   }

  //   const config = {
  //       headers : {
  //           Authorization: `Bearer ${Token}`,
  //         }
  //   }
  //   set_load(true)
  //   axios.post(`${api}/dispute/review_dispute/`,body,config)
  //   .then((res)=>{
  //       console.log('Request Accepted Response ----- ', res.data)
  //       res.data.status === true ? (
  //         toast.success(res.data.message),
  //         update_Recruiter(!static_recruiter),
  //         setDescription(''),
  //         setIsModalOpen(false),
  //         set_load(false)

  //     ) : (
  //         toast.error(res.data.message),
  //         set_load(false)

  //     )
  //   }).catch((err)=>{
  //       console.log('Request Accepted Err ----- ', err)
  //   })
  // }

  const [isLoading, setIsLoading] = useState(false);

  // const [data,set_data]=useState('')
  // const {viewpost_id} = useMyContext()
  // console.log('Reported Post id ----- ', viewpost_id)

  // const config = {
  //   headers : {
  //   Authorization: `Bearer ${Token}`,
  // }
  // }

  // useEffect(()=>{

  //   props.post_id?retrieveData():''
  // console.log('data',viewpost_id)
  // },[viewpost_id])

  // const retrieveData = async () => {
  //   setIsLoading(true);
  //   console.log('viewpost_id',viewpost_id,props.post_id)
  //   if(viewpost_id){
  //        await axios.get(`${api}/dispute/get_dispute/${props.post_id}/`, config).then((res)=>{
  //         set_data(res.data.data)
  //         console.log('res.data.data',res.data.data)
  //         setIsLoading(false);

  //       });

  //   }
  //   setIsLoading(false);

  // };
  // const convertDate = (res) => {
  //   const formattedDate = moment(res).format('LLL');
  //   return formattedDate;
  // };

  const HandleRejected = () => {
    props.onClose()
  }

  const HandleAccepted = () => {
    props.onClose()
  }

  return (
    <>
      <Modal
        placement="center"
        size="5xl"
        className="bg-bgColor "
        isOpen={props.isOpen}
        // isOpen={true}
        onOpenChange={props.onOpenChange}
        style={{ backgroundColor: "#23303f", color: "white" }}
      >
        <ModalContent>
          {!isLoading ? (
            <>
              <ModalHeader
                className="flex flex-col gap-1 text-center capitalize border-b-white"
                style={{ borderBottom: "1px solid white" }}
              >
                User Detail
              </ModalHeader>
              <Divider />

              <ModalBody>
                {
                  json_data.map((item,index) => (
<div className="mt-3 mb-3 p-2 ">
                  {/* <h1 className="mb-4 flex"><span className="mr-3 mt-1"><FaClock/></span>abc</h1> */}
                  <form>
                    <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2">
                    <div>
                    <p className="text-[#ffffffa3] text-sm mb-2">First Name</p>
                    <input
                    readOnly
                    value={item.first_name}
                      type="text"
                      placeholder="Enter your Title"
                      className="bg-[#00000040] text-[#ffffffa3] text-base w-52 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                    />
                    </div>

                    <div>
                    <p className="text-[#ffffffa3] text-sm mb-2">Last Name</p>
                    <input
                    readOnly
                    value={item.last_name}
                      type="text"
                      placeholder="Enter your Title"
                      className="bg-[#00000040] text-[#ffffffa3] text-base w-52 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                    />
                    </div>

                    <div>
                    <p className="text-[#ffffffa3] text-sm mb-2">Phone Number</p>
                    <input
                    readOnly
                    value={item.phone}
                      type="text"
                      placeholder="Enter your Title"
                      className="bg-[#00000040] text-[#ffffffa3] text-base w-52 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                    />
                    </div>

                    <div>
                    <p className="text-[#ffffffa3] text-sm mb-2">Email Address</p>
                    <input
                    readOnly
                    value={item.email}
                      type="text"
                      placeholder="Enter your Title"
                      className="bg-[#00000040] text-[#ffffffa3] text-base w-52 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                    />
                    </div>
                    
                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 ">
                    <div className="mt-5 flex justify-start items-center">

<div className="mr-3">
<p className="text-[#ffffffa3] text-sm mb-2">Gender</p>
<input
readOnly
value={item.gender}
  type="text"
//   placeholder="Enter your Title"
  className="bg-[#00000040] text-[#ffffffa3] text-base w-20 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
/>
</div>

<div className="mr-3">
<p className="text-[#ffffffa3] text-sm mb-2">Height</p>
<input
readOnly
value={item.height}
  type="text"
//   placeholder="Enter your Title"
  className="bg-[#00000040] text-[#ffffffa3] text-base w-28 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
/>
</div>
<div>
<p className="text-[#ffffffa3] text-sm mb-2">Weight</p>
<input
readOnly
value={item.weight}
  type="text"
//   placeholder="Enter your Title"
  className="bg-[#00000040] text-[#ffffffa3] text-base w-20 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
/>
</div>

</div>

<div className="mt-5 flex justify-start items-center ">

<div className="mr-5 xl:mr-28 lg:mr-28 md:mr-20 sm:mr-10">
<p className="text-[#ffffffa3] text-sm mb-2">Activeness</p>
<input
readOnly
value={item.activeness}
  type="text"
//   placeholder="Enter your Title"
  className="bg-[#00000040] text-[#ffffffa3] text-base w-32 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
/>
</div>

<div>
<p className="text-[#ffffffa3] text-sm mb-2">Goals</p>
<input
readOnly
value={item.goals}
  type="text"
//   placeholder="Enter your Title"
  className="bg-[#00000040] text-[#ffffffa3] text-base w-32 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
/>
</div>

</div>
                    </div>

                    <div className="mt-5">
                    <div>
                        <p className="text-[#ffffffa3] text-sm mb-2">Date of Birth</p>
                        <input
                        readOnly
                        value={item.dob}
                        type="text"
                        //   placeholder="Enter your Title"
                        className="bg-[#00000040] text-[#ffffffa3] text-base w-72 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                        />
                    </div>

                    
                    </div>

                    <div className="mt-5">
                    <div>
                        <p className="text-[#ffffffa3] text-sm mb-2">Bookings</p>
                        <Userlist_Bookingdetails />
                    </div>

                    <div className="flex justify-end items-center gap-4">
                        <Button color="danger" className="text-white" onClick={()=>HandleRejected()}>Deactivate</Button>
                        <Button color="success" className="text-white" onClick={()=>HandleAccepted()}>Activate</Button>
                    </div>

                    
                    </div>
                  </form>

                  {/* <textarea
                      className="bg-[#00000040] text-[#ffffffa3] w-full text-base  p-5 opacity-90 rounded-md focus:outline-none hover:border-black hover:ring-black focus:ring-black focus:border-black"
                      rows="7"
                       readOnly={true}
                       value={data?data[0].description:''}
                    />  */}
                </div>
                  ))
                }
                
              </ModalBody>
            </>
          ) : (
            <Loading />
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
