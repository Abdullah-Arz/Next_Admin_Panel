"use client"

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "../component/loader/page";
// import { useMyContext } from "../context"; // Import the context hook
import { FaEye, FaEyeSlash, FaFontAwesome } from "react-icons/fa6";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to control password visibility
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [rememberedUsers, setRememberedUsers] = useState([]);
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_LOCAL_API;
  localStorage.setItem("api", api);

  useEffect(() => {
    // Load remembered users from local storage

    const storedUsers =
      JSON.parse(localStorage.getItem("rememberedUsers")) || [];
    setRememberedUsers(storedUsers);

    console.log('storedUsers ----- ',storedUsers)
    
  }, []);

  useEffect(() => {
    const selectedUser = rememberedUsers.find((user) => user.email === email);
    console.log("selectedUser", selectedUser);

    // if (localStorage.checkbox && localStorage.email !== '') {
    if (selectedUser) {
      setIsChecked(true);
      setEmail(selectedUser.email);
      setPassword(selectedUser.password);
    } else {
      setPassword("");
      setIsChecked(false);
    }
  }, [email, rememberedUsers]);

  async function submitData(event) {
    event.preventDefault();
    setIsLoading(true);
    if (isChecked && email !== "") {
      localStorage.email = email;
      localStorage.password = password;
      localStorage.checkbox = isChecked;
    }
    const name = event.target.username.value;
    const pass = event.target.password.value;

    const body = {
      username: name,
      password: pass,
      role: 'admin'
    };

    router.push("/dashboard");
    toast.success("Login Successfully");

    // try {
    //   const res = await axios.post(`${api}/user_management/signin/`, body);
    //   console.log("Login Successfully ---", res.data);

    //   if (res.data.status === false) {
    //     toast.error(res.data.message);
    //     setIsLoading(false);
    //   } else {
    //     toast.success(res.data.message);
    //     router.push("/dashboard");
    //     event.target.reset();
    //     sessionStorage.setItem("Token", res.data.data.access);
    //     sessionStorage.setItem("Refresh", res.data.data.refresh);

    //     if (isChecked) {
    //       const updatedUsers = [...rememberedUsers];
    //       const existingUser = updatedUsers.find(
    //         (user) => user.email === email
    //       );
    //       if (existingUser) {
    //         existingUser.password = password;
    //       } else {
    //         updatedUsers.push({ email, password });
    //       }
    //       localStorage.setItem("rememberedUsers", JSON.stringify(updatedUsers));
    //     } else {
    //       // Remove user from remembered users

    //       const updatedUsers = rememberedUsers.filter(
    //         (user) => user.email !== email
    //       );
    //       localStorage.setItem("rememberedUsers", JSON.stringify(updatedUsers));
    //     }
    //   }
    // } catch (err) {
    //   console.log("Login Failed ---", err);
    //   toast.error('Something Went Wrong');
    //   setIsLoading(false);
    // }
  }
  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    console.log('Checked ------ ',event.target.checked)
  };

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-[#73858F] h-screen">
         

          <div className="md:flex bg-[#0E0F12]  h-full w-full shadow-lg">
          
            <div className="bg-[#23303F] gap-5 flex flex-col items-center justify-center sm:w-2/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4">
              <img
                src="/icon_full.png"
                alt="Phone image"
                className=" bg-[#23303F]"
              />  
              <p className="text-5xl font-bold text-[#6ba814]">Nutri Snap</p>
            </div>
            <div className="flex sm:w-2/4  md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-2/4  justify-center items-center">
            
              <form
                className="bg-[#0E0F12]  w-full px-14 "
                onSubmit={(e) => submitData(e)}
              >
                <h1 className="text-xl lg:text-3xl md:text-3xl sm:text-2xl   font-normal text-white mt-32 mb-10">
                   Login to Nutri Snap 
                </h1>
                <p className="2xl:text-xl text-sm font-normal text-white mt-4 mb-1">
                  Email <span className="text-red-600">*</span>
                </p>

                <div className="flex items-center bg-[#1A1B1E]  text-gray-400 border-2 py-2 px-3 rounded-lg mb-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-2 outline-none border-none bg-transparent w-full text-white required"
                    value={email}
                    required
                    name="username"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Username"
                  />
                </div>
                <p className=" 2xl:text-xl text-sm font-normal text-white mb-1">
                  Password <span className="text-red-600">*</span>
                </p>

                <div className="flex items-center bg-[#1A1B1E] text-gray-400 border-2 py-2 px-3 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input
                    className="pl-2 w-full outline-none border-none bg-transparent text-white required focus:text-white"
                    value={password}
                    required
                    name="password"
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />

                  {/* Password visibility toggle */}
                  <span
                    className="cursor-pointer ml-2"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEye className="text-lg text-slate-400 pointer-events-none" />
                    ) : (
                      <FaEyeSlash className="text-lg text-slate-400 pointer-events-none" />
                    )}
                  </span>
                </div>

                <div className="flex justify-between mt-5">
                  {isChecked === true ? (
                    <span className="text-base ml-2 cursor-pointer text-slate-400">
                      <input
                        type="checkbox"
                        className="default:ring-2 text-slate-400"
                        name="lsRememberMe"
                        checked
                        onChange={handleCheckboxChange}
                      />{" "}
                      Remember me
                    </span>
                  ) : (
                    <span className="text-base ml-2 cursor-pointer text-slate-400">
                      <input
                        type="checkbox"
                        className="default:ring-2 text-slate-400"
                        name="lsRememberMe"
                        onChange={handleCheckboxChange}
                      />{" "}
                      Remember me
                    </span>
                  )}

                  <Link
                    className="text-base ml-2 text-slate-400 cursor-pointer mt-1 "
                    href="/forgetPassword"
                  >
                    Forgot Password ?
                  </Link>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="block w-1/5 	justify-between bg-[#23303F] mt-12 py-2 rounded-md text-white font-medium mb-2 "
                    disabled={isLoading}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
