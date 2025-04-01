"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ link, children }) => {
  const path = usePathname();
  return (
    <Link
      href={link}
      className={path === link ? "text-[#129678] font-bold" : "text-black"}
    >
      {children}
    </Link>
  );
};

function Nav() {
  return (
    <div className="w-auto h-auto flex lg:gap-[280px] overflow-hidden sm:gap-[100px] gap-16 z-1 text-black fixed mx-[50%] -translate-x-1/2 top-14 bg-white/5 rounded-2xl backdrop-blur-3xl p-5 ">
      <NavLinks link="/">Home</NavLinks>
      <NavLinks link="/About">About</NavLinks>
      <NavLinks link="/Works">Creations</NavLinks>
      <NavLinks link="/Hire">Connect</NavLinks>
    </div>
  );
}

export default Nav;
