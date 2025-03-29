"use client";
import React from "react";
import { useState, useEffect } from "react";

function useMouse() {
  const [mouse, setmouse] = useState({ x:0, y:0 });
  const updateMouse = (e) => {
    setmouse({ x: e.clientX, y: e.clientY });
  };
  useEffect(() => {
    window.addEventListener("mousemove", updateMouse);
    return () => {
      window.removeEventListener("mousemove", updateMouse);
    };
  });
  return mouse;
}

export default useMouse;
