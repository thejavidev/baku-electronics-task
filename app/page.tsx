import { Producs, Types } from "@/type/Type";
import Image from "next/image";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Home: React.FC = () => {
  const tags: Types = [
    {
      id: 1,
      name: "apple iphone",
    },
    {
      id: 2,
      name: "iphone 15",
    },
    {
      id: 3,
      name: "apple iphone 15 pro",
    },
    {
      id: 4,
      name: "apple iphone 15 pro max",
    },
    {
      id: 4,
      name: "macbook",
    },
  ];
  const searching: Types = [
    {
      id: 1,
      name: "Apple Iphone 11 pro, 128GB, Gold",
    },
    {
      id: 2,
      name: "Apple Iphone 11 pro, 256GB, Gold",
    },
    {
      id: 3,
      name: "Apple Macbook Air 15",
    },
    {
      id: 4,
      name: "Apple Macbook Pro 16 inch, 256 GB",
    },
  ];
  const categories: Types = [
    {
      id: 1,
      name: "Smartfonlar",
    },
    {
      id: 2,
      name: "Qulaqlıqlar",
    },
    {
      id: 3,
      name: "Kompyuterlər",
    },
  ];
  const products: Producs[] = [
    {
      id: 1,
      image: "/iphone.png",
      name: "Iphone 13 Pro Max 128GB Blue",
      categories: "Smartfonlar",
      oldPrice: 3699,
      newPrice: 3499,
    },
    {
      id: 2,
      image: "/iphone.png",
      name: "Iphone 14 Pro Max 256GB red",
      categories: "Smartfonlar",
      oldPrice: 3699,
      newPrice: 3499,
    },
    {
      id: 3,
      image: "/iphone.png",
      name: "Iphone 15 Pro Max 512GB Black",
      categories: "Smartfonlar",
      oldPrice: 3699,
      newPrice: 3499,
    },
  ];
  const cards = [
    {
      id: 1,
      src: "/man.png",
      title: "Təkliflər",
      text: "İkiqat zəmanət ilə münasib al!",
      btnText: "Ətraflı",
    },
    {
      id: 2,
      src: "/man2.png",
      title: "Təkliflər",
      text: "İkiqat zəmanət ilə münasib al!",
      btnText: "Ətraflı",
    },
    {
      id: 3,
      src: "/man3.png",
      title: "Təkliflər",
      text: "İkiqat zəmanət ilə münasib al!",
      btnText: "Ətraflı",
    },
  ];

  return (
    <>
      <div className="bg-[#f5f5f5] rounded-[20.069px] mt-5 px-6 py-4 md:px-3 md:py-2">
        <ul className="flex items-center gap-3 flex-wrap">
          {tags &&
            tags?.map((elem) => (
              <li
                className="bg-[#D9D9D9] text-[#000] text-[15px] lg:text-[13px] sm:text-[11px] capitalize px-3 py-1 rounded-[109.375px]"
                key={elem?.id}
              >
                {elem?.name}
              </li>
            ))}
        </ul>
        <div className="grid grid-cols-12 gap-4 mt-3  ">
          <div className="col-span-6 sm:col-span-12 bg-[#fff] rounded-[20.069px] px-4 py-3">
            <h3 className="capitalize text-lg lg:text-sm font-semibold mb-3">
              Ən çox axtarılan
            </h3>
            <ul className="flex flex-col gap-2">
              {searching &&
                searching?.map((elem) => (
                  <li
                    key={elem?.id}
                    className="flex items-center gap-2 border-b-[1.003px] border-[rgba(0_0_0_0.1)] pb-4"
                  >
                    <CiSearch className="text-[25px] fill-[#dddddd]" />
                    <span className="text-[16px] lg:text-[13px]">{elem?.name}</span>
                  </li>
                ))}
            </ul>
            <h3 className="capitalize text-lg lg:text-sm font-semibold mb-6 mt-8">
              kategoriyalar
            </h3>
            <ul className="flex flex-col gap-2">
              {categories &&
                categories?.map((elem) => (
                  <li
                    key={elem?.id}
                    className="flex items-center gap-2 border-b-[1.003px] border-[rgba(0_0_0_0.1)] pb-4"
                  >
                    <CiSearch className="text-[25px] fill-[#dddddd]" />
                    <span className="text-[16px] lg:text-[13px]">{elem?.name}</span>
                  </li>
                ))}
            </ul>
          </div>
          <div className="col-span-6 sm:col-span-12 flex flex-col gap-2">
            <div className="bg-[#fff] rounded-[20.069px] px-4 py-4">
              <h3 className="capitalize text-lg lg:text-sm font-semibold mb-2">
                Məhsullar
              </h3>
              <ul className="flex flex-col gap-4">
                {products &&
                  products?.map((elem) => (
                    <li
                      key={elem?.id}
                      className="flex items-center gap-2 bg-[#F7F7F7] px-3 py-3 justify-between w-full rounded-[10.034px]"
                    >
                      <div className="flex items-center gap-2">
                        <Image
                          width={70}
                          height={70}
                          src="/iphone.png"
                          alt=""
                          className="mt-[-25px] lg:!w-[50px]"
                        />
                        <div className="flex flex-col gap-1">
                          <span className="text-[13px] lg:text-[11px]">{elem?.name}</span>
                          <span className="text-[14px] lg:text-[12px] font-bold">
                            {elem?.categories}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <span className="line-through text-[13px] lg:text-[12px] text-[#858585]">
                          {elem?.oldPrice} &#x20BC;
                        </span>
                        <span className="text-[14px] lg:text-[13px] font-semibold">
                          {elem?.newPrice} &#x20BC;
                        </span>
                      </div>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="bg-[#fff] rounded-[20.069px] px-4 py-3 flex items-center justify-center">
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
      </div>
      <div className="mt-3 grid grid-cols-12 gap-10 lg:gap-3">
        {cards &&
          cards?.map((elem) => (
            <div
              key={elem?.id}
              className="col-span-4 md:col-span-6 sm:col-span-12 relative px-3 py-0  bg-[#f5f5f5] rounded-[24px] w-full h-[200px] sm:h-auto overflow-hidden"
            >
              <img
                alt=""
                src={elem?.src}
                className="w-[130px] h-full lg:w-[90px]  object-cover absolute right-0"
              />
              <div className="px-3 py-3 flex flex-col gap-2 items-start">
                <h5 className="tetx-[14px]">{elem?.title}</h5>
                <p className="font-semibold text-[19px] columns-2 lg:text-[13px]">{elem?.text}</p>
                <button type="button" className="mt-5 bg-[#EA2427] text-[16px]  text-white px-3 py-1 rounded-[12px]">{elem?.btnText}</button>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Home;
