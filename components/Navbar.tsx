import React from "react";
import DarkMode from "./DarkMode";
import Search from "./Search";
import Menu from "./Menu";
import Icons from "./Icons";

const Navbar: React.FC = () => {
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
        <Icons />
      </div>
    </header>
  );
};

export default Navbar;
