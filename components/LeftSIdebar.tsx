"use client";
import { Categories } from "@/type/Type";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

const LeftSIdebar: React.FC = () => {
  const leftMenu = useRef<any>();
  const alt_menu = useRef<any>();
  const [menuWidth, setMenuWidth] = useState("w-72");
  const category: Categories = [
    {
      id: 1,
      name: "telefon və qatcetlər",
      icon: "/navbar/phone.svg",
      submenu: [
        {
          name: "brendlər",
          categoryname: [
            {
              id: 1,
              name: "apple",
            },
            {
              id: 2,
              name: "huawei",
            },
            {
              id: 3,
              name: "samsung",
            },
            {
              id: 4,
              name: "realme",
            },
            {
              id: 5,
              name: "xiaomi",
            },
            {
              id: 6,
              name: "apple",
            },
            {
              id: 7,
              name: "infinix",
            },
            {
              id: 8,
              name: "motorola",
            },
            {
              id: 9,
              name: "tecno",
            },
            {
              id: 10,
              name: "tcl",
            },
            {
              id: 11,
              name: "nokia",
            },
            {
              id: 12,
              name: "opeplus",
            },
            {
              id: 13,
              name: "google",
            },
          ],
        },
        {
          name: "apple",
          categoryname: [
            {
              id: 1,
              name: "iPhone 14 Pro Max",
            },
            {
              id: 2,
              name: "iPhone 13 Pro Max",
            },
            {
              id: 3,
              name: "iPhone 11 Pro",
            },
            {
              id: 4,
              name: "Apple watch SE",
            },
          ],
        },
        {
          name: "Qadjetlər",
          categoryname: [
            {
              id: 1,
              name: "apple smart watch",
            },
            {
              id: 2,
              name: "xiaomi smart watch",
            },
            {
              id: 3,
              name: "blackwiev band r5 pink",
            },
            {
              id: 4,
              name: "redmi smart band 2",
            },
          ],
        },
        {
          name: "samsung",
          categoryname: [
            {
              id: 1,
              name: "galaxy a03",
            },
            {
              id: 2,
              name: "galaxy s23",
            },
            {
              id: 3,
              name: "galaxy watch",
            },
            {
              id: 4,
              name: "galaxy a51",
            },
            {
              id: 5,
              name: "galaxy s22",
            },
          ],
        },
        {
          name: "smart saatlar",
          categoryname: [
            {
              id: 1,
              name: "apple watch",
            },
            {
              id: 2,
              name: "samsung watch",
            },
            {
              id: 3,
              name: "huawei",
            },
            {
              id: 4,
              name: "canyon",
            },
            {
              id: 5,
              name: "xiaomi",
            },
            {
              id: 6,
              name: "google",
            },
          ],
        },
        {
          name: "xiaomi",
          categoryname: [
            {
              id: 1,
              name: "xiaomi little series",
            },
            {
              id: 2,
              name: "xiaomi 12 series",
            },
            {
              id: 3,
              name: "redmi note series",
            },
            {
              id: 4,
              name: "redmi series",
            },
            {
              id: 5,
              name: "redmi note 12",
            },
            {
              id: 6,
              name: "redmi series 13",
            },
          ],
        },
        {
          name: "qulaqlıqlar",
          categoryname: [
            {
              id: 1,
              name: "apple airpods 2",
            },
            {
              id: 2,
              name: "xiaomi redmi airdots 2",
            },
            {
              id: 3,
              name: "jbl tune 500",
            },
            {
              id: 4,
              name: "borofone",
            },
            {
              id: 5,
              name: "aiwa",
            },
            {
              id: 6,
              name: "google",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "televizorlar,audio-video",
      icon: "/navbar/monitor.svg",
    },
    {
      id: 3,
      name: "noutbuklar,kompüterlər",
      icon: "/navbar/laptop.svg",
    },
    {
      id: 4,
      name: "böyük məişət texnikası",
      icon: "/navbar/fridge.svg",
    },
    {
      id: 5,
      name: "kiçik məişət texnikası",
      icon: "/navbar/smoothing-iron.svg",
    },
    {
      id: 6,
      name: "iqlim texnikası",
      icon: "/navbar/air-conditioning.svg",
    },
    {
      id: 7,
      name: "gözəllik və sağlamlıq",
      icon: "/navbar/beautiful.svg",
    },
    {
      id: 8,
      name: "foto və video",
      icon: "/navbar/camera.svg",
    },
    {
      id: 9,
      name: "oyun konsolları,oyunlar",
      icon: "/navbar/game.svg",
    },
    {
      id: 10,
      name: "fərdi nəqliyyat",
      icon: "/navbar/bicycle.svg",
    },
    {
      id: 11,
      name: "mebel",
      icon: "/navbar/light.svg",
    },
    {
      id: 12,
      name: "qab-qacaq",
      icon: "/navbar/glass.svg",
    },
    {
      id: 13,
      name: "tava qazan",
      icon: "/navbar/pan.svg",
    },
  ];

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
  };

  const open = () => {
    setMenuWidth("w-full");
    handleAltMenuVisibility();
  };
  return (
    <>
      <main
        className={`fixed top-0 left-0 md:left-[-100%] h-full bg-[--category] z-[200] ${menuWidth} px-3 py-3 transitions `}
        ref={leftMenu}
      >
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <Link href="https://bakuelectronics.az/" target="_blank">
              <img src="/baku-logo.svg" alt="" />
            </Link>
            <button
              onClick={openadnclose}
              type="button"
              className="bg-[#e6e6e6] px-3 py-3 rounded-xl shadow-[0px_10px_19px_0px_rgba(0_0_0_0.03)] z-50"
            >
              {menuWidth === "w-72" ? (
                <FaAngleDoubleRight />
              ) : (
                <FaAngleDoubleLeft />
              )}
            </button>
          </div>
          <div className="flex items-center mt-10 pl-3 ">
            <ul
              className={`flex flex-col gap-2 items-start  ${
                menuWidth === "w-full" ? "border-r-2 pr-3" : "border-0"
              }`}
            >
              {category &&
                category?.map((item, i) => {
                  return (
                    <li
                      key={i}
                      onClick={open}
                      className={`${
                        menuWidth === "w-full" ? "pl-3 " : "pl-4"
                      } relative flex gap-3 items-center capitalize item  transitions hover:font-medium hover:bg-[#fff] px-3 py-3 w-full hover:rounded-2xl cursor-pointer`}
                    >
                      <img
                        src={item?.icon}
                        alt={`Icon for ${item?.name}`}
                        className={`w-6 h-6 `}
                      />
                      <span
                        className={`lg:text-[14px] text-[14px]`}
                      >
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
              className="ml-[288px] opacity-0 fixed left-0 top-0 pt-32 right-0 transition-all  ease-out  bg-[#f5f5f5] w-auto  grid grid-cols-12 gap-3 h-full pr-6"
            >
              <div className="col-span-10 h-full">
                <div className="w-full ">
                  {category?.map((elem) =>
                    elem?.submenu?.map((curr) => (
                      <div
                        key={curr?.name}
                        className=" float-left w-[25%] mb-4"
                      >
                        <h2 className="font-bold capitalize text-[16px] mb-4">
                          {curr?.name}
                        </h2>
                        <ul className="flex flex-col gap-2">
                          {curr?.categoryname?.map((elem, i) => (
                            <li
                              className="capitalize py-1 text-[#333] cursor-pointer hover:font-semibold transitions"
                              key={i}
                            >
                              {elem?.name}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
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

{
  /* <ul
className={`absolute left-[120%] z-[-10] top-0 w-max gap-5  ${
  menuWidth === "w-full" ? "flex" : "hidden"
}`}
>
{item &&
  item?.submenu?.map((elem, i) => (
    <li
      key={i}
      className="flex flex-wrap flex-col w-full  border-2 border-red-600"
    >
      <h3 className="font-bold mb-3">{elem?.name}</h3>
    </li>
  ))}
</ul> */
}
