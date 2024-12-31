import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      {/* <div className="flex items-center justify-around h-screen overflow-x-hidden">
        
        <div className="relative h-[500px] w-[350px] bg-white rounded-lg">
          
          <div
            className="absolute bottom-0 left-0 w-full h-[300px] bg-blue-200"
            style={{
              clipPath: "polygon(0 23%, 100% 0, 100% 100%, 0% 100%)",
            }}
          /> */}

      {/* <div className="absolute bottom-0 left-0 flex flex-col justify-center w-full p-5">
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

     
        <div className="relative h-[500px] w-[350px] bg-white rounded-lg">
          <div className="h-[500px] w-[500px] absolute -top-44 -left-28">
            <Image
              src={"/shoe.png"}
              fill
              objectFit="cover"
              className="-rotate-[30deg]"
            />
          </div>
       
          <div
            className="absolute bottom-0 left-0 w-full h-[300px] bg-green-300"
            style={{
              clipPath: "polygon(0 23%, 100% 0, 100% 100%, 0% 100%)",
            }}
          />

       
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


        <div className="relative h-[500px] w-[350px] bg-white rounded-lg">
       
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
      </div> */}

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
