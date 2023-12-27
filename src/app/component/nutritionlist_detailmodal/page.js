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
import Userlist_Bookingdetails from "../userlist_bookingdetails/page";
// import { useQuery } from "react-query";
// import { useMyContext } from "@/app/context";
// import moment from "moment";
// import Btn_Loader from '../Btn_loader/page'
// import { toast } from "react-toastify";
// import { FaClock } from "react-icons/fa6";

export default function page(props) {
  const json_data = [
    {
      id: 1,
      full_name: "Tony Reichert",
      phone_number: "+92-111-111-111",
      email: "tony.reichert@example.com",
      category: [ "Sports", "Corporate", "Wallness", "Wallness" ],
      language: ["English", "German", "French", "Japanese"],
      skills: ["Nutritional Knowledge", "Problem Solving", "Assessment Skills", "Medical Knowledge", "Dietory Planning"],
      price: "120 / hours",
      website: "www.abc.com",
      license: "XYZ-1523",
      license_details: [
        {
        id:1,
        title: "neutritionist",
        code: '432NJs558462A22',
        date: 'Jan-2019 Apr-2024'
      },
      {
        id:2,
        title: "psychatrist",
        code: '432NJs558462A22',
        date: 'Jan-2019 Apr-2024'
      }
    ],
      about:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      experience: [
        {
        id:1,
        title: "senior vegan neutritionist",
        subtitle: 'cleveland clinic',
        date: 'Jan-2019 Apr-2024'
      },
      {
        id:2,
        title: "diet planner",
        subtitle: 'rumbie inc',
        date: 'Jan-2019 Apr-2024'
      },
      {
        id:3,
        title: "diet nutritionist",
        subtitle: 'shop in studio',
        date: 'Jan-2019 Apr-2024'
      }
    ],
    },
  ];

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
    props.onClose();
  };

  const HandleAccepted = () => {
    props.onClose();
  };

  const HandleDeactivate = () => {
    props.onClose();
  }

  const HandleActivate = () => {
    props.onClose();
  }

  return (
    <>
      <Modal
        placement="center"
        size="5xl"
        className="bg-bgColor overflow overflow-y-auto h-5/6"
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
                Nutritionist Detail
              </ModalHeader>
              <Divider />

              <ModalBody>
                {json_data.map((item, index) => (
                  <div className="mt-3 mb-3 p-2 ">
                    {/* <h1 className="mb-4 flex"><span className="mr-3 mt-1"><FaClock/></span>abc</h1> */}
                    <form>
                      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2">
                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Nutritionist Name
                          </p>
                          <input
                            readOnly
                            value={item.full_name}
                            type="text"
                            placeholder="Enter your Title"
                            className="bg-[#00000040] text-[#ffffffa3] text-base w-64 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                          />
                        </div>

                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Phone Number
                          </p>
                          <input
                            readOnly
                            value={item.phone_number}
                            type="text"
                            placeholder="Enter your Title"
                            className="bg-[#00000040] text-[#ffffffa3] text-base w-64 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                          />
                        </div>

                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Email Address
                          </p>
                          <input
                            readOnly
                            value={item.email}
                            type="text"
                            placeholder="Enter your Title"
                            className="bg-[#00000040] text-[#ffffffa3] text-base w-64 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                          />
                        </div>

                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mt-5">
                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Category
                          </p>
                          
                          <div className="flex flex-wrap max-w-64">
                          {
                            item.category.map((item, index)=>{
                            return (
                                <div className="bg-[#00000040] text-[#ffffffa3] text-base w-fit h-fit px-3 py-3 rounded-full hover:border-black hover:ring-black focus:outline-none focus:border-black mr-1 mb-1">
                                <p >{item}</p>
                                </div>
                            )
                            }
                                
                            )
                          }
                          </div>
                          
                        </div>

                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Languages
                          </p>
                          <div className="flex flex-wrap max-w-64">
                          {
                            item.language.map((item, index)=>{
                            return (
                                <div className="bg-[#00000040] text-[#ffffffa3] text-base w-fit h-fit px-3 py-3 rounded-full hover:border-black hover:ring-black focus:outline-none focus:border-black mr-1 mb-1">
                                <p >{item}</p>
                                </div>
                            )
                            }
                                
                            )
                          }
                          </div>

                        </div>

                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Skills
                          </p>
                          <div className="flex flex-wrap max-w-64">
                          {
                            item.skills.map((item, index)=>{
                            return (
                                <div className="bg-[#00000040] text-[#ffffffa3] text-base w-fit h-fit px-3 py-3 rounded-full hover:border-black hover:ring-black focus:outline-none focus:border-black mr-1 mb-1">
                                <p >{item}</p>
                                </div>
                            )
                            }
                                
                            )
                          }
                          </div>
                        </div>

                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mt-5">
                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Price
                          </p>
                          <input
                            readOnly
                            value={`$ ${item.price}`}
                            type="text"
                            placeholder="Enter your Title"
                            className="bg-[#00000040] text-[#ffffffa3] text-base w-64 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                          />
                        </div>

                        <div>
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Website
                          </p>
                          <input
                            readOnly
                            value={item.website}
                            type="text"
                            placeholder="Enter your Title"
                            className="bg-[#00000040] text-[#ffffffa3] text-base w-64 h-12 px-2 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black"
                          />
                        </div>

                      </div>

                      <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 mt-5">
                        <div className="col-span-1">
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            License Details
                          </p>
                          <div className="flex">
                            {
                                item.license_details.map((item,index) => {
                                    return(
                                        <div className="bg-[#00000040] text-[#ffffffa3] text-base w-64 h-fit px-3 py-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black mr-2">
                                        <p className="font-bold">{item.title}</p>
                                        <p>License Number,</p>
                                        <p>{item.code}</p>
                                        <p>{item.date}</p>

                                        </div>
                                    )
                                })
                            }
                          

                          
                          </div>
                          
                        </div>

                        

                      </div>

                      <div className="mt-5">
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            About
                          </p>
                          <textarea
                      className="bg-[#00000040] text-[#ffffffa3] w-full  text-base  p-5 opacity-90 rounded-md focus:outline-none hover:border-black hover:ring-black focus:ring-black focus:border-black"
                      rows="4"
                       readOnly={true}
                       value={item.about}
                    /> 
                         
                        </div>

                        <div className="mt-5">
                        <div className="col-span-1">
                          <p className="text-[#ffffffa3] text-sm mb-2">
                            Experience
                          </p>
                          <div className="flex">
                          {
                            item.experience.map((item,index) => {
                                return(
                                    <div className="bg-[#00000040] text-[#ffffffa3] w-fit h-fit px-3 py-5 rounded-md hover:border-black hover:ring-black focus:outline-none focus:border-black mr-2">
                                    <p className="font-bold">{item.title}</p>
                                    {/* <p>License Number,</p> */}
                                    <p>{item.subtitle}</p>
                                    <p>{item.date}</p>

                                    </div>
                                )
                        })
                          }
                          

                          
                          </div>
                          
                        </div>

                        {
                          props.type === 'rejected' ? (
                            null
                          ) : (
                            props.type === 'request' ? (
                              <div className="flex justify-end items-center gap-4 mt-5">
                              <Button color="danger" className="text-white" onClick={()=>HandleRejected()}>Reject</Button>
                              <Button color="success" className="text-white" onClick={()=>HandleAccepted()}>Accept</Button>
                          </div>
                                  ) : (
                                      <div className="flex justify-end items-center gap-4 mt-5">
                              <Button color="danger" className="text-white" onClick={()=>HandleDeactivate()}>Deactivate</Button>
                              <Button color="success" className="text-white" onClick={()=>HandleActivate()}>Activate</Button>
                          </div>
                                  )
                          )
                           
                        }

                        
                        

                      </div>
                        

                      
                    </form>

                    
                  </div>
                ))}
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
