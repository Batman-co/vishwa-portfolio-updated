"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLinks = ({ link, children }) => {
  const path = usePathname();
  return (
    <Link
      href={link}
      className={path === link ? "text-[#129678]" : "text-black"}
    >
      {children}
    </Link>
  );
};

function Nav() {
  return (
    <div className="w-auto h-auto flex lg:gap-[280px] sm:gap-[100px] gap-16  text-black fixed mx-[50%] -translate-x-1/2 top-14 ">
      <NavLinks link="/">Home</NavLinks>
      <NavLinks link="/About">About</NavLinks>
      <NavLinks link="/Works">Works</NavLinks>
      <NavLinks link="/Hire">Hire</NavLinks>
    </div>
  );
}

export default Nav;
