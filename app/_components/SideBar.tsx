import React, { useState } from "react";
import Arrow from "./Arrow";
import { motion } from "motion/react";
import Image from "next/image";

type SideBarProps = {
  handleBgChange: (bgType: string) => void;
};

const SideBar: React.FC<SideBarProps> = ({ handleBgChange }) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const handleShowSideBar = () => {
    setShowSideBar(!showSideBar);
  };

  return (
    <div className="w-20 h-auto flex flex-col items-center">
      <motion.div
        animate={{ y: showSideBar ? "200vh" : 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="~w-14/20 ~h-80/96 ~left-4/10 ~top-60/96 z-50 fixed"
      >
        <div className="flex flex-col items-center justify-center w-full h-full bg-black/50 border border-solid-2px border-black/20 gap-4 rounded-full">
          <button
            onClick={() => handleBgChange("lines")}
            className="bg-[#FF9D23] hover:bg-[#EB5B00] ~w-12/14 ~h-12/14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            LINES
          </button>
          <button
            onClick={() => handleBgChange("beams")}
            className="bg-blue-500 hover:bg-[#0A5EB0] ~w-12/14 ~h-12/14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            BEAMS
          </button>
          <button
            onClick={() => handleBgChange("gradient")}
            className="bg-emerald-500 hover:bg-[#0A97B0] ~w-12/14 ~h-12/14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            FLOATS
          </button>
          <button
            onClick={() => handleBgChange("webs")}
            className="bg-purple-500 hover:bg-[#6A42C2] ~w-12/14 ~h-12/14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            WEBS
          </button>
          <button
            onClick={() => handleBgChange("vortex")}
            className="bg-red-500 hover:bg-[#D93827] ~w-12/14 ~h-12/14 rounded-full text-yellow-100 text-[10px] md:text-[11px] flex items-center justify-center hover:scale-110 transition-all duration-300"
          >
            VORTEX
          </button>
        </div>
      </motion.div>
      <div>
        <button
          onClick={handleShowSideBar}
          className={`fixed bottom-20 ~left-4/14 bg-black/20 hover:bg-[#0A5EB0] ~w-12/14 ~h-12/14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300 ${
            showSideBar ? "rotate-180" : ""
          }`}
        >
          <Image src="/arrow.svg" width={10} height={10} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default SideBar;
