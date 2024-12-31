import Image from "next/image";
import React from "react";

const Slider = () => {
  return (
    <div className="py-10 px-14">
      <div className="flex flex-col items-center justify-center text-center capitalize">
        <h1 className="w-1/2 text-5xl font-semibold leading-[52px]">
          Setup up your game with strideX performance shoes
        </h1>
        <p className="w-1/2 mt-5 font-medium text-gray-500 ">
          experience the difference with shoes that offer unparalleled
          cushioning,
          <br /> support, and breathability. elevate your style with every
          stride.
        </p>
      </div>
      <div className="flex items-center justify-between mt-10">
        <div className="h-[400px] relative w-[260px] rounded-[50px] overflow-hidden">
          <Image src={"/men1.jpeg"} alt="men" fill objectFit="cover" />
        </div>
        <div className="h-[400px] relative w-[260px] rounded-[50px] overflow-hidden">
          <Image src={"/men1.jpeg"} alt="men" fill objectFit="cover" />
        </div>
        <div className="h-[400px] relative w-[260px] rounded-[50px] overflow-hidden">
          <Image src={"/men1.jpeg"} alt="men" fill objectFit="cover" />
        </div>
        <div className="h-[400px] relative w-[260px] rounded-[50px] overflow-hidden">
          <Image src={"/men1.jpeg"} alt="men" fill objectFit="cover" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
