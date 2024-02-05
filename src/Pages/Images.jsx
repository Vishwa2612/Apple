import React from "react";
import ipad from "../Images/Image/ipad.png";
import valday from "../Images/Image/valday.png";
import airpod from "../Images/Image/airpod.jpg";
import tradein from "../Images/Image/tradein.png";
import AppleIcon from "../Images/Icons/AppleIcon2";
import iwatch2 from "../Images/Image/iwatch-2.jpg";
import macbook from "../Images/Image/macbookpro.png";
import GreaterIcon from "../Images/Icons/GreaterIcon";
import macbook2 from "../Images/Image/macbookpro2.png";


const Images = () => {
  const valdayImage = "url(" + valday + ")";

  return (
    <div className="flex flex-col justify-evenly">
      <div className="flex cus-lg:flex-row cus-mid:flex-row cus-smm:flex-col cus-sm:items-center">
        <div className="p-1 cus-lg:w-[50%] cus-md:w-[50%] cursor-pointer cus-sm:p-0">
          <div className="items-center justify-center flex flex-col mt-10">
            <div className="flex flex-row font-bold text-3xl">
              <AppleIcon/> WATCH
            </div>
            <div className="items-center justify-center flex flex-col">
              <p className="text-orange-500 text-md cus-sm:text-xs font-medium">ULTRA 2</p>
              <p className="text-xl cus-sm:text-lg">Next-level adventure.</p>
              <div className="flex flex-row text-blue-600 cus-lg:text-lg cus-md:text-lg cus-sm:text-md cus-lg:mt-2 cus-md:mt-1 cus-sm:mt-1">
                <div className="cus-lg:mr-4 cus-md:mr-4 cus-sm:mr-5 flex items-center"><p className="pb-1 hover:underline">Learn More</p><GreaterIcon/></div>
                <div className="flex items-center"><p className="pb-1 hover:underline">Buy</p> <GreaterIcon/></div>
              </div>
            </div>
          </div> 
          <div className="flex items-center justify-center">
          <img src={iwatch2}></img>
          </div>
        </div>
        <div className="p-1 cus-lg:w-[50%] cus-md:w-[50%] cus-sm:w-full flex flex-col items-center justify-end cursor-pointer cus-sm:p-0" style={{backgroundImage:valdayImage, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}>
          <div className="flex flex-col items-center cus-lg:mb-32 cus-lg:ml-10 cus-md:mb-14 cus-sm:mt-72 cus-sm:mb-10">
            <p className="text-4xl cus-md:text-3xl font-semibold">Valentine's Day</p>
            <p className="text-xl cus-md:text-md">Find the perfect gift.</p>
            <div className="flex flex-row text-blue-600 cus-lg:text-lg cus-md:text-lg cus-sm:text-lg cus-lg:mt-0 cus-md:mt-3 cus-sm:mt-4">
              <div className="flex items-center"><p className="pb-1 hover:underline">Shop</p><GreaterIcon/></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex cus-lg:flex-row cus-mid:flex-row cus-smm:flex-col cus-sm:items-center p-4 cus-sm:p-0">
        <div className="p-1 w-[50%] cus-sm:w-full cursor-pointer cus-sm:p-0">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-center">
              <p className="cus-lg:text-4xl cus-mid:text-3xl cus-sm:text-3xl font-semibold">MacBook Pro</p>
              <p className="cus-lg:text-xl cus-mid:text-lg cus-sm:text-lg">Mind-blowing. Head-turning.</p>
            </div>
            <div className="flex flex-row text-blue-600 cus-lg:text-lg cus-mid:text-lg cus-sm:text-lg cus-lg:mt-2 cus-md:mt-1 cus-sm:mt-1">
                <div className="cus-lg:mr-4 cus-md:mr-5 cus-sm:mr-3 flex items-center"><p className="pb-1 hover:underline">Learn More</p><GreaterIcon/></div>
                <div className="flex items-center"><p className="pb-1 hover:underline">Buy</p> <GreaterIcon/></div>
            </div>
          </div>
          <img src={macbook} className="cus-md:hidden cus-sm:hidden"></img>
          <div className="flex justify-center">
            <img src={macbook2} className="cus-lg:hidden w-[85%]"></img>
          </div>
        </div>
        <div className="p-1 w-[50%] cus-sm:w-full cursor-pointer cus-sm:p-0">
          <div className="flex flex-col items-center justify-start">
            <div className="flex flex-col items-center">
              <p className="cus-lg:text-4xl cus-mid:text-3xl cus-sm:text-3xl font-semibold">iPad</p>
              <p className="cus-lg:text-xl cus-mid:text-lg cus-sm:text-lg">Lovable. Drawable. Magical.</p>
            </div>
            <div className="flex flex-row text-blue-600 cus-lg:text-lg cus-mid:text-lg cus-sm:text-lg cus-lg:mt-2 cus-mid:mt-2 cus-sm:mt-1">
              <div className="cus-lg:mr-4 cus-mid:mr-3 cus-sm:mr-3 flex items-center"><p className="pb-1 hover:underline">Learn more</p><GreaterIcon/></div>
              <div className="flex items-center"><p className="pb-1 hover:underline">Buy</p> <GreaterIcon/></div>
            </div>
          </div>
          <div className="flex justify-center">
            <img src={ipad} className="cus-lg:w-[50%] cus-md:w-[70%] cus-sm:w-[80%]"></img>
          </div>
        </div>
      </div>
      <div className="flex cus-lg:flex-row cus-mid:flex-row cus-smm:flex-col p-4 cus-sm:p-0">
        <div className="w-[50%] cus-sm:w-full p-1 bg-black cursor-pointer cus-sm:p-0">
          <div className="flex flex-col items-center justify-start bg-black">
            <div className="flex flex-col items-center mt-10">
              <p className="cus-lg:text-4xl cus-mid:text-3xl cus-sm:text-3xl font-semibold text-white">AirPods Pro</p>
              <p className="cus-lg:text-xl cus-mid:text-lg cus-sm:text-lg text-white">Adaptive Audio. Now playing.</p>
            </div>
            <div className="flex flex-row text-blue-400 text-lg cus-lg:mt-2 cus-md:mt-3 cus-sm:mt-2">
              <div className="cus-lg:mr-4 cus-md:mr-3 cus-sm:mr-4 flex items-center"><p className="pb-1 cursor-pointer hover:underline">Learn more</p><GreaterIcon/></div>
              <div className="flex items-center"><p className="pb-1 cursor-pointer hover:underline">Buy</p> <GreaterIcon/></div>
            </div>
          </div>
          <img src={airpod}></img>
        </div>
        <div className="w-[50%] cus-sm:w-full p-1 cursor-pointer cus-sm:p-0">
          <div className="items-center justify-center flex flex-col mt-10">
            <div className="flex flex-row font-bold text-3xl">
              <AppleIcon/> Trade In
            </div>
            <div className="items-center justify-center flex flex-col">
              <p className="cus-lg:text-xl text-lg">Upgrade and Save. It's that easy.</p>
              <div className="flex flex-row text-blue-600 cus-lg:text-lg cus-mid:text-lg cus-smm:text-lg cus-lg:mt-2 cus-md:mt-3 cus-sm:mt-1">
                <div className="cus-lg:mr-4 cus-md:mr-3 cus-sm:mr-3 flex items-center"><p className="pb-1 cursor-pointer hover:underline">See what your device is worth</p><GreaterIcon/></div>
              </div>
            </div>
          </div>
          <div className="flex mt-20">
            <img src={tradein}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
