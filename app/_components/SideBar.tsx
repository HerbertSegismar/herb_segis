import React from 'react'

type SideBarProps = {
  handleBgChange: (bgType: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ handleBgChange }) => {

  return (
    <div className="w-14 h-[280px] md:w-20 md:h-[320px] left-4 md:left-10 top-[250px] md:top-[450px] z-50 absolute">
      <div className="flex flex-col items-center justify-center w-full h-full bg-black/50 border border-solid-2px border-black/20 gap-4 rounded-full">
        <button
          onClick={() => handleBgChange("lines")}
          className="bg-[#FF9D23] hover:bg-[#EB5B00] w-12 h-12 md:w-14 md:h-14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          LINES
        </button>
        <button
          onClick={() => handleBgChange("beams")}
          className="bg-blue-500 hover:bg-[#0A5EB0] w-12 h-12 md:w-14 md:h-14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          BEAMS
        </button>
        <button
          onClick={() => handleBgChange("gradient")}
          className="bg-emerald-500 hover:bg-[#0A97B0] w-12 h-12 md:w-14 md:h-14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          FLOATS
        </button>
        <button
          onClick={() => handleBgChange("webs")}
          className="bg-purple-500 hover:bg-[#6A42C2] w-12 h-12 md:w-14 md:h-14 rounded-full text-yellow-100 text-[10px] md:text-xs flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          WEBS
        </button>
      </div>
    </div>
  );

};



export default SideBar;