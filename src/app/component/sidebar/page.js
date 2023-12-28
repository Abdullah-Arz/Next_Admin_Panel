"use client"

import Image from "next/image";
import { useState } from "react";
import icon_half from "../../../../public/icon_half.png";
import icon_full from "../../../../public/icon_full.png";
import { BsChevronDown } from "react-icons/bs";
import {
  TbAlignJustified,
  TbNotification,
  TbBrandBlogger,
  TbMessage2,
  TbUserSquareRounded,
  TbUsersGroup,
  TbLayoutGrid,
  TbClipboardList,
  TbFileReport,
  TbArchive,
  TbScanEye,
  TbChevronRight,
  TbGitPullRequest,
  TbCash,
  TbGitPullRequestClosed,
  TbUserCog,
  TbUserOff,
  TbUsers,
  TbUsersPlus,
  TbUserCheck,
  TbUserX,
  TbArticle,
  TbClipboardText,
  TbLicense  
} from "react-icons/tb";
import { usePathname, useRouter } from 'next/navigation'
import { IoMenu } from "react-icons/io5";
import { Tooltip } from "@nextui-org/react";
import { AiFillDiff, AiOutlineFileSync, AiOutlineSolution } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
function page() {

  const [state_Open, setState_Opne] = useState(false);
  const [state_OpenSubmenu, setState_OpenSubmenu] = useState(true);
  const router = useRouter()
  const currentRoute = usePathname();
  console.log('Current page ----- ', currentRoute)

  const Menus = [
    { id: 1, title: "Dashboard", icon: <TbLayoutGrid />,link:'/dashboard' },
    { id: 2, title: "Users", icon: <TbUsersGroup /> ,link:'/users'},
    { id: 3, title: "Nutritions Request", icon: <TbUsersPlus  />,link:'/nutritions_request' },
    { id: 4, title: "Nutritions", icon: <TbUserCheck  />,link:'/nutritions_list' },
    { id: 5, title: "Rejected Nutritions", icon: <TbUserX  />,link:'/rejected_nutritions' },
    { id: 6, title: "Blog", icon: <AiOutlineSolution  />,link:'/blog' },
    { id: 7, title: "Recipe", icon: <TbArticle   />,link:'/recipe' },
    { id: 8, title: "Payments", icon: <TbCash />,link:'/payments' },
    { id: 8, title: "Static Content", icon: <TbClipboardText  />,link:'/static_content' },
    { id: 9, title: "Subscriptions", icon: <TbLicense   />,link:'/subscriptions' },
    { id: 10, title: "Notification", icon: <TbNotification />,link:'/notification' },
    // { id: 6, title: "User Policy Form", icon: <AiFillDiff />,link:'/user_policy' },
    // { id: 7, title: "Pro Policy Form", icon: <AiOutlineSolution />,link:'/pro_policy' },
    // { id: 8, title: "Pro Subscribed Users", icon: <FiUserCheck />,link:'/pro_subscribed_users' },
  
  ];
  const HandleSidebar = () => {
    setState_Opne(!state_Open);
  };

  const HandleSubMenu = () => {
    setState_OpenSubmenu(!state_OpenSubmenu);
  };

  const HandleNavigate = (data) => {
    router.push(data)
  }
  

  return (
    <div>
      <div
        className={`bg-[#23303F] h-screen p-0 xl:p-5 lg:p-5 md:p-5 sm:p-5  pt-5 ${
          state_Open ? "w-72 sm:w-72 md:w-72 lg:w-72 xl:w-72" : "w-0 sm:w-20 md:w-20 lg:w-20 xl:w-20"
        } duration-300 relative`}
      >
        <IoMenu
          className={`text-[#73858F] text-3xl absolute -right-10 top-5
            cursor-pointer duration-0`}
          onClick={HandleSidebar}
        />
        <div className="flex justify-center">
        {
            state_Open?
            <Image
            src={icon_full}
            alt="Connect Pro Icon"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "5em",
              height: "5em",
              transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
            }}
            className="cursor-pointer block float-left mr-2"
          />:
          <Image
          src={icon_half}
          alt="Connect Pro Icon"
          width={0}
          height={0}
          sizes="100vw"
          style={{
            width: "30px",
            height: "30px",
            transition: "width 0.5s ease-in-out, height 0.5s ease-in-out",
          }}
          className="cursor-pointer block float-left mr-2"
        />
        }
        </div>

        <ul className="pt-2">
          {Menus.map((item, index) => (
            <div key={index}>
             <Tooltip
                key={item.link}
                placement='right'
                content={item.title}
                color="default"
              >
              <li
                key={item.id}
                onClick={()=>HandleNavigate(item.link)}
                className={` ${currentRoute === item.link ? "text-sm text-[#6ba814] flex items-center gap-x-4 p-2 mt-4 cursor-pointer bg-transparent sm:border md:border lg:border xl:border sm:border-[#6ba814] md:border-[#6ba814] lg:border-[#6ba814] xl:border-[#6ba814] rounded-md duration-100": "text-sm text-[#73858F] flex items-center border-0 gap-x-4 p-2 mt-4 cursor-pointer  hover:text-[#6ba814] rounded-md duration-100"} `}
              >
                {/* <span style={{width:"200px"}} className={`text-sm font-medium flex-1 ${!state_Open && "hidden"}`}>{item.title}</span> */}
                {item.submenuitem ? (
                  <>
                    {/* <div className="flex items-center" onClick={HandleSubMenu}> */}
                    <span
                      onClick={HandleSubMenu}
                      // className={`text-2xl block float-left ${!state_Open && "hidden"} `}
                      className="text-2xl block float-left"
                    >
                      {item.icon}
                    </span>
                    <span
                      onClick={HandleSubMenu}
                    //   style={{ width: "200px" }}
                      className={`text-sm font-medium flex-1 ${
                        !state_Open && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                    <TbChevronRight
                      onClick={HandleSubMenu}
                      className={` ${state_OpenSubmenu && "rotate-90"}`}
                    />
                    {/* </div> */}
                  </>
                ) : (
                  <>
                    <span className={`text-2xl block float-left ${!state_Open && "hidden sm:block md:block lg:block xl:block"} `}>
                      {item.icon}
                    </span> 
                    <span
                    //   style={{ width: "200px" }}
                      className={`text-sm font-medium flex-1 ${
                        !state_Open && "hidden"
                      }`}
                    >
                      {item.title}
                    </span>
                  </>
                )}
              </li>
              </Tooltip>
              {/* {item.submenuitem && state_OpenSubmenu && (
                <ul>
                  {item.submenuitem.map((submenu, index) => (
                     <Tooltip
                     key={submenu.title}
                     placement='right'
                     content={submenu.title}
                     color="default"
                     >
                      <li
                        key={submenu.id}
                        onClick={() => router.push(submenu.link)}
                        // href={item.link}
                        className={` ${currentRoute === submenu.link ? `text-sm text-[#8b8b8d] flex items-center gap-x-4 p-3 px-4 mt-2 ${!state_Open && "-ml-1"} cursor-pointer bg-white rounded-md` : `text-sm text-[#73858F] flex items-center gap-x-4 p-3 px-4 mt-2 ${!state_Open && "-ml-1"} cursor-pointer hover:bg-white rounded-md`} `}
                        // className={`text-sm text-[#8b8b8d] flex items-center gap-x-4 p-3 px-4 mt-2 ${!state_Open && "-ml-1"} cursor-pointer hover:bg-white rounded-md`}
                      >
                        <span className="text-1xl block float-left">
                          {submenu.icon}
                        </span>
                        <span className={`text-1xl font-normal block float-left ${!state_Open && "hidden"}`}>
                          {submenu.title}
                        </span>
                      </li>
                    </Tooltip>
                  ))}
                </ul>
              )} */}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default page;  