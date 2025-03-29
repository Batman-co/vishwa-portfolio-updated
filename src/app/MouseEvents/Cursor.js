import React from "react";
import useMouse from "./useMouse";
import {motion} from "motion/react"

function Cursor({ children }) {
    const {x,y} = useMouse();
  return (
    <motion.div
      animate={{ x: x, y: y+40 }}
      transition={{ duration: 0.65, type: "tween", ease:"easeOut"}}
      className="w-fit p-2 absolute h-fit z-1 bg-[#FF7080] text-white rounded-lg"
    >
      {children}
    </motion.div>
  );
}

export default Cursor;
