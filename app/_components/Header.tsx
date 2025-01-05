"use client";
import Image from "next/image";
import React, { useState } from "react";
import Hs from "./Hs";
import { TransLink } from "../_components/TransLink";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const divVariants = {
    initial: {
      opacity: 0,
      y: -100,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div>
      <div className="w-screen h-24 md:h-48 flex justify-center items-center bg-[#1A1A1D] z-50">
        <div className="flex items-center justify-between  px-1 md:px-10 w-full h-full cursor-pointer">
          <TransLink href="/">
            <Hs
              onClick={() => {
                handleMenu();
              }}
              className="hover:bg-black/30 p-4 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out w-64 md:w-96"
            />
          </TransLink>
          <div className="flex items-center gap-10">
            <div className="flex items-center justify-center h-[50px] w-[50px] right-8 group cursor-pointer relative transition-all duration-300 ease-in-out">
              <Image
                priority={true}
                src="/menu.svg"
                width={25}
                height={25}
                alt="menu"
                className={`${
                  openMenu
                    ? "hidden"
                    : "group-hover:scale-110 transition-all duration-300 ease-in-out"
                }`}
              />
              <Image
                src="/x.svg"
                width={25}
                height={25}
                alt="x"
                className={`${
                  openMenu
                    ? "group-hover:scale-110 transition-all duration-300 ease-in-out"
                    : "hidden"
                }`}
              />
              <button
                onClick={() => {
                  handleMenu();
                }}
                className="z-50 absolute hidden w-16 h-16 rounded-md bg-[#FF9D23] group-hover:flex mix-blend-darken transition-all duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center">
        <AnimatePresence>
          {openMenu && (
            <motion.div
              variants={divVariants}
              initial="initial"
              animate="final"
              exit="exit"
              className="absolute top-28 bg-black/50 border border-solid-2px border-black/20 rounded-xl ~w-28/44 ~h-64/96 ~mt-2/10 right-4 text-yellow-100 flex flex-col"
            >
              <div className="bg-[#FF9D23] ~w-2/6 ~h-2/6 rounded-full ~mt-2/4 ~ml-2/4" />
              <div className="flex flex-col items-center justify-center w-full h-full gap-4">
                {pages.map((page) => (
                  <TransLink
                    key={page.name}
                    href={page.href}
                    className={`~text-xl/3xl font-bold hover:text-[#FF9D23] transition-all duration-300 ease-in-out ${
                      pathname === page.href
                        ? "text-[#FF9D23]"
                        : "text-yellow-100"
                    }`}
                  >
                    {page.name}
                  </TransLink>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
