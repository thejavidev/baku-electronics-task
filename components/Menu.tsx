"use client";
import { MenuType } from "@/type/Type";
import React from "react";
import { usePathname } from "next/navigation";
import { FaCaretDown } from "react-icons/fa";

import Link from "next/link";
const Menu: React.FC = () => {
  const menu: MenuType = [
    {
      id: 1,
      name: "Kampaniyalar",
    },
    {
      id: 2,
      name: "Xidmətlər",
    },
    {
      id: 3,
      name: "Digər",
      icon: <FaCaretDown />,
      submenu: [
        {
          id: 1,
          name: "Əlaqə",
        },
        {
          id: 2,
          name: "Bloq",
        },
      ],
    },
  ];

  return (
    <>
      <ul className="flex items-center gap-2 ml-10 lg:hidden">
        {menu &&
          menu?.map((item) => (
            <li
              key={item?.id}
              className={`${
                item?.name === "Kampaniyalar"
                  ? "font-semibold text-[#000] menu_li"
                  : ""
              } cursor-pointer  px-3 py-3 2xl:px-1 2xl:py-1 text-[#000] relative everly_li`}
            >
              <div className="flex items-center gap-2">
                <span className="xl:text-[14px]"> {item?.name}</span>
                {item?.name === "Digər" && item.icon}
              </div>
              {item?.name === "Digər" && (
                <ul className="absolute bottom-[-60px] menu_ul left-[10px]  bg-[#f5f5f5] px-3 py-2 flex flex-col transition-all ">
                  {item &&
                    item?.submenu?.map((elem) => (
                      <li className="hover:font-semibold transition-all" key={elem.id}>{elem.name}</li>
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
