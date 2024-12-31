"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  // useEffect(() => {
  //   const tl = gsap.timeline();

  //   tl.set(".text", { scale: 1, top: "20%", left: "50%" });
  //   tl.set(".shoe", { scale: 1, top: "-10%", left: "20%" });

  //   tl.fromTo(".shoe, .text", { scale: 0 }, { scale: 1, duration: 0.8 });

  //   tl.fromTo(
  //     ".shoe",
  //     {
  //       top: "-10%",
  //       left: "20%",
  //     },
  //     {
  //       top: "72%",
  //       left: "-12.5%",
  //       scale: 0.65,
  //       duration: 0.8,
  //       rotate: "-30deg",
  //       scrollTrigger: {
  //         trigger: ".shoe",
  //         start: "20% 50%",
  //         end: "80% -50%",
  //         markers: true,
  //         scrub: true,
  //       },
  //     }
  //   );

  //   // Second ScrollTrigger animation
  //   tl.fromTo(
  //     ".shoe",
  //     {
  //       top: "72%",
  //       left: "-12.5%",
  //     },
  //     {
  //       top: "205%",
  //       left: "6%",
  //       rotate: "90deg",
  //       duration: 0.8,
  //       scrollTrigger: {
  //         trigger: ".shoe",
  //         start: "50% 20%",
  //         end: "150% -80%",
  //         markers: true,
  //         scrub: true,
  //       },
  //     }
  //   );

  //   return () => {
  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  return (
    <div>
      <Navbar />

      {/* HERO */}
      <div className="relative h-screen">
        <Image
          src={"/shoe.png"}
          alt="shoe"
          height={800}
          width={800}
          className="absolute z-10 -rotate-45 shoe left-[20%] -top-[10%]"
        />

        <Image
          src={"/logo.jpg"}
          alt="logo"
          height={80}
          width={80}
          className="absolute mix-blend-multiply top-36 left-[350px]"
        />
        <h1 className="text-[200px] font-bold absolute top-40 left-1/2 -translate-x-1/2 -z-10 text">
          AIRMAX
        </h1>
        <button className="w-24 h-24 border-[0.1px] border-gray-500 rounded-full absolute top-1/2 left-[20%] z-30 bg-[#f1f1f1]">
          PLAY
        </button>

        {/* shoes boxes */}
        <div className="absolute flex gap-2 right-14 bottom-20">
          <div className="relative h-24 border-2 border-black w-44">
            <Image src={"/shoe.png"} alt="shoe" fill objectFit="cover" />
          </div>
          <div className="relative h-24 border-2 border-black w-44">
            <Image src={"/shoe.png"} alt="shoe" fill objectFit="cover" />
          </div>
        </div>

        <p className="text-[10px] uppercase absolute bottom-20 left-14">
          &copy; 2024, All rights reserved
        </p>

        <div className="absolute flex flex-col items-center -translate-x-1/2 bottom-20 left-1/2">
          <p className="text-[10px] uppercase animate-bounce">
            Scroll to discover
          </p>
          <div className="h-14 w-[0.5px] bg-gray-600"></div>
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="flex items-center justify-around h-screen overflow-x-hidden">
        {/* BOX 1 */}
        <div className="relative h-[500px] w-[350px] bg-white rounded-lg">
          {/* Sloped Blue Background */}
          <div
            className="absolute bottom-0 left-0 w-full h-[300px] bg-blue-200"
            style={{
              clipPath: "polygon(0 23%, 100% 0, 100% 100%, 0% 100%)",
            }}
          />

          {/* Your content (text + buttons), placed above the slope */}
          <div className="absolute bottom-0 left-0 flex flex-col justify-center w-full p-5">
            <ul className="mt-5 text-lg list-disc">
              <li>Color Shown: Wolf Grey/Photon Dust/Metallic Platinum</li>
              <li>Style: DD9682-005</li>
              <li>Country/Region of Origin: Vietnam</li>
            </ul>
            <div className="flex items-center gap-2 mt-7">
              <button className="px-10 py-2 text-white bg-black rounded-full">
                Add to bag
              </button>
              <button className="px-8 py-2 bg-white rounded-full">
                Favourite
              </button>
            </div>
          </div>
        </div>

        {/* BOX 2 */}
        <div className="relative h-[500px] w-[350px] bg-white rounded-lg">
          <div className="h-[500px] w-[500px] absolute -top-44 -left-28">
            <Image
              src={"/shoe.png"}
              fill
              objectFit="cover"
              className="-rotate-[30deg]"
            />
          </div>
          {/* Sloped green Background */}
          <div
            className="absolute bottom-0 left-0 w-full h-[300px] bg-green-300"
            style={{
              clipPath: "polygon(0 23%, 100% 0, 100% 100%, 0% 100%)",
            }}
          />

          {/* Your content (text + buttons), placed above the slope */}
          <div className="absolute bottom-0 left-0 flex flex-col justify-center w-full p-5">
            <ul className="mt-5 text-lg list-disc">
              <li>Color Shown: Wolf Grey/Photon Dust/Metallic Platinum</li>
              <li>Style: DD9682-005</li>
              <li>Country/Region of Origin: Vietnam</li>
            </ul>
            <div className="flex items-center gap-2 mt-7">
              <button className="px-10 py-2 text-white bg-black rounded-full">
                Add to bag
              </button>
              <button className="px-8 py-2 bg-white rounded-full">
                Favourite
              </button>
            </div>
          </div>
        </div>

        {/* BOX 3 */}
        <div className="relative h-[500px] w-[350px] bg-white rounded-lg">
          {/* Sloped brown Background */}
          <div className="h-[500px] w-[500px] absolute -top-44 -left-28">
            <Image
              src={"/shoe.png"}
              fill
              objectFit="cover"
              className="-rotate-[30deg]"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-[300px] bg-blue-200"
            style={{
              clipPath: "polygon(0 23%, 100% 0, 100% 100%, 0% 100%)",
            }}
          />

          {/*content (text + buttons), placed above the slope */}
          <div className="absolute bottom-0 left-0 flex flex-col justify-center w-full p-5">
            <ul className="mt-5 text-lg list-disc">
              <li>Color Shown: Wolf Grey/Photon Dust/Metallic Platinum</li>
              <li>Style: DD9682-005</li>
              <li>Country/Region of Origin: Vietnam</li>
            </ul>
            <div className="flex items-center gap-2 mt-7">
              <button className="px-8 py-2 text-white bg-black rounded-full">
                Add to bag
              </button>
              <button className="px-10 py-2 bg-white rounded-full">
                Favourite
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ABOUT */}
      <div className="flex items-center h-screen">
        {/* BIG IMAGES */}
        <div className="w-1/2">
          <div
            className="relative h-[700px] w-[700px] 
             bg-gradient-radial from-teal-300 via-blue-100  to-[#f1f1f1]"
          >
            <Image
              src={"/shoe.png"}
              alt="shoe"
              width={700}
              height={600}
              className="absolute transform -rotate-90 -left-28 -scale-x-100"
            />
          </div>
        </div>

        {/* SMALL IMAGES */}
        <div className="flex items-center w-1/2 h-full gap-10 overflow-auto pr-14">
          {/* many shoe boxes */}
          <div className="w-[100px] h-full flex flex-col justify-center items-center gap-10">
            <div className="relative w-20 h-20 border-2 border-black">
              <Image
                src={"/shoe.png"}
                alt="shoe"
                fill
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div className="relative w-20 h-20 border-2 border-black">
              <Image
                src={"/shoe.png"}
                alt="shoe"
                fill
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div className="relative w-20 h-20 border-2 border-black">
              <Image
                src={"/shoe.png"}
                alt="shoe"
                fill
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div className="relative w-20 h-20 border-2 border-black">
              <Image
                src={"/shoe.png"}
                alt="shoe"
                fill
                objectFit="cover"
                className="absolute"
              />
            </div>
            <div className="relative w-20 h-20 border-2 border-black">
              <Image
                src={"/shoe.png"}
                alt="shoe"
                fill
                objectFit="cover"
                className="absolute"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="text-lg ">
            <p className="-mt-[70px]">
              Nike is one of the most recognizable sportswear brands globally,
              renowned for its innovation in athletic footwear, apparel, and
              equipment. Their iconic swoosh logo symbolizes speed, movement,
              and achievement, resonating with athletes and enthusiasts alike.
              Over the years, Nike has leveraged cutting-edge technology and
              bold marketing campaigns to inspire personal excellence. By
              championing inclusive design and social causes, they continue to
              shape how the world views athletic performance and style.
            </p>

            <ul className="pl-5 mt-5 mb-5 list-disc">
              <li>Colour Shown: Wolf Grey/Photon Dust/Metallic Platinum</li>
              <li>Style: DD9682-005</li>
              <li>Country/Region of Origin: Vietnam</li>
            </ul>

            <b>MRP: ₹ 10 995.00</b>

            <br />

            <p className="mt-5">
              Inclusive of all taxes {"("}Also includes all application duties
              {")"}
            </p>

            <div className="flex items-center gap-2 mt-7">
              <button className="px-8 py-2 text-white bg-black rounded-full">
                Add to bag
              </button>
              <button className="px-10 py-2 bg-white border-2 border-black rounded-full">
                Favourite
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
