"use client";
import React from "react";
import Transition from "../Transition";
import { motion, useScroll, useTransform } from "motion/react";
function Works() {
  return (
    <Transition>
      <div className="h-[300vh] w-screen relative">
        <div className="h-screen w-screen flex justify-center items-center">
          <motion.div
            initial="initial"
            whileInView="Inview"
            className="h-fit w-fit overflow-hidden"
          >
            <motion.div
              variants={{ initial: { y: "100%" }, Inview: { y: 0 } }}
              transition={{ duration: 1, delay: 1 }}
              className="text-black lg:text-[100px] md:text-[64px] sm:text-[56px] text-[48px] z-0 relative lg:tracking-[50px] md:tracking-[32px] sm:tracking-[28px]"
            >
              creat<span className="lg:hidden">i</span>
              <span className="lg:inline  hidden"> </span>ons
              <div className="absolute left-[57%] bottom-7 hidden lg:block">
                <svg
                  width="12"
                  height="108"
                  viewBox="0 0 12 108"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 1 }}
                    d="M10.0042 13.3672L2.01634 13.1852M10.0042 13.3672L8.16511 8.68358M10.0042 13.3672L9.90203 93.0593M2.01634 13.1852L4.17119 8.5926M2.01634 13.1852C1.87019 34.5376 1.65602 73.6669 1.7135 93.1904M8.16511 8.68358L6.32603 3.99998L4.17119 8.5926M8.16511 8.68358L4.17119 8.5926M9.90203 93.0593L9.88849 103.615C8.69705 105.157 5.41797 107.426 1.83315 104.159C1.76699 102.588 1.72959 98.6578 1.7135 93.1904M9.90203 93.0593L1.7135 93.1904"
                    stroke="#323232"
                    strokeWidth="3"
                  />
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Transition>
  );
}

export default Works;
