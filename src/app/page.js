"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";
import Transition from "./Transition";
import Cursor from "./Cursor";



export default function Home() {
  
  return (
    <Transition>
      <div className="h-[400vh] w-screen overflow-hidden">
        <Cursor>Scroll to see more</Cursor>
        <div className="flex flex-col justify-center mt-56 items-center">
          <motion.div className="overflow-hidden w-auto h-fit">
            <motion.div
              initial={{ y: 100 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              className="text-black lg:text-[100px] md:text-[64px] sm:text-[56px] text-[48px]  lg:tracking-[50px] md:tracking-[32px] sm:tracking-[28px]"
            >
              Vishwanath
            </motion.div>
          </motion.div>

          <div className="lg:ml-[750px] ">
            <div className="w-fit h-fit">
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="text-[#1C1C1C] font-light text-[30px]"
              >
                Web Developer
              </motion.div>
            </div>

            <div className="w-fit h-fit">
              <motion.div
                initial={{ y: 100 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                className="text-[#1C1C1C] font-light text-[30px]"
              >
                UI/UX designer
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
