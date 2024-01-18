"use client";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import NightsStayIcon from "@mui/icons-material/NightsStay";

import React, { useState } from "react";

import useColorMode from "@/hooks/useColorMode";
import SidebarMenu from "./SidebarMenu";

const Header = () => {
  const [colorMode, setColorMode] = useColorMode();



  const handleCheckboxChange = () => {
    setColorMode(colorMode === "light" ? "dark" : "light"); // Toggle the checkbox state     
  };

 
  return (
    <div className=" w-full   bg-white  dark:bg-black   dark:text-white  z-[999]  ">
      <div className=" container  m-auto flex min-h-[100px] w-full items-center justify-between  xl:px-[50px] relative ">
        <div  className=" flex items-center gap-[100px]   "  >
     <SidebarMenu/> 
       

          <h1 className=" dark:text-sky-400 font-roboto text-3xl leading-[100px] font-black skytextShadow -tracking-tighter cursor-pointer ml-[150px]  ">
            {" "}
            SARVESH <span className="text-slate-400">SHARAM</span>{" "}
          </h1>
        </div>
        <div className="  flex items-center   justify-end fixed right-[50px] bottom-[100px] z-[999]  ">
          <span>
            <input
              type="checkbox"
              id="switch-button"
              onChange={handleCheckboxChange}
            />
            <label className="w-full " htmlFor="switch-button">
              <LightModeIcon className="sun" />
              <NightsStayIcon
                className="moon font "
                style={{ color: "black" }}
              />
            </label>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
