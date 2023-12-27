"use client";
import React, { useLayoutEffect, useState } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { FaUsers, FaBriefcase, FaRegComments, FaRegCircleStop } from "react-icons/fa6";
import { TbCircleArrowUpFilled } from "react-icons/tb";

const page = ({data}) => {

  console.log('dashboard card data ----- ', data)
  // const card_data = [
  //   {
  //     id: 1,
  //     title: "Users",
  //     count: data.user_count,
  //     icon: <FaUsers />,
  //     color: 'bg-green-700'
  //   },
  //   {
  //     id: 2,
  //     title: "Nutritions",
  //     count:  data.nutritionist_count,
  //     icon: <FaBriefcase />,
  //     color: 'bg-yellow-500'
  //   },
  //   {
  //     id: 3,
  //     title: "Recipes",
  //     count:  data.recipes_count,
  //     icon: <FaRegCircleStop />,
  //     color: 'bg-red-600'
  //   },
  //   {
  //     id: 4,
  //     title: "Blogs",
  //     count:  data.blogs_count,
  //     icon: <FaRegComments />,
  //     color: 'bg-blue-500'
  //   },
  // ];

  const card_data = [
    {
      id: 1,
      title: "Total Revenue",
      count: "40,000.00",
      increase: "3",
      icon: <FaUsers />,
      color: 'bg-green-700'
    },
    {
      id: 2,
      title: "Total Users",
      count:  "2,700",
      increase: "5",
      icon: <FaBriefcase />,
      color: 'bg-yellow-500'
    }
  ];

  return(
    <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 lg=grid-cols-2 md:grid-cols-2 sm:grid-cols-2">
    {
        card_data.map((item, index) => (
            <Card key={index} className="max-w-[370px] xl:max-w-[300px] lg:max-w-[300px] md:max-w-[300px] sm:max-w-[300px] shadow-md 2xl:max-w-[1200px]  hover:shadow-xl bg-bgColor ">
              <CardBody className="flex flex-row justify-around items-center p-4 2xl:p-10 xl:p-10 lg:p-10 md:p-10 sm:p-4">
                <div className="flex-1 items-center justify-center">
                  <p className="uppercase text-textColor text-2xl font-medium font-sans text-center">
                    {item.title}
                  </p>
                  <p className="text-primaryColor text-xl mt-1 font-semibold text-center">{ item.id == 1  ? `$ ${item.count}` : `${item.count}` }</p>
                
                <div className="flex item-center justify-center mt-4">
                <TbCircleArrowUpFilled className="text-[#6ba814] text-2xl" />
                  <p className="text-md text-primaryColor">
                    <span className="text-xl font-semibold text-[#6ba814] mr-0.5">{item.increase}%</span> 
                    This Month
                    </p>
                </div>
                
                
                </div>
        
                {/* <div className={`rounded-full ${item.color} text-white text-4xl p-1 shadow-xl`}>
                  {item.icon}
                </div> */}
              </CardBody>
            </Card>
          ))
    }
    </div>
  )
};

export default page;