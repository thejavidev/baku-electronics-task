"use clinet";
import { category } from "@/data/Data";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa";
interface IconsProps {
  show: any;
  shows: any;
}

const MobileSidebar: React.FC<IconsProps> = ({ show, shows }) => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [openSubCategory, setOpenSubCategory] = useState<string | null>(null);

  const handleOpen =
    (name: any) => (event: React.MouseEvent<HTMLDivElement>) => {
      setOpenCategory((prev) => (prev === name ? null : name));
    };
  const handleOpenSub = (name: any) => {
    setOpenSubCategory((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <div
        className={`mobile-menu-overlay overflow-x-hidden transitions block fixed left-[0]  top-[0] bottom-[0] right-[0] z-[100] bg-[#191919bf] ${
          show ? "visible opacity-100" : "opacity-0 invisible "
        }`}
      ></div>
      <div
        className={` ${
          show ? "opacity-100 left-0" : "opacity-0 left-[-100%]"
        } transitions overflow-y-scroll absolute h-full top-0 z-[300] bg-[#f5f5f5] dark:bg-[#191919] w-[300px] px-7 lg:px-3`}
      >
        <button onClick={shows} className="absolute right-4 top-2">
          <IoClose className="text-[30px] dark:text-white" />
        </button>
        <ul className="pt-20 lg:pt-10 gap-1 flex flex-col">
          {category &&
            category?.map((item, i) => (
              <li
                className="text-[#000] dark:text-white flex  gap-0 items-start flex-col capitalize py-1 cursor-pointer justify-between"
                key={i}
              >
                <div
                  className="flex items-center justify-between w-full py-3 md:py-1"
                  onClick={handleOpen(item?.name)}
                >
                  <div className="flex items-center gap-1">
                    <img className="w-6 h-6" src={item?.icon} alt="" />
                    <span className="text-xl lg:text-[16px] md:text-[13px]">{item.name}</span>
                  </div>
                  <span>
                    <FaCaretDown />
                  </span>
                </div>
                <ul
                  className={`gap-2 md:gap-1 flex-col transitions2 ${
                    openCategory === item?.name
                      ? "flex visible h-full"
                      : " invisible h-0"
                  }`}
                >
                  {item &&
                    openCategory === item?.name &&
                    item?.submenu?.map((elem, i) => (
                      <li
                        className="px-6 py-[2px] flex items-start gap-2 md:gap-1 w-full flex-col"
                        key={i}
                        onClick={() => handleOpenSub(elem?.name)}
                      >
                        <div className="flex items-center gap-2 md:gap-1">
                          <span className=" inline-block font-semibold text-xl lg:text-[16px] md:text-[13px]">
                            {elem?.name}
                          </span>
                          <span>
                            <FaCaretDown />
                          </span>
                        </div>
                        <ul>
                          {elem &&
                            openSubCategory === elem?.name &&
                            elem?.categoryname?.map((cur, i) => (
                              <li className="pl-3 text-[15px]" key={i}>{cur?.name}</li>
                            ))}
                        </ul>
                      </li>
                    ))}
                </ul>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default MobileSidebar;
