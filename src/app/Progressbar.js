"use client"
import { motion,useScroll,useSpring } from 'motion/react'
import React from 'react'

function Progressbar() {
    const {scrollYProgress} = useScroll()
    const scaleX = useSpring(scrollYProgress);
  return (
    <motion.div style={{scaleX}} className='h-3 w-screen bg-[#323232] fixed top-0 origin-left z-10'/>
  )
}

export default Progressbar