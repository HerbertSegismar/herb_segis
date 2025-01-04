'use client';
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from 'next/navigation';
import { TextGenerateEffect } from "./_components/TextFX";

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
        className="flex flex-col w-screen h-screen items-center "
      >
        <TextGenerateEffect
          words="Welcome to my Portfolio Page"
          className="text-lg md md:text-7xl p-5 uppercase"
        />
        <TextGenerateEffect
          words="WHERE DREAMS BECOME REALITY AND IDEAS COME TO LIFE.
            IMMERSE YOURSELF IN A WORLD OF CREATIVITY AND INNOVATION.
            LET'S CREATE SOMETHING AMAZING TOGETHER.
            
            IT HAS BEEN KNOWN THAT THE GREATEST IDEAS COME FROM THE MOST UNEXPECTED PLACES.
            LET'S EXPLORE THE POSSIBILITIES TOGETHER.
            IN A WORLD OF LIMITLESS IDEAS, THE ONLY LIMIT IS YOUR IMAGINATION.
            WHERE WILL YOUR IMAGINATION TAKE YOU?
            IN THE REALM OF THE UNKNOWN, THE POSSIBILITIES ARE ENDLESS."
          className="text-sm md:text-5xl p-24"
        />
      </motion.div>
    </AnimatePresence>
  );
}
