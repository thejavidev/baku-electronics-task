"use client";

import React from "react";
import { menu } from "@/data/Data";
const Menu: React.FC = () => {

  return (
    <>
      <ul className="flex items-center gap-2 ml-10 lg:hidden">
        {menu &&
          menu?.map((item,i) => (
            <li
              key={i}
              className={`hover:font-bold menu_li transition-all cursor-pointer  px-3 py-3 2xl:px-1 2xl:py-1 text-black dark:text-white relative everly_li`}
            >
              <div className="flex items-center gap-2">
                <span className="xl:text-[14px] text-black dark:text-white"> {item?.name}</span>
                {item?.name === "Digər" && item.icon}
              </div>
              {item?.name === "Digər" && (
                <ul className="absolute bottom-[-60px] menu_ul left-[10px]  bg-[#f5f5f5] dark:bg-[#191919] px-3 py-2 flex flex-col transition-all ">
                  {item &&
                    item?.submenu?.map((elem,i) => (
                      <li className="hover:font-semibold transition-all text-black dark:text-white" key={i}>{elem.name}</li>
                    ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
};

export default Menu;
