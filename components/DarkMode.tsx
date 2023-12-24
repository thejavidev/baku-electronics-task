import { darkMode } from "@/data/Data";
import React, { useEffect, useState } from "react";

const DarkMode = () => {
  const [theme,setTheme] =useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") :"system"
  );
  const elemet =document.documentElement;
  const darkQuery =window.matchMedia('(prefers-color-scheme:dark)')
    
  
  function onWindowMatch() {
    if(localStorage.theme ==='dark' || (!("theme" in localStorage) && darkQuery.matches)){
      elemet.classList.add("dark")
    }else{
      elemet.classList.remove("dark")
    }
  }
  onWindowMatch()
  useEffect(()=>{
    switch (theme) {
      case 'dark':
        elemet.classList.add('dark')
        localStorage.setItem('theme','dark')
        break;
      case 'light' :
        elemet.classList.remove('dark')
        localStorage.setItem('theme','light')
        break;
      default:
        localStorage.removeItem('theme')
        onWindowMatch()
        break;
    }
  },[theme])
  darkQuery.addEventListener("change",(e)=>{
    if(!("theme" in localStorage )){
      if(e.matches){
        elemet.classList.add("dark")
      }else{
        elemet.classList.remove("dark")
      }
    }
  })
  return (
    <>
     <div className="flex items-center gap-3 lg:gap-1 bg-[#f5f5f5] dark:bg-[#191919] px-4 py-1 xl:px-3 lg:lx-2 md:px-1 rounded-lg">
          {
            darkMode && darkMode?.map((item,i)=>(
              <button key={i} onClick={()=>setTheme(item?.text)} className={` px-2 py-2 text-[25px] xl:text-[17px] dark:text-white ${theme === item?.text && 'bg-[#2a2a2a] rounded-lg text-[#f5f5f5] ' }`}>
                {item?.icon}
              </button>
            ))
          }
        </div>
    </>
  );
};

export default DarkMode;
