'use client';
import Image from "next/image";
import React, { useState } from "react";
import Hs from "./Hs";

type Props = {};

export default function Header({}: Props) {

  const [openMenu, setOpenMenu] = useState(false);

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <div className="w-screen h-48 bg-black/30 flex justify-center items-center">
      <div className="flex items-center justify-between px-10 w-full h-full cursor-pointer">
        <Hs className="hover:bg-black/30 p-4 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out" />
        <div className="flex items-center justify-center h-[50px] w-[50px] group cursor-pointer relative transition-all duration-300 ease-in-out">
          <Image
            onClick={() => {
              handleMenu();
            }}
            src="/menu.svg"
            width={50}
            height={50}
            alt="menu"
            className={`${
              openMenu
                ? "hidden"
                : "group-hover:scale-110 transition-all duration-300 ease-in-out"
            }`}
          />
          <Image
            onClick={() => {
              handleMenu();
            }}
            src="/x.svg"
            width={50}
            height={50}
            alt="x"
            className={`${
              openMenu
                ? "group-hover:scale-110 transition-all duration-300 ease-in-out"
                : "hidden"
            }`}
          />
          <div className="absolute hidden w-16 h-16 bg-orange-400 group-hover:flex mix-blend-darken transition-all duration-300 ease-in-out"></div>
        </div>
      </div>
    </div>
  );
}
