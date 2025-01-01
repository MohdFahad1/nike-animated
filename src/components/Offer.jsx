import Image from "next/image";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Offer = () => {
  return (
    <div
      className="flex items-start justify-between min-h-screen px-24 pt-20 pb-10"
      id="offer"
    >
      <div>
        <h1 className="text-5xl leading-[55px] capitalize">
          limited edition <br />
          <span className="px-2 border-2 border-orange-500 rounded-full">
            collection
          </span>
          Only 300 <br />
          units left!
        </h1>
        <p className="text-lg font-medium text-gray-500 w-[700px] text-justify capitalize my-8">
          shop the exclusive range of strideX shoes and redefine your workout or
          daily wear. stand out with premium materials and eye-catching designs.
          shop the exclusive range of strideX shoes and redefine your workout
        </p>

        <div className="flex items-center gap-10">
          <button className="w-24 h-24 border-black rounded-full border-[3px] -rotate-[30deg] flex items-center justify-center">
            <IoIosArrowRoundForward size={90} />
          </button>

          <div>
            <h3 className="mb-2 text-2xl capitalize">
              <span className="font-semibold">200k+</span> happy customers
            </h3>
            <h3 className="text-2xl capitalize">
              <span className="font-semibold underline">97% satisfaction</span>{" "}
              rate on <br />
              comfort &amp; quality
            </h3>
          </div>
        </div>

        <div className="flex gap-10 mt-5">
          {["/offer-shoe2.jpg", "/offer-shoe1.jpg", "/offer-shoe3.jpg"].map(
            (src, index) => (
              <div
                key={index}
                className="rounded-[45px] overflow-hidden relative h-[200px] w-[200px]"
              >
                <Image
                  src={src}
                  alt={`shoe ${index + 1}`}
                  fill
                  objectFit="cover"
                  className="absolute"
                />
              </div>
            )
          )}
        </div>
      </div>
      <div className="border-4 rounded-[50px] p-[2px]">
        <div className="h-[85vh] relative w-[450px] rounded-[50px] overflow-hidden">
          <video
            className="absolute object-cover w-full h-full"
            autoPlay
            loop
            muted
          >
            <source src="/video.mp4" type="video/mp4" />
            Your browser does not support the video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Offer;
