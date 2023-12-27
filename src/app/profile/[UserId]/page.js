"use client"
import React, { useState, useEffect } from "react";
import DashboardLayout from "../../component/DashboardLayout/page";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Button, Divider } from "@nextui-org/react";
import { useMyContext } from "@/app/context";
import { toast } from "react-toastify";


const page = () => {

  const { update_Recruiter, static_recruiter } = useMyContext();
  const router = useRouter();
  const {UserId} = useParams()
  const Uid=parseInt(UserId)
console.log('params',UserId)

  const [activeTab, setActiveTab] = useState(0);
  const [userData, setUserData] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [selectedPk, setSelectedPk] = useState(Uid); // Set the desired "pk" value
  let api = localStorage.getItem("api");
  let token = sessionStorage.getItem("Token");
  const tabs = [
    { label: "About" },
    { label: "Experiences" },
    // { label: "Licenses" },
    // { label: "Availability Slots" },
    { label: "Virtual Business" },
    { label: "Videos" },
  ];

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  useEffect(() => {
    axios
    .get(`${api}/user/get_pro_profile/${UserId}/`, config)
    .then((res) => {
          console.log("Found user:", res.data.data);
          // User with matching pk found, you can use selectedUser
          setUserData(res.data.data)
          setUserImage(api+res.data.data.main_image)
          
    })
    .catch((error) => console.error("Error fetching data: ", error));
  }, [UserId]);

  const handleAccept = (getData) => {

    const body = {
        id:UserId,
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
            update_Recruiter(!static_recruiter),
            router.push('../user_request')
        ) : (
            toast.error(res.data.message)
        )
    }).catch((err)=>{
        console.log('Request Accepted Err ----- ', err)
        toast.error("Something Went Wrong")
    })
}

  return (
    <DashboardLayout>
      <div className="container mx-auto mt-32">
        <div>
          <div className="bg-bgColor relative shadow rounded-lg w-[98%] mx-auto text-white">
            <div className="flex justify-center">
              <img
                src={userData ? userImage : "https://avatars0.githubusercontent.com/u/35900628?v=4"}
                alt=""
                className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-white transition duration-200 transform hover:scale-110"
              />
            </div>

            <div className="mt-16">
              <h1 className="font-bold text-center text-md 2xl:text-3xl xl:text-3xl lg:text-3xl md:text-lg sm:text-md text-iniherit capitalize">
                {userData?.first_name || "User Name"}
              </h1>
              <p className="text-center text-md 2xl:text-xl xl:text-xl lg:text-xl md:text-lg sm:text-md mt-5 text-gray-400 font-medium text-iniherit capitalize">
                {userData?.category || "User Category"}
              </p>
              <div className="flex justify-between items-center my-5 px-6">
                {tabs.map((tab, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`${
                      activeTab === index
                        ? "text-white bg-[#73858f]"
                        : "text-gray-500 hover:text-white hover:border-b-1"
                    } rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3`}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </a>
                ))}
              </div>
              {activeTab === 0 && (
                <div className="w-full">
                  <div className="bg-bgColor rounded-lg shadow-md p-4 mt-4 ml-4">
                    <h4 className="text-sm 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg sm:text-md font-semibold text-gray-400 text-iniherit items-center mb-5 text-center">About</h4>
                    <ul className="list-disc list-inside">
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize"><span className="font-bold">Name :</span> {userData?.first_name || "Mo username found"}</li>
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize"><span className="font-bold">Email :</span> {userData?.email || "Mo email address found"}</li>
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize"><span className="font-bold">Phone no :</span> {userData?.phone_number || "No phone found"}</li>
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize"><span className="font-bold">Languages :</span> {userData?.languages !== null ? userData?.languages.map((item)=> `${item.name}, `) : null || "No language found"}</li>
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize"><span className="font-bold">Skills :</span> {userData?.skills !== null ? userData?.skills.join(", ") : null || "No skills found"}</li>
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize"><span className="font-bold">Services :</span> {userData?.services !== null ? userData?.services.join(", ") : null || "No services found"}</li>
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize">
                      <span className="font-bold">Availability Slots : </span> 
                      <ul className="list-disc list-inside text-gray-400 text-md mt-1 ml-7">
                      {userData?.availability_slots !== null ? userData?.availability_slots.slots.map((slot, index) => (
                          <li key={index}>
                            {slot.day} -{" "}
                            {slot.time.map((time) => `${time.start_time} to ${time.end_time}`).join(", ")}
                          </li>
                        )) : <p className="text-gray-400 text-start">No slots found.</p>
                        }
                        </ul>
                        </li>
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize">
                      <span className="font-bold">Licenses :</span>
                    {userData?.licenses.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-400 text-md mt-1 ml-7">
                        {userData.licenses.map((license, index) => (
                          <li  key={index}>
                            {license.license_name} ({license.start_date} - {license.expiry_date})
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-start ml-7">No license found.</p>
                    )}
                    
                    </li>   
                    <li className="text-gray-400 pl-2 pb-2 mt-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md text-iniherit capitalize"><span className="font-bold">Details :</span> {userData?.about || "About text goes here"}</li>
                    
                    </ul>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="w-full">
                  <div className="bg-bgColor rounded-lg shadow-md p-4 mt-4 ml-4">
                    <h4 className="text-sm 2xl:text-2xl xl:text-2xl lg:text-xl md:text-lg font-semibold text-gray-400 text-iniherit items-center mb-5 text-center">Experiences</h4>
                    <Divider />
                    <div>
                    {userData?.experiences.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-400 pl-2 pb-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md mt-5">
                        {userData.experiences.map((exp, index) => (
                          <li className="text-iniherit" key={index}>
                            {exp.job_title} at {exp.company_name} ({exp.start_date} - {exp.end_date})
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-center">No experience found.</p>
                    )}
                    </div>
                  </div>
                </div>
              )}
              {/* {activeTab === 2 && (
                <div className="w-full">
                  <div className="bg-bgColor rounded-lg shadow-md p-4 mt-4 ml-4">
                    <h4 className="text-2xl font-semibold text-gray-400 text-iniherit items-center mb-5 text-center">Licenses</h4>
                    <Divider />
                    <div>
                    {userData?.licenses.length > 0 ? (
                      <ul className="list-disc list-inside text-gray-400 pl-2 pb-2 text-md mt-5">
                        {userData.licenses.map((license, index) => (
                          <li key={index}>
                            {license.license_name} ({license.start_date} - {license.expiry_date})
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-center">No license found.</p>
                    )}
                    </div>
                  </div>
                </div>
              )} */}
              {/* {activeTab === 3 && (
                <div className="w-full">
                  <div className="bg-bgColor rounded-lg shadow-md p-4 mt-4 ml-4">
                    <h4 className="text-2xl font-semibold text-gray-400 text-iniherit items-center mb-5 text-center">Availability Slots</h4>
                    <Divider />
                    <div>
                    {userData?.availability_slots ? (
                      <ul className="list-disc list-inside text-gray-400 pl-2 pb-2 text-md mt-5">
                        {userData.availability_slots.slots.map((slot, index) => (
                          <li key={index}>
                            {slot.day} -{" "}
                            {slot.time.map((time) => `${time.start_time} to ${time.end_time}`).join(", ")}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-center">No availability found.</p>
                    )}
                    </div>
                  </div>
                </div>
              )} */}
              {activeTab === 2 && (
                <div className="w-full">
                  <div className="bg-bgColor rounded-lg shadow-md p-4 mt-4 ml-4">
                    <h4 className="text-sm 2xl:text-2xl xl:text-3xl lg:text-2xl md:text-lg sm:text-md font-semibold text-gray-400 text-iniherit text-center mb-5">Virtual Business</h4>
                    <Divider />
                    <div>
                    {userData?.virtual_business ? (
                      <ul className="list-disc list-inside text-gray-400 pl-2 pb-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md mt-5">
                        <li className="mt-2">Accept Call Request: {userData.virtual_business.accept_call_request ? "Yes" : "No"}</li>
                        <li className="mt-2">Consultation Fee: {userData.virtual_business.consultation_fee}</li>
                        <li className="mt-2">Duration: {userData.virtual_business.duration}</li>
                        <li className="mt-2">Accept Quote Request: {userData.virtual_business.accept_quote_request ? "Yes" : "No"}</li>
                        <li className="mt-2">Quote Fee: {userData.virtual_business.quote_fee}</li>
                        <li className="mt-2">Offer Subscription: {userData.virtual_business.offer_subscription ? "Yes" : "No"}</li>
                        <li className="mt-2">Subscription Fee: {userData.virtual_business.subscription_fee}</li>
                        <li className="mt-2">Subscription Discount: {userData.virtual_business.subscription_discount}</li>
                      </ul>
                    ) : (
                      <p className="text-gray-400 text-center">No virtual business found.</p>
                    )}
                    </div>
                  </div>
                </div>
              )}
              {activeTab === 3 && (
                <div className="w-full">
                  <div className="bg-bgColor rounded-lg shadow-md p-4 mt-4 ml-4 flex items-center flex-col">
                    <h4 className="text-sm 2xl:text-2xl xl:text-2xl lg:text-2xl md:text-lg sm:text-md font-semibold text-gray-400 text-iniherit items-center mb-5">Videos</h4>
                    <Divider />
                    {userData?.videos ? (
                      userData.videos.map((video, index) => (
                        <>
                        <div key={index} className="mt-4 mb-6">
                          <div>
                          <h5 className="text-sm 2xl:text-lg xl:text-lg lg:text-lg md:text-lg sm:text-md font-semibold text-gray-400 text-iniherit mt-9 capitalize pl-2  ">{video.video_name}</h5>
                          <p className="text-gray-400 pl-2 pb-2 text-sm 2xl:text-md xl:text-md lg:text-md md:text-md sm:text-md">{video.description}</p>
                          <video width="800" height="400"controls src={api+video.video} className="rounded-lg"  />
                          </div>
                          
                        </div>
                        <Divider />
                        </>
                      ))
                    ) : (
                      <p className="text-gray-400 text-center">No videos found.</p>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="bg-bgColor flex justify-center 2xl:justify-end xl:justify-end lg:justify-end md:justify-end sm:justify-center items-end rounded-ee-lg rounded-es-lg">
                      {/* <Divider /> */}
                      
                      <div className="p-5">
                      <Button color="danger" onClick={()=>handleAccept('reject')} >
                        Reject
                      </Button>
                      <Button color="success" variant="bordered" className="ml-3" onClick={()=>handleAccept('accept')} >
                        Accept
                      </Button>
                      </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default page;
