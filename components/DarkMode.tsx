import { darkMode } from "@/data/Data";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  return (
    <>
      <div className="flex items-center gap-3 lg:gap-1 bg-[#f5f5f5] dark:bg-[#191919] px-4 py-1 xl:px-3 lg:lx-2 md:px-1 rounded-lg">
        {darkMode &&
          darkMode?.map((item, i) => (
            <button
              key={i}
              className={` px-2 py-2 md:px-1 md:py-1 text-[25px] xl:text-[17px] md:text-[15px] dark:text-white `}
            >
              {item?.icon}
            </button>
          ))}
      </div>
    </>
  );
};

export default DarkMode;
