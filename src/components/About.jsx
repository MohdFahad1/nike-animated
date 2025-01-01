"use client";

import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const About = () => {
  return (
    <div
      className="relative flex items-start gap-32 px-24 py-20 bg-gray-200"
      id="about"
    >
      {/* Gray Box */}
      <div className="bg-gray-300 rounded-[35px] h-[420px] w-[500px] z-10 relative"></div>

      {/* Orange Boxes */}
      <div className="bg-orange-500 h-[150px] w-[150px] rounded-[35px] absolute top-[7.5%] left-[25%] z-0"></div>
      <div className="bg-orange-500 h-[150px] w-[150px] rounded-[35px] absolute bottom-[7.5%] left-[4%] z-0"></div>

      <div className="w-[70%] ml-10 ">
        <h1 className="text-6xl font-bold w-[]">
          Discover the ultimate comfort &amp; style
        </h1>

        <p className="my-6 text-lg font-medium text-gray-700 capitalize ">
          unmatched durability, sleek design and engineered for high
          performance. strideX shoes are built to empower you. Whether it&apos;s
          for casual wear or intense training sessions.
          <br />
          unmatched durability, sleek design and engineered for high
          performance. strideX shoes are built to empower you. Whether it&apos;s
          for casual wear or intense training sessions.
        </p>

        <div className="flex items-center gap-2">
          <button className="px-5 font-semibold border-2 border-black rounded-full h-9">
            Shop Now
          </button>
          <button className="flex items-center justify-center text-white -rotate-[40deg] bg-black rounded-full w-9 h-9">
            <IoIosArrowRoundForward size={32} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
