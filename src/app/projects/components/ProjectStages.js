'use client'

import React from "react";
import ReactApexChart from "react-apexcharts";

export default function ProjectStages() {
  const state = {
    series: [75],
    options: {
      chart: {
        height: 350,
        type: "radialBar",
        toolbar: {
          show: true,
        },
      },
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24,
            },
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35,
            },
          },

          dataLabels: {
            show: true,
            name: {
              offsetY: -10,
              show: true,
              color: "#888",
              fontSize: "17px",
            },
            value: {
              formatter: function (val) {
                return parseInt(val);
              },
              color: "#111",
              fontSize: "36px",
              show: true,
            },
          },
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100],
        },
      },
      stroke: {
        lineCap: "round",
      },
      labels: ["Percent"],
    },
  };
  return (
    <div className="mt-6 flex-grow pl-[60px] pt-[23px] pr-[60px] pb-[50px] rounded-[30px] bg-[#18182b]">
      <h1 className="mt-10 text-[30px] leading-[46px] font-[Mulish] font-bold">
        Project stages
      </h1>

      <div className="flex gap-20 mt-10 pt-[52px] px-[50px] pb-[37px] bg-[#212137] rounded-[30px]">
        <div className="flex justify-center items-center w-[200px]">
          {/* <ReactApexChart
            options={state.options}
            series={state.series}
            type="radialBar"
            width='200px'
          /> */}
        </div>
        <div className="flex-grow">
          <div className="flex justify-between">
            <h1 className="font-medium text-[24px] leading-[31px] font-[Prompt]">
              Round 1
            </h1>
            <div className="flex items-center gap-0.5 bg-[#32405a] px-3 rounded-full">
              <img src="/icons/circle.svg" alt="" />
              <p className="text-[14px] leading-[23px] text-[#c1cef1] p-1.5">
                Closed
              </p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center mt-3">
              <div className="flex">
                <div className="rounded-full h-[35px] w-[35px] overflow-hidden border-[5px] border-[#202740]">
                  <img src="/CGV.png" alt="" />
                </div>
                <div className="relative -left-3 rounded-full h-[35px] w-[35px] overflow-hidden border-[5px] border-[#202740]">
                  <img src="/CGV.png" alt="" />
                </div>
              </div>
              <p className="px-1.5 pl-0 text-[17px] leading-[31px]">
                1 CGV = 0.11 ADA
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-[42px]">
            <div className="flex justify-between">
              <p className="font-[300] text-[14px] leading-[25px] text-[#c1cef1b3]">
                Sale period:
              </p>
              <p className="font-[300] text-[14px] font-[Prompt] leading-[25px]">
                May 29 - May 30, 2023
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-[300] text-[14px] leading-[25px] text-[#c1cef1b3]">
                Tokens allocation:
              </p>
              <p className="font-[300] text-[14px] font-[Prompt] leading-[25px]">
                6,250,000 CGV
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-[300] text-[14px] leading-[25px] text-[#c1cef1b3]">
                Min/Max allocation:
              </p>
              <p className="font-[300] text-[14px] font-[Prompt] leading-[25px]">
                1,250 / 625,000 CGV
              </p>
            </div>
            <div className="flex justify-between">
              <p className="font-[300] text-[14px] leading-[25px] text-[#c1cef1b3]">
                Raised:
              </p>
              <p className="font-[300] text-[14px] font-[Prompt] leading-[25px]">
                346,833 / 687,500 ADA
              </p>
            </div>

            <div className="mt-[42px] text-[#c1cef1b3] font-[300] text-[14px] font-[Mulish] px-[25px] py-[15px] bg-[#18182b] rounded-[15px]">
              Available to all eligible buyers who pass KYC!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
