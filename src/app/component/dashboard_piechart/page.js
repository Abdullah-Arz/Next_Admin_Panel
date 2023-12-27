"use client"

import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic';
import ReactApexChart from 'react-apexcharts';

// const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

function page() {

  // const [isMounted, setIsMounted] = useState(false);

  //   useEffect(() => {
  //       setIsMounted(true);
  //   }, []);

    const state = {
          
        series: [60, 40],
        options: {
            stroke:{
                width : 1,
                colors:['none']
               },
          chart: {
            width: 380,
            type: 'pie',
            foreColor: '#ffffff'
          },
          dataLabels: {
            enabled: false // <--- HERE
          },
          legend: {
            show: true,
            position:'bottom'
          },
          labels: ['User', 'Nutritionist'],
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom',
                height: 12,
                width:12
              }
            }
          }]
        },
      
      
      };
    

  return (
    
    <div>
        <div className='border-b-1 border-primaryColor' >
            <p className='text-textColor text-2xl font-semibold text-center py-4'>Users</p>   
        </div>
        <div className='flex justify-center items-center py-4'>
        {/* {isMounted && ( */}
        <ReactApexChart options={state.options} series={state.series} type="pie" width={380} />
        {/* )} */}
        </div>
    </div>
    
    
  )
}

export default page