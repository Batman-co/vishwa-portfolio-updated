"use client";
import React from "react";
import Image from "next/image";
import { useState,useCallback} from "react";
import { motion, AnimatePresence } from "motion/react";

function Projects({ pname, img, date, role }) {
  const [hovered, sethovered] = useState(false);
  const handleMouseEnter = useCallback(() => sethovered(true), []);
  const handleMouseLeave = useCallback(() => sethovered(false), []);
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-screen h-[145px] flex items-center hover:bg-[#323232] mt-10 text-[#323232] hover:text-[#eaeaea] transition-all ease-in-out duration-300 border-t-2 p-[24px] gap-28 border-black relative z-0 border-b-2 ${
        hovered ? "z-10" : "z-0"
      }`}
    >
      <span className="text-4xl font-light">{date}</span>
      <span className="text-5xl font-semibold tracking-tighter">{pname}</span>
      <span className="text-2xl font-medium tracking-tight absolute right-6">
        {role}
      </span>
      <AnimatePresence>
        {hovered && (
          <motion.img
            layoutId="project-img"
            src={img}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute h-72 w-auto right-1/4 shadow-2xl z-20 rounded-xl"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
