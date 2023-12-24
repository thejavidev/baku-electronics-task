"use client"
import React, { useState } from "react";

import Search from "./Search";
import Menu from "./Menu";
import Icons from "./Icons";
import MobileSidebar from "./MobileSidebar";

import DarkMode from "./DarkMode";


const Navbar: React.FC = () => {
  const [show,setShow] =useState<any>(false);
  const openMenu = () => {
    setShow(!show)
    const bodyHtml = document.querySelector('html');
    bodyHtml?.classList?.toggle('hideScroll')
  };

  

  return (
    <header className=" gap-4 2xl:gap-2 flex items-center flex-wrap justify-between">
      <div className="sm:order-[-2]  flex items-center gap-4">
        <img src="/baku-logo.svg" className="hidden sm:block w-[40px] md:w-[30px]" alt="" />
        <DarkMode />
      </div>
      <div className="sm:w-full sm:pt-2">
        <Search />
      </div>
      <div>
        <Menu />
      </div>
      <div className="sm:order-[-1] flex items-center">
        <Icons shows={openMenu} />
        <MobileSidebar show={show} shows={openMenu} />
      </div>
    </header>
  );
};

export default Navbar;
