"use client";
import React from "react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { usePathname } from "next/navigation";
function Transition({ children }) {
  const [loading, setloading] = useState(true);
  const pathname = usePathname();
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 500);
    return () => {
      clearTimeout();
    };
  }, [pathname]);
  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key={pathname}
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          exit={{ y: "100%" }}
          transition={{ duration: 1 }}
          className="h-screen w-screen bg-[#FF7080] fixed"
        />
      )}
      {children}
    </AnimatePresence>
  );
}

export default Transition;
