import BestSeller from "@/components/Home/BestSeller";
import BottomCards from "@/components/Home/BottomCards";
import Tags from "@/components/Home/Tags";
import React from "react";


const Home: React.FC = () => {
  

  return (
    <>
      <div className="bg-[#f5f5f5] dark:bg-[#191919] rounded-[20.069px] mt-5 px-6 py-4 md:px-3 md:py-2">
        <Tags />
        <BestSeller />
       
      </div>
      <BottomCards />
     
    </>
  );
};
export default Home;
