import React from "react";
import { CiSearch } from "react-icons/ci";

const Search: React.FC = () => {
  return (
    <>
      <div className="relative flex items-center  gap-4  bg-[--category] px-4 py-3 rounded-xl xl:px-2 xl:py-2">
        <CiSearch className="text-[25px]" />
        <input type="text" placeholder="axtar..." className="outline-none bg-transparent w-full capitalize placeholder:opacity-50 placeholder:text-[#333] text-[16px]" />
      </div>
    </>
  );
};

export default Search;
