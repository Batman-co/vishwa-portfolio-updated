"use client";
import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import dynamic from "next/dynamic";
import Data from "./Scene.json";
import Transition from "../Transition";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
function Hire() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const card1 = useTransform(scrollYProgress, [0, 0.2], [90, 0]);
  const card2 = useTransform(scrollYProgress, [0, 0.11], [90, 0]);
  const card3 = useTransform(scrollYProgress, [0.2, 0.35], [90, 0]);
  const card4 = useTransform(scrollYProgress, [0.35, 0.6], [90, 0]);
  const card5 = useTransform(scrollYProgress, [0.6, 0.78], [90, 0]);
  return (
    <Transition>
      <div className="h-[700vh] w-screen relative">
        <div ref={ref} className="h-[600vh]">
          <div className="h-screen w-screen sticky top-0 flex justify-center z-1 bg-[#FFEBCA] items-center text-2xl md:text-7xl sm:text-center text-black">
            What am I looking for?
          </div>
          <motion.div
            style={{ rotateY: card1 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 top-[100vh] md:left-1/2 md:top-[120vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-2xl font-semibold">Fellow Developers</span>
            <div className="text-sm md:text-lg">
              Always down to pair up,
              <br /> share tips, or just rant about bugs.
              <br /> If you&#39;re building something cool
              <br /> or weird, let&#39;s connect.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card2 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 top-[220vh] md:left-1/12 md:top-[80vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              {" "}
              Creative Collaborators
            </span>
            <div className="text-sm md:text-lg">
              Designers, storytellers,
              <br /> digital dreamers <br /> I&#39;d love to team up <br /> and
              bring fresh ideas to life.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card3 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 top-[300vh] md:left-[75%] md:top-[220vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Mentors & Guides
            </span>
            <div className="text-sm md:text-lg">
              If you&#39;ve walked the
              <br /> path before and love <br /> helping others grow <br />— I&#39;m
              all ears and
              <br /> eager to learn.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card3 }}
            className="w-fit h-64 lg:h-72 p-5 justify-start absolute left-1/3 top-[400vh] md:left-1/5 md:top-[200vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Opportunities & Roles
            </span>
            <div className="text-sm md:text-lg">
              Actively exploring new
              <br /> roles and meaningful work.
              <br /> If you&#39;re hiring or
              <br /> know someone who is,
              <br /> I&#39;d love to chat.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card4 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3  md:left-1/2 top-[480vh] md:top-[300vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Friendships in Tech
            </span>
            <div className="text-sm md:text-lg">
              Whether it&#39;s code,
              <br /> games, memes, or random <br /> late-night convos <br />—
              I&#39;m here for genuine <br /> connection.
            </div>
          </motion.div>
          <motion.div
            style={{ rotateY: card5 }}
            className="w-fit h-72 p-5 justify-start absolute left-1/3 md:left-1/8 md:top-[400vh] top-[540vh] z-2 items-start bg-[#CCD6B8]/15 backdrop-blur-xl flex flex-col text-black gap-10"
          >
            <span className="text-lg md:text-2xl font-semibold">
              Convos & Coffee Chats
            </span>
            <div className="text-sm md:text-lg">
              I love swapping stories,
              <br /> ideas, and experiences.
              <br /> Hit me up if you&#39;re down for a <br />
              casual convo or virtual coffee.
            </div>
          </motion.div>
        </div>
        <div>
          <div className="h-screen mt-[-100vh]" />
          <div className="h-screen w-screen bg-[#edfed1]  sticky bottom-0  flex  justify-center items-center rounded-t-[56px]">
            <div className="lg:text-7xl lg:tracking-widest md:text-6xl md:tracking-wider sm:text-5xl text-3xl sm:text-center sm:tracking-normal  font-semibold text-black">
              Let&#39;s connect
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-fit h-fit absolute top-0"
            >
              <Lottie
                animationData={Data}
                speed={3}
                style={{
                  height: "500px",
                  width: "500px",
                }}
              />
            </motion.div>

            <div className="w-fit h-hit justify-center items-center flex gap-20 left-1/2 -translate-x-1/2 p-5 absolute bottom-1/4">
              <div className=" h-fit w-fit ">
                <a href="https://www.instagram.com/vizrandomnz/">
                <svg
                  width="54"
                  height="54"
                  viewBox="0 0 54 54"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-bounce"
                >
                  <motion.rect
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1.1 }}
                    transition={{ duration: 3, delay: 0.7 }}
                    x="2"
                    y="2"
                    width="50"
                    height="50"
                    rx="10"
                    stroke="#FF7080"
                    strokeWidth="5"
                  />
                  <motion.circle
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1.1 }}
                    transition={{ duration: 3, delay: 0.7 }}
                    cx="26.5"
                    cy="27.5"
                    r="12"
                    stroke="#FF7080"
                    strokeWidth="5"
                  />
                  <circle cx="43" cy="12" r="3" fill="#FF7080" />
                </svg>
                </a>
              </div>
              <div className="h-fit w-fit">
                <a href="https://www.linkedin.com/in/vishwanath-k-a42044225/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  width="70"
                  height="50"
                  className="animate-bounce"
                >
                  <g
                    fill="none"
                    stroke="#0077B5"
                    strokeWidth="24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <motion.rect
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.25}}
                      x="32"
                      y="32"
                      width="484"
                      height="448"
                      rx="48"
                      strokeWidth="45"
                      ry="48"
                    />

                    <rect x="148" y="216" width="48" height="152" rx="10" />

                    <circle cx="172" cy="152" r="28" />

                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      transition={{ duration: 0.5}}
                      d="M240 216h48v24c10-18 36-32 66-26 26 5 42 26 42 58v96h-48v-84c0-18-8-28-22-28s-30 14-30 36v76h-56V216z"
                    />
                  </g>
                </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}

export default Hire;
