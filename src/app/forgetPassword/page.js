"use client" 
import axios from 'axios'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function forgetPassword() {
  const [isLoading, setIsLoading] = useState(false)
  const router=useRouter()
  const api =   localStorage.getItem('api');

  async function sumbitData(event) {
    event.preventDefault()
    setIsLoading(true) // Set loading to true when the request starts
    const email = event.target.email.value;

    const body = {
      email : email
    }

    axios.post(`${api}/auth/password_reset/`,body)
    .then((res)=>{
      console.log("Forget Pass APi ---",res.data)

      res.data.Status === false ? (
        toast.success(res.data.error),
        setIsLoading(false)
        
      ) : (
        toast.success(res.data.message),
        router.push('/'),
        event.target.reset(),
        setIsLoading(false),
        sessionStorage.setItem('Token',res.data.access
        )
      )
      
    }).catch((err)=>{
      console.log("Login Successfully ---",err)
      setIsLoading(false)
    })

  }
  return (
    <div className='bg-slate-50 px-56 sm:pt-24  md:pt-36  lg:pt-36 xl:pt-36 2xl:pt-36 h-screen'>
      {/* sm:text-red-400 md:text-green-600 lg:text-blue-800 xl:text-pink-900 2xl:text-purple-950 */}

    <div className="md:flex   bg-white    rounded-xl shadow-lg ">
      <div className="flex  sm:w-full md:w-full lg:w-3/5 xl:w-3/5 2xl:w-3/5  justify-center  items-center">
        <form className="bg-white w-screen px-10 py-10 " onSubmit={(e)=>sumbitData(e)}>
    <h1 className=" text-3xl font-semibold w-full text-gray-600 mb-5">Forgot Password?</h1>

         <h1 className=" text-sm font-medium w-full mb-5">Enter your registered email ID to reset the password</h1>

          <p className="2xl:text-xl text-sm font-normal text-gray-950 mb-1">Email <span className='text-red-600'>*</span></p>

          <div className="flex items-center  text-gray-400 border-2 py-2 px-3 rounded-lg mb-4">

            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-800 " viewBox="0 0 20 20"
              fill="currentColor">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd" />
            </svg>
            <input className="pl-2 mt-1 outline-none border-none text-gray-900 required" required name='email' type="email" placeholder="email" />
          </div>
       
          <div className="flex justify-end">
             <button type="submit" className="block w-full 	justify-between bg-neutral-800 mt-9 py-2 rounded-md text-white font-medium mb-2 " disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Reset password'}
            </button>
          </div>
        
        </form>
      </div>
      <div className="md:mb-0 w-2/5  sm:hidden md:hidden lg:block xl:block 2xl:block lg:w-2/5">
      <img src="/readylogo.jpg"alt="Phone image" className='w-full h-full' /> 
        
      </div>
    </div>
 
    </div>

  )
}

export default forgetPassword