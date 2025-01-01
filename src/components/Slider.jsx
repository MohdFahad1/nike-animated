"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { textAnimation } from "@/utils/animation";

const images = [
  "/image1.jpg",
  "/image4.jpg",
  "/image2.webp",
  "/image5.jpg",
  "/image3.jpg",
  "/image6.jpg",
];

const Slider = () => {
  useEffect(() => {
    textAnimation();
  }, []);
  return (
    <div className="pt-20 pb-10 px-14" id="slider">
      <div className="flex flex-col items-center justify-center text-center capitalize">
        <h1 className="w-1/2 text-5xl font-semibold leading-[52px] text opacity-0">
          Setup up your game with strideX performance shoes
        </h1>
        <p className="w-1/2 mt-5 font-medium text-gray-500 opacity-0 text">
          experience the difference with shoes that offer unparalleled
          cushioning,
          <br /> support, and breathability. elevate your style with every
          stride.
        </p>
      </div>
      <Swiper
        spaceBetween={10}
        slidesPerView={4.5}
        className="flex items-center justify-between mt-10"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="h-[400px] relative w-[260px] rounded-[50px] overflow-hidden  border-gray-200 border-4">
              <Image src={image} alt="image" fill objectFit="cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
