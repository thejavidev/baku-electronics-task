import React from "react";
import { CiSearch } from "react-icons/ci";

const Search: React.FC = () => {
  return (
    <>
      <div className="relative flex items-center  gap-4  bg-[#f5f5f5] dark:bg-[#191919] px-4 py-3 rounded-xl xl:px-2 xl:py-2">
        <CiSearch className="text-[25px] dark:text-white" />
        <input type="text" placeholder="axtar..." className="outline-none bg-transparent  dark:text-white w-full capitalize placeholder:opacity-50 placeholder:text-[#333] dark:placeholder:text-white text-[16px]" />
      </div>
    </>
  );
};

export default Search;
