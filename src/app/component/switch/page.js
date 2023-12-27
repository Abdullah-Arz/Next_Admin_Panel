"use client"

import React from "react";

import { Switch } from "@nextui-org/react";
import axios from "axios";
import { toast } from "react-toastify";

export default function page({ id, name, active, status }) {
  const [isSelected, setIsSelected] = React.useState(active);
  let api = localStorage.getItem("api");
  let token = sessionStorage.getItem("Token");

  console.log('Toggle Enable ----- ', isSelected)

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const Handle_Active = () => {
    console.log("Active Pro Users ----- ", id, name, active);
    const body={
    pk:id,
    is_active:!active
    }
    let cap_name=name.toUpperCase();

    // console.log(!isSelected)

    axios
      .post(`${api}/user_management/toggle_active_status/`, body, config)
      .then((res) => {
        console.log("Active Pro Users Active res ----- ", res.data);
        res.data.status === true
          ? (isSelected === true
              ? toast.success(`${cap_name} Deactivate Successfully`)
              : toast.success(`${cap_name} Activate Successfully`),
            // update_Recruiter(!static_recruiter)
            setIsSelected(!isSelected))
          : toast.error("Something Went Wrong");
      })
      .catch((err) => {
        console.log("Recruiter User Active err ----- ", err);
        toast.error("Something Went Wrong");
      });
  };

  const handle_Active_Driver = () => {
    console.log("Active ----- ", id, name, active);
    const data={
      pk:id,
      is_active:!active
      }
    let cap_name=name.toUpperCase();


    axios.post(`${api}/user_management/toggle_active_status/`,data,config)
    .then((res)=>{
      console.log('Driver User Active res ----- ', res.data)
      res.data.status === true
          ? (isSelected === true
              ? toast.success(`${cap_name} Deactivate Successfully`)
              : toast.success(`${cap_name} Activate Successfully`),
            setIsSelected(!isSelected))
          : toast.error("Something Went Wrong");
    }).catch((err)=>{
      console.log('Driver User Active err ----- ', err)
      toast.error('Something Went Wrong')
    })
  };

  return (
    <div className="flex flex-row gap-2">
      {status == "user" ? (
        <Switch
          size="sm"
          color="primary"
          isSelected={isSelected}
          // onValueChange={handle_Active_Driver}
        />
      ) : (
        <Switch
          size="sm"
          color="primary"
          isSelected={isSelected}
          // onValueChange={Handle_Active}
        />
      )}

      <p className="text-small text-white w-24 ">
        {/* {isSelected ? "Active" : "Deactive"} */}
      </p>
    </div>
  );
}
