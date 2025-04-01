"use client";
import React from "react";
import Transition from "../Transition";
import { motion } from "motion/react";

function About() {
  const text = "About me";
  const letters = text.split("");
  return (
    <Transition>
      <div className="h-[400vh] w-screen relative">
        <div className="h-screen w-screen flex justify-center items-center">
          <motion.div
            initial="initial"
            whileInView="Inview"
            viewport={{once:true}}
            className="h-fit w-fit overflow-hidden flex items-center"
          >
            {letters.map((letter, i) => {
              return (
                <motion.div
                  key={i}
                  variants={{
                    initial: { y: 100 },
                    Inview: { y: 0 },
                  }}
                  transition={{ duration: 1, delay: (i+1)*0.25}}
                  
                  className="text-black tracking-widest lg:text-[100px] md:text-[64px] sm:text-[56px] text-[48px]"
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </Transition>
  );
}

export default About;
