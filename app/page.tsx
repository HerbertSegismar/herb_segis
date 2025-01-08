"use client";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { TextGenerateEffect } from "./_components/TextFX";
import Image from "next/image";

export default function Home() {
  const pathname = usePathname();

  const divVariants = {
    initial: {
      opacity: 0,
      y: "-100vh",
    },
    final: {
      opacity: 1,
      y: 0,
    },
    exit: {
      duration: 1,
      opacity: 0,
      y: "200vh",
    },
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        variants={divVariants}
        initial="initial"
        animate="final"
        transition={divVariants.transition}
        exit="exit"
      >
        <div className="~gap-2/6 grid grid-cols-4">
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/lion_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/lion_02.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/fox_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/tiger_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/tiger_02.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/lion_03.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/lovers_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/plant_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/lion_04.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/mountain_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/mountain_02.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/mountain_03.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/car_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/car_02.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/car_03.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/car_04.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/car_05.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/jupiter.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/bird_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/lovers_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
          <div className="col-span-1">
            <Image
              width={300}
              height={100}
              alt=""
              src="/plant_01.jpg"
              className="~rounded-md/xl"
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
