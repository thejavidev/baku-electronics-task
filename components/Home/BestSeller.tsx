import { categories, products, searching } from '@/data/Data'
import Image from 'next/image'
import React from 'react'
import { CiSearch } from 'react-icons/ci'

const BestSeller:React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 mt-3  ">
          <div className="col-span-6 sm:col-span-12 bg-[#fff] dark:bg-[#2a2a2a] rounded-[20.069px] px-4 py-3">
            <h3 className="capitalize text-lg lg:text-sm font-semibold mb-3 text-black dark:text-white">
              Ən çox axtarılan
            </h3>
            <ul className="flex flex-col gap-2">
              {searching &&
                searching?.map((elem,i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 border-b-[1.003px] border-[#0000002a] dark:border-[#ffffff2a] pb-4"
                  >
                    <CiSearch className="text-[25px] fill-[#dddddd]" />
                    <span className="text-[16px] lg:text-[13px] text-black dark:text-white">{elem?.name}</span>
                  </li>
                ))}
            </ul>
            <h3 className="capitalize text-lg lg:text-sm font-semibold mb-6 mt-8 text-black dark:text-white">
              kategoriyalar
            </h3>
            <ul className="flex flex-col gap-2">
              {categories &&
                categories?.map((elem) => (
                  <li
                    key={elem?.id}
                    className="flex items-center gap-2 border-b-[1.003px] border-[#0000002a] dark:border-[#ffffff2a] pb-4"
                  >
                    <CiSearch className="text-[25px] fill-[#dddddd]" />
                    <span className="text-[16px] lg:text-[13px] text-black dark:text-white">{elem?.name}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-12 flex flex-col gap-2">
            <div className="bg-[#fff] dark:bg-[#2a2a2a] rounded-[20.069px] px-4 py-4">
              <h3 className="capitalize text-lg lg:text-sm font-semibold mb-2 text-black dark:text-white">
                Məhsullar
              </h3>
              <ul className="flex flex-col gap-4">
                {products &&
                  products?.map((elem,i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2  md:gap-1 bg-[#F7F7F7] dark:bg-[#191919] px-3 py-3 justify-between w-full rounded-[10.034px]"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          width={55}
                          height={55}
                          src="/iphone.png"
                          alt=""
                          className="mt-[-25px] lg:!w-[50px]"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-[13px] lg:text-[11px] text-black dark:text-white">{elem?.name}</span>
                          <span className="text-[14px] lg:text-[12px] font-bold text-black dark:text-white">
                            {elem?.categories}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2 md:gap-1">
                        <span className="line-through text-[13px] xl:text-[12px] md:text-[10px]  text-[#858585] dark:text-white">
                          {elem?.oldPrice} &#x20BC;
                        </span>
                        <span className="text-[14px] lg:text-[13px] md:text-[10px] font-semibold dark:text-white">
                          {elem?.newPrice} &#x20BC;
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="bg-[#fff] dark:bg-[#2a2a2a] rounded-[20.069px] px-4 py-3 flex items-center justify-center">
              <Image
                src="/banner.png"
                width={400}
                height={100}
                alt=""
                className="!w-[400px] object-cover"
              />
            </div>
          </div>
        </div>
    </>
  )
}

export default BestSeller
