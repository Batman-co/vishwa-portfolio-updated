"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
import { useMediaQuery } from "react-responsive";
function Transition({ children }) {
  const isMobile = useMediaQuery({query:"(max-width:768px)"})
  const [loading, setloading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
   const Timeout = setTimeout(
      setloading
    , 1000,false);
    return () => {
      clearTimeout(Timeout);
    };
  }, [pathname]);
  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key={pathname}
          initial={{ y: 0  }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 1.5}}
          className="h-screen w-screen bg-[#FF7080] fixed z-2"
        >{isMobile && (<div className="flex text-2xl justify-center items-center text-center h-screen w-screen"> Please view in a laptop or computer for better experience </div>)}</motion.div>
      )}
      {children}
    </AnimatePresence>
  );
}

export default Transition;
