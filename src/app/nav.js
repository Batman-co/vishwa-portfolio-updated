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
    <div className="w-auto h-auto flex gap-2 text-black">
      <NavLinks link="/">Home</NavLinks>
      <NavLinks link="/About">About</NavLinks>
    </div>
  );
}

export default Nav;
