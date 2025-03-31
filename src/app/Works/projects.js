"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { motion,AnimatePresence } from "motion/react";

function Projects({ pname, img, date, role }) {
   const [hovered,sethovered] = useState(false);
  return (
    <motion.div onMouseEnter={()=>{sethovered(!hovered)}} onMouseLeave={()=>{sethovered(!hovered)}} className="w-screen h-[145px] flex items-center hover:bg-[#323232] text-[#323232] hover:text-[#eaeaea] transition-all ease-in-out duration-300 border-t-2 p-[24px] gap-28 border-black relative border-b-2 z-0 shadow-[0px_8px_2px_rgba(0,0,0,0.25)] hover:shadow-none">
      <span className="text-4xl font-light">{date}</span>
      <span className="text-5xl font-semibold tracking-tighter">{pname}</span>
      <span className="text-2xl font-medium tracking-tight absolute right-6">
        {role}
      </span>
      <AnimatePresence>
        {hovered && (<motion.img src={img} initial={{scale:0}} animate={{scale:1}} exit={{scale:0}} className="absolute h-72 w-auto right-1/4 shadow-2xl"/>)}
        

        
      </AnimatePresence>
    </motion.div>
  );
}

export default Projects;
