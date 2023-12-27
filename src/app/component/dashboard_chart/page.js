'use client'

import React from "react";
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const page = ({data}) => {

  const state = {
    series: [{
      name: 'Inflation',
      data: [ data?.user_count, data?.nutritionist_count, data?.recipes_count, data?.blogs_count]
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar',
        foreColor: '#ffffff'
      },
     
      plotOptions: {
        bar: {
          borderRadius: 10,
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val ;
        },
        offsetY: -30,
        style: {
          fontSize: '17px',
          colors: ["#ffffff"]
        }
      },
      
      xaxis: {
        categories: ["Users", "Nutritions", "Recipes", "Blogs"],
        position: 'bottom',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val ;
          }
        }
      
      },
      // colors: ['#97C121'],
    },
    
  }
  

    return (
      <div className="rounded-xl border border-bgColor bg-bgColor shadow-md p-5">
        <div className="row">
          <div className="mixed-chart">
          
            <Chart
              options={state.options}
              series={state.series}
              type="bar"
              width="98%"
              height="400"
            />
    
          </div>
        </div>
      </div>
    );
}

export default page;