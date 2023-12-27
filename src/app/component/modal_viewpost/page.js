"use client"

import React, { useEffect, useState } from "react";

import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Divider, Avatar} from "@nextui-org/react";
import axios from "axios";
import Loading from '../CardLoader/page'
import { useQuery } from "react-query";
import { useMyContext } from "@/app/context";

export default function page(props) {

  console.log('post_id ----- ',props.post_id)
  const [isLoading, setIsLoading] = useState(false);
  
  let api = localStorage.getItem("api");
  let token = sessionStorage.getItem("Token");
  const [data,set_data]=useState('')
  const {viewpost_id} = useMyContext()
  console.log('Reported Post id ----- ', viewpost_id)

  const config = { 
    headers : {
    Authorization: `Bearer ${token}`,
  }
}
useEffect(()=>{

  retrieveData()
  console.log('data',viewpost_id)
},[viewpost_id])

  const retrieveData = async () => {
    setIsLoading(true);
    
    if(viewpost_id){
         await axios.get(`${api}/job/job_detailview/${viewpost_id}/`, config).then((res)=>{
          set_data(res.data.data)
          setIsLoading(false);

        });
    
    }
    setIsLoading(false);

    
  };


  console.log('Reported Post Modal ----- ', data)
  
  return (
    <>
      <Modal placement='center' isOpen={props.isOpen} onOpenChange={props.onOpenChange} >
        <ModalContent>
          {(onClose) => (
           !isLoading?
            <>
              <ModalHeader className="flex flex-col gap-1">Reported Post Detail</ModalHeader>
              <Divider />
              
                  <ModalBody>
                <div className="mt-3 mb-3 p-2 " >
                <div className=" flex items-center flex-row" >
                <Avatar showFallback src={`${api}${data.profile_image}`} />
                <div className="ml-3">
                <h2 className="text-md font-bold">{data.profile_name}</h2>
                <p className="text-sm font-medium">{data.title}</p>
                  </div>                
                </div>
                <div className="mt-5 ml-5">
                  <ul style={{ listStyleType: 'disc' }}>
                      <li className="text-sm font-medium">Created On : {data.created_on}</li>
                      <li className="text-sm font-medium">Experience : {data.experience}</li>
                      <li className="text-sm font-medium">Location : {data.city}, {data.country}</li>
                      <li className="text-sm font-medium">Job Status : {data.job_status}</li>
                      <li className="text-sm font-medium">Vehicle Type : {data.vehicle_type}</li>
                    </ul>
                  </div>

                  <div className="mt-5 ml-2">
                  <h2 className="text-md font-bold">Description</h2>
                  <p className="text-sm font-medium">{data.description}</p>
                  </div>
                  </div>
              </ModalBody>
             
              
              
            </>
            :<Loading/>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
