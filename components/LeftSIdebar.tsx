"use client";
import { category } from "@/data/Data";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const LeftSIdebar: React.FC = () => {
  const leftMenu = useRef<any>();
  const alt_menu = useRef<any>();
  const [menuWidth, setMenuWidth] = useState("w-72");
  const [active, setActive] = useState<boolean>(false);

  const [categoryName, setCategoryName] = useState<any>("telefon və qatcetlər");
  const [ctg, setCtg] = useState<any>([]);
 

  const handleAltMenuVisibility = () => {
    setTimeout(() => {
      const altMenu = alt_menu.current;
      if (altMenu) {
        altMenu.classList.add("opacity-100");
      }
    }, 500);
  };

  const openadnclose = () => {
    setMenuWidth((prevWidth) => (prevWidth === "w-72" ? "w-full" : "w-72"));
    handleAltMenuVisibility();
    setCategoryName(category?.slice(0,1)?.[0]?.name)
  
  };
  useEffect(() => {
    const findCtg = category?.find((elem) => elem?.name == categoryName);
    setCtg(findCtg);
  }, [categoryName]);

  const open = (name: any) => {
    setMenuWidth("w-full");
    handleAltMenuVisibility();
    setCategoryName(name);
    setActive(!active);
  };
  return (
    <>
      <main
        className={`fixed top-0 left-0 md:left-[-100%] h-full bg-[#f5f5f5] dark:bg-[#191919] z-[200] ${menuWidth} px-3 py-3 transitions `}
        ref={leftMenu}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <Link href="https://bakuelectronics.az/" target="_blank">
              <img src="/baku-logo.svg" alt="" />
            </Link>
            <button
              onClick={()=>openadnclose()}
              type="button"
              className="bg-[#e6e6e6] dark:bg-[#2a2a2a] dark:text-white text-black px-3 py-3 rounded-xl shadow-[0px_10px_19px_0px_rgba(0_0_0_0.03)] z-50"
            >
              {menuWidth === "w-72" ? (
                <FaAngleDoubleRight />
              ) : (
                <FaAngleDoubleLeft  />
              )}
            </button>
          </div>
          <div className="flex items-center mt-10 pl-3 ">
            <ul
              className={`flex flex-col gap-2 items-start  ${
                menuWidth === "w-full" ? "border-r-2 pr-3 dark:border-[#ffffff2a]" : "border-0"
              }`}
            >
              {category &&
                category?.map((item, i) => {
                  return (
                    <li
                      key={i}
                      onClick={() => open(item?.name)}
                      className={`${
                        menuWidth === "w-full" ? "pl-3 " : "pl-4"
                      } relative flex gap-3 items-center capitalize item  transitions hover:font-medium hover:bg-[#fff] dark:hover:bg-[#000] px-3 py-3 w-full hover:rounded-2xl cursor-pointer
                      `}
                    >
                      <img
                        src={item?.icon}
                        alt={`Icon for ${item?.name}`}
                        className={`w-6 h-6 dark:fill-white`}
                      />
                      <span className={`lg:text-[14px] text-[14px] dark:text-white`}>
                        {item?.name}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </div>
          {menuWidth === "w-full" && (
            <div
              ref={alt_menu}
              className="ml-[288px] alt_menu opacity-0 fixed left-0 top-0 pt-32 right-0 pl-[40px] transition-all ease-out bg-[#f5f5f5] dark:bg-[#191919] w-auto  grid grid-cols-12 gap-3 h-full pr-6"
            >
              <div className="col-span-10 h-full">
                <div className="w-full ">
                  {ctg?.submenu?.map((curr: any,i:number) => (
                    <div key={i} className=" float-left w-[25%] mb-4">
                      <h2 className="font-bold capitalize text-[16px] lg:text-[13px] mb-4 dark:text-white">
                        {curr?.name}
                      </h2>
                      <ul className="flex flex-col gap-2">
                        {curr?.categoryname?.map((elem: any, i: number) => (
                          <li
                            className="capitalize py-1 text-[#333] dark:text-white lg:text-[13px] cursor-pointer hover:font-semibold transitions"
                            key={i}
                          >
                            {elem?.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-span-2 ">
                <div className="flex flex-col gap-3">
                  <img
                    className="w-[250px] object-cover"
                    src="/santa1.png"
                    alt=""
                  />
                  <img
                    className="w-[250px] object-cover"
                    src="/santa2.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          )}
        </div>

      </main>

    </>
  );
};

export default LeftSIdebar;
