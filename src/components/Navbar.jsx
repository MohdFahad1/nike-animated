import React from "react";
import { IoBagOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between pt-3 pb-2 px-14">
      <h1 className="text-2xl italic font-bold cursor-pointer">StrideX</h1>

      <ul className="flex items-center gap-8 px-4 py-1 bg-gray-200 rounded-full">
        <li className="px-4 py-1 bg-white rounded-full cursor-pointer">Home</li>
        <li className="px-4 py-1 cursor-pointer">Shop</li>
        <li className="px-4 py-1 cursor-pointer">Sale</li>
        <li className="px-4 py-1 cursor-pointer">About</li>
        <li className="px-4 py-1 cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center gap-3 text-xl">
        <CgProfile className="cursor-pointer" />
        <IoBagOutline className="cursor-pointer" />
      </div>
    </nav>
  );
};

export default Navbar;
