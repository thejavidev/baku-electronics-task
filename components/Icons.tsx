import React from "react";
import { GiScales } from "react-icons/gi";
import { SlBasket } from "react-icons/sl";
import { CiHeart } from "react-icons/ci";
import { IoExitOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

const Icons = () => {
    const language =["az","en","ru"]
  return (
    <>
      <div className="flex items-center gap-6 md:gap-4 sm:gap-2">
        <button className="bg-[#f5f5f5] px-[10px] py-[15px] 2xl:py-[10px] md:py-[8px] md:px-[8px] flex items-center justify-center  outline-none font-bold text-[20px] xl:text-[16px] md:text-[14px] capitalize rounded-xl">
            en
        </button>
        <button className="bg-[#f5f5f5] px-[10px] py-[15px] 2xl:py-[10px] md:py-[8px] md:px-[8px] flex items-center justify-center  outline-none rounded-xl">
            <GiScales className="text-[25px] xl:text-[20px] sm:text-[16px]" />
        </button>
        <button className="bg-[#f5f5f5] px-[10px] py-[15px] sm:hidden 2xl:py-[10px] md:py-[8px] md:px-[8px] flex items-center justify-center  outline-none rounded-xl">
            <SlBasket className="text-[25px] xl:text-[20px] sm:text-[16px]" />
        </button>
        <button className="bg-[#f5f5f5] relative px-[10px] sm:hidden py-[15px] 2xl:py-[10px] md:py-[8px] md:px-[8px] flex items-center justify-center  outline-none rounded-xl">
            <CiHeart className="text-[25px] xl:text-[20px]" />
            <span className="absolute -top-2 -right-2 rounded-[14px] bg-[#EA2427] text-[#fff] px-2 text-[14px] font-medium">9+</span>
        </button>
        <button className="bg-[#f5f5f5]  px-[10px] py-[15px] 2xl:py-[10px] md:py-[8px] md:px-[8px] flex items-center justify-center  outline-none rounded-xl">
            <IoExitOutline className="text-[25px] xl:text-[20px] sm:text-[16px]" />
        </button>
        <button className="bg-[#f5f5f5] hidden sm:flex px-[10px] py-[15px] 2xl:py-[10px]  md:py-[8px] md:px-[8px] items-center justify-center  outline-none rounded-xl">
            <IoIosMenu className="text-[25px] xl:text-[20px] sm:text-[16px]" />
        </button>
      </div>
    </>
  );
};

export default Icons;
