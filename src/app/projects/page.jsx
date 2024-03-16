import Layout from "@/layout/Layout";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <Layout>
      <div className="pt-[50px] theme-container px-10">
        <div className="flex items-center p-2.5 gap-2 cursor-pointer">
          <Image height={20} width={20} src="/icons/back.svg" alt="Back" />
          <p className="font-medium text-[1rem] leading-[21px] font-[Prompt] text-[#c1cef1]">
            Back
          </p>
        </div>

        <div className="flex mt-6">
          {/* card details */}
          <div className="flex-grow pl-[60px] pt-[23px] pr-[34px] pb-[50px] rounded-[30px] bg-[#18182b]">
            <div className="flex gap-[65px]">
              {/* Left */}
              <div className=" flex flex-col items-center pt-8">
                <div className="rounded-2xl overflow-hidden">
                  <Image src="/CGV.png" height={150} width={150} alt="Logo" />
                </div>

                {/* Social */}
                <div className="flex items-center gap-6 mt-6">
                  <Image
                    src="/icons/Discord-white.svg"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <Image
                    src="/icons/Twitter-white.svg"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                  <Image
                    src="/icons/Telegram-white.svg"
                    height={20}
                    width={20}
                    alt="icon"
                  />
                </div>

                {/* Short info */}
                <div className="pt-4 pr-[30px] pb-[27px] pl-[27px] rounded-[30px] bg-[#212137] mt-6">
                  <h4 className="text-center text-[17px] leading-[31px] font-[Prompt]">
                    Round 1
                  </h4>

                  <p className="mt-3 text-[14px] leading-[23px] text-[#7787b1] text-center">
                    Ended:
                  </p>
                  <h5 className="mt-2 text-[1rem] font-medium leading-[21px] text-[#c1cef1]">
                    May 30, 2023
                  </h5>
                </div>
              </div>

              {/* Right */}
              <div className="">
                <div className="">
                  <div className="flex items-center">
                    <div className="flex items-center gap-0.5 bg-[#32405a] px-3 rounded-full">
                      <img src="/icons/circle.svg" alt="" />
                      <p className="text-[14px] leading-[23px] text-[#c1cef1] p-1.5">
                        Closed
                      </p>
                    </div>
                    <p className="ml-[20px] text-[14px] leading-[23px] font-[Prompt]">
                      Round 1 of 1
                    </p>
                  </div>
                  <h1 className="mt-6 text-[36px] leading-[44px]  font-[800]">Cogito Protocol</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
