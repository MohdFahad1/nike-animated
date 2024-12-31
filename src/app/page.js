import About from "@/components/About";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Offer from "@/components/Offer";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Category />
      <Offer />
      <Slider />
    </>
  );
}
