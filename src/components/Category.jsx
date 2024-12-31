import Image from "next/image";
import React from "react";

const Category = () => {
  return (
    <div className="min-h-screen py-20 px-14">
      <div className="flex items-start justify-between">
        <h1 className="text-4xl font-semibold capitalize">
          perfect fit for <br />
          every move
        </h1>
        <p className="text-lg font-medium text-gray-400 capitalize w-[480px] text-justify">
          Experience the difference with shoes that offer unparalleled
          cushioning. support, and, breathability
        </p>
      </div>

      <div className="flex justify-between mt-20">
        <div className="h-[480px] w-[350px] rounded-[55px] bg-gray-500 relative overflow-hidden group">
          <span className="absolute z-10 px-4 py-1 font-medium capitalize bg-white rounded-full bottom-5 left-10">
            men
          </span>
          <Image
            src={"/men1.jpeg"}
            alt="man"
            fill
            objectFit="cover"
            className="duration-500 group-hover:scale-[1.2]"
          />
        </div>
        <div className="h-[480px] w-[350px] rounded-[55px] bg-[#f0a370] relative overflow-hidden group">
          <span className="absolute z-10 px-4 py-1 font-medium capitalize bg-white rounded-full bottom-5 left-10">
            women
          </span>
          <Image
            src={"/women.jpg"}
            alt="man"
            objectFit="cover"
            fill
            className="duration-500 group-hover:scale-[1.2]"
          />
          {/* <Image
            src={"/shoe.png"}
            alt="shoe"
            height={80}
            width={80}
            className="absolute -rotate-[69deg] bottom-5 left-[40%]"
          /> */}
          <div className="absolute h-[50px] w-[100px] bg-black rounded-full blur-[40px] bottom-0 left-1/2"></div>
        </div>
        <div className="h-[480px] w-[350px] rounded-[55px] bg-gray-500 relative overflow-hidden group">
          <span className="absolute z-10 px-4 py-1 font-medium capitalize bg-white rounded-full bottom-5 left-10">
            men
          </span>
          <Image
            src={"/men2.jpg"}
            alt="man"
            fill
            objectFit="cover"
            className="duration-500 group-hover:scale-[1.2]"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
