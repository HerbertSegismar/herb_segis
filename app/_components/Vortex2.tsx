import React from "react";
import { Vortex } from "../_components/Vortex";

export const Vortex2 = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-screen mx-auto rounded-md h-screen overflow-hidden -z-80">
      <Vortex
        rangeY={400}
        particleCount={30}
        baseHue={80}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        {children}
      </Vortex>
    </div>
  );
};
