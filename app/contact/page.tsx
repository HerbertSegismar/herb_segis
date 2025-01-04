"use client";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";


export default function Contact() {

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
        className="flex w-screen h-screen justify-center items-center"
      >
          <h1 className="text-2xl md:text-5xl lg:text-7xl text-yellow-100">
            Welcome to the Contacts Page
          </h1>{" "}
      </motion.div>
    </AnimatePresence>
  );
}
