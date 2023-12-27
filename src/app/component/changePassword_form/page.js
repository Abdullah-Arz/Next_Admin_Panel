"use client";
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image, Button } from "@nextui-org/react";
import { Input, Textarea } from "@nextui-org/react";
import { FaEye, FaEyeSlash, FaFontAwesome } from "react-icons/fa6";
import { toast } from "react-toastify";
import axios from "axios";

export default function page({ card_head }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const toggleVisibility1 = () => setIsVisible1(!isVisible1);
  const toggleVisibility2 = () => setIsVisible2(!isVisible2);

  const [old_pass, set_old_pass] = useState("");
  const [new_pass, set_new_pass] = useState("");
  const [confirm_pass, set_confirm_pass] = useState("");
  const [submit_btn, set_submit_btn] = useState(true);
  const [loading, setLoading] = useState(false)

  const api = localStorage.getItem("api");
  const token = sessionStorage.getItem("Token");

  const config = { headers : {
    Authorization: `Bearer ${token}`,
  }}

  useEffect(() => {
    if (old_pass && new_pass && confirm_pass !== "") {
      set_submit_btn(false);
    }
  }, [old_pass, new_pass, confirm_pass]);

  const submitForm = (e) => {
    setLoading(true)
    e.preventDefault();

    if (old_pass && new_pass && confirm_pass !== "") {
      if (new_pass === confirm_pass) {
        console.log("old_pass , new_pass , confirm_pass", old_pass, new_pass, confirm_pass);

        const body = {
          'old_password' : old_pass,
          'new_password1' : new_pass,
          'new_password2' : confirm_pass
        }

        axios.post(`${api}/auth/password/change/`, body , config)
    .then((res)=>{
      console.log('Password change successfully ----- ',res.data),
      res.data.status === true ? (
        toast.success(res.data.message),
        e.target.reset(),
        setTimeout(()=>{
          setLoading(false)
        },5000)
        
      ) : (
        toast.error(res.data.message),
        setTimeout(()=>{
          setLoading(false)
        },5000)
      )
      
    }).catch((err)=>{
      console.log('Password change successfully ----- ',err),
      toast.error("Something Went Wrong");
      setTimeout(()=>{
        setLoading(false)
      },5000)
    })

        
      } else {
        console.log("pass not match ");
        toast.error("Password not match");
      }
    }

    

    // const data = new FormData()
    // data.append('oldpassword',e.target.value.oldpassword)
    // data.append('newpassword',e.target.value.newpassword)
    // data.append('confirmpassword',e.target.value.confirmpassword)

    // console.log('Change Pass Data ----- ',data)

    

  };

  const isPasswordMatch = confirm_pass !== "" && new_pass !== "" && new_pass === confirm_pass;

  return (
    <form onSubmit={(e) => submitForm(e)}>
      <Card className="rounded-md border shadow-md ">
        <CardHeader className="flex gap-5 text-slate-50 bg-[#212529] ">{card_head}</CardHeader>
        <Divider />
        <CardBody>
          <Input
            label="Old Password"
            name='oldpassword'
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your password"
            required={true}
            onChange={(e) => set_old_pass(e.target.value)}
            endContent={
              <button className="outline-none" type="button" onClick={toggleVisibility}>
                {isVisible ? (
                  <FaEye className="text-lg text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            className="max-w-full rounded-0"
          />
          <Input
            label="New Password"
            name='newpassword'
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your password"
            required={true}
            onChange={(e) => set_new_pass(e.target.value)}
            endContent={
              <button className="outline-none" type="button" onClick={toggleVisibility1}>
                {isVisible1 ? (
                  <FaEye className="text-lg text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible1 ? "text" : "password"}
            className="max-w-full rounded-0 mt-5"
          />
          <Input
            label="Confirm Password"
            variant="bordered"
            name='confirmpassword'
            placeholder="Enter your password"
            required={true}
            labelPlacement="outside"
            onChange={(e) => set_confirm_pass(e.target.value)}
            endContent={
              <button className="outline-none" type="button" onClick={toggleVisibility2}>
                {isVisible2 ? (
                  <FaEye className="text-lg text-default-400 pointer-events-none" />
                ) : (
                  <FaEyeSlash className="text-lg text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible2 ? "text" : "password"}
            className="max-w-full rounded-0 mt-5"
          />
          {isPasswordMatch ? null : confirm_pass !== "" ? (
            <label className="text-xs text-red-500 pl-3 pt-3">Password doesn't match</label>
          ) : null}
        </CardBody>
        <div className="flex w-full p-5">
          {loading ? (
            <Button className="bg-[#6e7174] w-full text-slate-50 rounded-sm" disabled  type="submit">
              Loading...
            </Button>
          ) : (
            <Button className=" bg-slate-950 w-full text-slate-50 rounded-sm"  type="submit">
              Change Password
            </Button>
          )}
        </div>
      </Card>
    </form>
  );
}
