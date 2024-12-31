import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";

const images = [
  {
    url: "/adidas.png",
    height: 70,
    width: 70,
  },
  {
    url: "/puma.jpg",
    height: 60,
    width: 60,
  },
  {
    url: "/adidas.png",
    height: 70,
    width: 70,
  },
  {
    url: "/puma.jpg",
    height: 60,
    width: 60,
  },
  {
    url: "/adidas.png",
    height: 70,
    width: 70,
  },
  {
    url: "/puma.jpg",
    height: 60,
    width: 60,
  },
  {
    url: "/adidas.png",
    height: 70,
    width: 70,
  },
  {
    url: "/puma.jpg",
    height: 60,
    width: 60,
  },
];

const Hero = () => {
  return (
    <main className="pt-12 pb-10 px-14">
      <div className="flex items-center gap-10">
        <div>
          <div className="relative h-10">
            <div className="absolute z-10 w-8 h-8 bg-gray-300 rounded-full"></div>
            <div className="absolute z-0 w-8 h-8 bg-orange-500 rounded-full left-4"></div>
            <p className="absolute z-20 text-xs uppercase top-[20%] left-4">
              new 2024 collections
            </p>
          </div>
          <h1 className="mt-16 font-semibold capitalize text-7xl">
            Elevate your <br />
            performance{" "}
            <span className="text-orange-500">
              with <br />
              strideX
            </span>{" "}
            footwear
          </h1>
          <p className="my-6 text-gray-700 capitalize">
            StrideX shoes blend cutting-design with superior <br />
            comfort, ensuring you stay ahead in every step.
          </p>

          <div className="flex items-center gap-2">
            <button className="px-5 font-semibold border-2 border-black rounded-full h-9">
              Explore
            </button>
            <button className="flex items-center justify-center text-white -rotate-[40deg] bg-black rounded-full w-9 h-9">
              <IoIosArrowRoundForward size={32} />
            </button>
          </div>
        </div>
        <div className="relative w-1/2 h-[500px]">
          <div className="bg-orange-400 blur-[80px] h-[70%] w-[60%] absolute right-0 rounded-full"></div>
          <div className="absolute z-10 flex items-center top-28 left-[20%]">
            <button className="flex items-center justify-center text-black bg-white rounded-full w-7 h-7">
              <FiPlus size={20} />
            </button>
            <button className="px-3 text-black bg-white rounded-full h-7">
              Stylish
            </button>
          </div>

          <div className="absolute z-10 flex items-center right-6 bottom-20">
            <button className="flex items-center justify-center text-black bg-white rounded-full w-7 h-7">
              <FiPlus size={20} />
            </button>
            <button className="px-3 text-black bg-white rounded-full h-7">
              Comfort
            </button>
          </div>
          <Image
            src={"/shoe.png"}
            alt="shoe"
            height={500}
            width={500}
            className="absolute -top-5 right-24"
          />
          <Image
            src={"/shoe.png"}
            alt="shoe"
            height={500}
            width={500}
            className="absolute -rotate-45 top-28 right-5"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-10">
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image.url}
              alt="brand"
              height={image.height}
              width={image.width}
              className="mix-blend-multiply"
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Hero;
