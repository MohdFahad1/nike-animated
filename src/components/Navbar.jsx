"use client";

import React, { useEffect, useState } from "react";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { navbarAnimation } from "@/utils/animation";
import Link from "next/link";

const links = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Shop",
    href: "#category",
  },
  {
    name: "Sale",
    href: "#offer",
  },
  {
    name: "Showcase",
    href: "#slider",
  },
];

const Navbar = () => {
  const [selected, setSelected] = useState("Home");

  useEffect(() => {
    navbarAnimation();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setSelected("Home");
  };

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between pt-3 pb-2 opacity-0 px-14 navbar">
      <h1
        className="text-2xl italic font-bold cursor-pointer"
        onClick={scrollToTop}
      >
        StrideX
      </h1>

      <ul className="flex items-center gap-8 px-4 py-1 bg-gray-200 rounded-full">
        {links.map((link, index) => (
          <li
            className={`px-4 py-1 cursor-pointer rounded-full ${
              selected === link.name && "bg-white"
            }`}
            key={index}
            onClick={() => setSelected(link.name)}
          >
            <Link href={link.href}>{link.name}</Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 text-xl">
        <CgProfile className="cursor-pointer" />
        <IoBagOutline className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
