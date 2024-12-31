import About from "@/components/About";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />

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
    </div>
  );
}
