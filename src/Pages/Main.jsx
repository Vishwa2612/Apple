import React from "react";
import AppleIcon1 from "../Images/Icons/AppleIcon1";
import GreaterIcon from "../Images/Icons/GreaterIcon";
import iwatchvideo from "../Images/Video/iwatch_1.mp4";
import iphone15pro from "../Images/Image/iphone_15_1.png";
import iphone15pro2 from "../Images/Image/iphone_15_2.png";
import iphone15pro_1 from "../Images/Image/iphone_15_1_1.webp";

const Main = () => {
  const scrollToBottom = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };

  return (
    <div className=" text-white">
      <div className="items-center flex h-12">
        <div className="bg-zinc-800 items-center flex flex-row cus-md:h-12 cus-lg:h-12 cus-sm:h-16 text-sm cus-md:justify-around cus-lg:justify-around cus-sm:justify-around mt-20 cus-sm:mt-24 w-full">
          <div className="flex justify-center text-center items-center">
            <p className="cus-sm:text-[13px] font-semibold">
              Save up to ₹8000.00 instantly on eligible products with HDFC Bank Credit Cards.<span onClick={scrollToBottom} className="hover:cursor-pointer hover:text-blue-500 pl-0.5 pr-0.5">*</span> Plus No Cost EMI from most leading banks.<span onClick={scrollToBottom} className="hover:cursor-pointer hover:text-blue-500 pl-0.5 pr-0.5">‡</span><span className="text-blue-500 hover:underline cursor-pointer font-light">Shop now</span>
            </p>
          </div>
        </div>
      </div>
      <div className="cursor-pointer bg-black">
        <div className="flex flex-col items-center justify-center text-white cus-lg:pt-24 cus-md:pt-20 cus-sm:pt-16">
            <div className="cus-lg:text-5xl cus-md:text-4xl cus-sm:text-2xl cus-lg:mb-2 font-bold">iPhone 15 Pro</div>
            <span className="cus-lg:text-2xl cus-md:text-2xl cus-sm:text-xl">Titanium.So strong.So light.So Pro.</span>
            <div className="flex flex-row text-blue-500 cus-lg:text-xl cus-lg:mt-6 cus-md:mt-3 cus-sm:mt-3">
                <div className="cus-lg:mr-10 cus-md:mr-10 cus-sm:mr-10 flex items-center"><p className="pb-1 hover:underline">Learn More</p><GreaterIcon/></div>
                <div className="flex items-center"><p className="pb-1 hover:underline">Buy</p> <GreaterIcon/></div>
            </div>
            <div className="justify-center items-center flex cus-sm:hidden">
              <img src={iphone15pro} className="flex flex-row w-full" alt="iPhone 15 Pro"/>      
            </div>
            <div className="justify-center items-center flex cus-md:hidden cus-lg:hidden">
              <img src={iphone15pro_1} className="flex flex-row w-full" alt="iPhone 15 Pro"/>      
            </div>
        </div>
      </div>
      <div className="cursor-pointer bg-white">
        <div className="flex flex-col items-center justify-center text-black cus-lg:pt-10 cus-md:pt-10 cus-sm:pt-10">
            <div className="cus-lg:text-6xl cus-md:text-5xl cus-sm:text-3xl font-bold">iPhone 15</div>
            <span className="cus-lg:text-4xl cus-md:text-3xl cus-sm:text-xl">New camera. New design. Newphoria</span>
            <div className="flex flex-row text-blue-600 cus-lg:text-xl cus-md:text-lg cus-sm:text-lg cus-lg:mt-6 cus-md:mt-5 cus-sm:mt-4">
                <div className="cus-lg:mr-10 cus-md:mr-10 cus-sm:mr-7 flex items-center"><p className="pb-1 hover:underline">Learn More</p><GreaterIcon/></div>
                <div className="flex items-center"><p className="pb-1 hover:underline">Buy</p> <GreaterIcon/></div>
            </div>
            <div className="items-center flex">
              <img src={iphone15pro2} className="flex flex-row w-[700px]" alt="iPhone 15 Pro"/>      
            </div>
        </div>
        <div className="relative w-full h-full">
          <video src={iwatchvideo} autoPlay muted preload="auto" className="w-full sm:h-full md:h-full lg:h-full xl:h-full"></video>
          <div className="flex flex-col justify-end items-center absolute top-0 left-0 w-[100%] h-[100%]">
            <div className="cus-lg:mb-10 items-center">
              <p className="cus-lg:text-4xl cus-md:text-2xl cus-sm:text-xl font-bold flex cus-lg:ml-52 cus-md:ml-48 cus-sm:ml-32"><AppleIcon1/>WATCH</p>
              <p className="cus-lg:text-3xl cus-md:text-2xl cus-sm:text-md font-normal cus-lg:ml-60 cus-md:ml-52 cus-sm:ml-40">SERIES 9</p>
              <p className="cus-lg:text-2xl cus-md:text-xl cus-sm:text-sx cus-md:mb-3">Double tap. A magical new way to  use Apple Watch</p>
            </div>
            <div className="flex flex-row mb-16 cus-sm:mb-1">
              <div className="border rounded-full bg-white text-black text-1xl p-2 font-semibold w-32 pl-5 mr-7 cus-sm:w-26 cus-sm:pl-5">Learn more</div>
              <div className="border rounded-full bg-white text-black text-1xl p-2 font-semibold w-20 pl-7 cus-sm:w-14 cus-sm:pl-3"> Buy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
