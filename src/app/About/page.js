"use client";
import React from "react";
import Transition from "../Transition";
import { motion } from "motion/react";

function About() {
  const text = "About me";
  const letters = text.split("");
  const text2 = "Hey, I’m Vishwanath—a web developer who loves building smooth, responsive, and visually engaging websites. I work primarily with Next.js and Framer Motion to create dynamic, animated user experiences that feel alive. With a strong eye for design and a solid foundation in Figma, I enjoy crafting clean, intuitive UIs that don’t just look good—they work seamlessly too. Whether it’s bringing motion to a landing page or designing a sleek interface from scratch, I’m all about blending design and development to make the web a more interactive place."

  return (
    <Transition>
      <div className="h-auto w-screen relative">
        <div className="h-screen w-screen flex justify-center items-center sticky top-0 z-0">
          <motion.div
            initial="initial"
            whileInView="Inview"
            viewport={{ once: true }}
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
                  transition={{ duration: 1, delay: (i + 1) * 0.25 }}
                  className="text-black tracking-widest lg:text-[100px] md:text-[64px] sm:text-[56px] text-[48px]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
        <div className="h-screen w-screen sticky top-0 bg-black">
          hello jelly
        </div>
        <div className="h-screen w-screen sticky top-0 mt-[200vh] bg-gray-300"></div>
        <div className="h-[200vh]" />
      </div>
    </Transition>
  );
}

export default About;
