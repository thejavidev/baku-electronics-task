import { cards } from "@/data/Data";
import React from "react";

const BottomCards: React.FC = () => {
  return (
    <>
      <div className="mt-3 grid grid-cols-12 gap-10 lg:gap-3">
        {cards &&
          cards?.map((elem, i) => (
            <div
              key={i}
              className="col-span-4 md:col-span-6 sm:col-span-12 relative px-3 py-0  bg-[#f5f5f5] dark:bg-[#191919] rounded-[24px] w-full h-[200px] sm:h-auto overflow-hidden"
            >
              <img
                alt=""
                src={elem?.src}
                className="w-[130px] h-full lg:w-[90px]  object-cover absolute right-0"
              />
              <div className="px-3 py-3 flex flex-col gap-2 items-start">
                <h5 className="tetx-[14px] text-black dark:text-white">
                  {elem?.title}
                </h5>
                <p className="font-semibold text-[19px] columns-2 lg:text-[11px] text-black dark:text-white">
                  {elem?.text}
                </p>
                <button
                  type="button"
                  className="mt-5 bg-[#EA2427] text-[16px] text-white dark:text-white px-3 py-1 rounded-[12px]"
                >
                  {elem?.btnText}
                </button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default BottomCards;
