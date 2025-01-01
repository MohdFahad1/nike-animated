import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaMeta, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa6";

const Footer = () => {
  const icons = [
    <FaMeta size={22} />,
    <FaInstagram size={22} />,
    <FaYoutube size={22} />,
    <FaPinterestP size={22} />,
  ];

  return (
    <footer className="flex items-center gap-32 text-black bg-white p-14">
      <div>
        <div className="flex items-center gap-6">
          <h1 className="text-5xl font-medium">Subscribe Us</h1>
          <button className="w-16 h-16 border-black rounded-full border-[2px] -rotate-[30deg] flex items-center justify-center">
            <IoIosArrowRoundForward size={70} />
          </button>
        </div>

        <div className="flex gap-32 mt-20">
          <ul className="flex flex-col gap-2">
            <span className="mb-2 text-lg font-semibold">
              Help &amp; Information
            </span>
            <li>My Account</li>
            <li>Educator Offer</li>
            <li>Student Offer</li>
            <li>Shipping</li>
            <li>Return</li>
            <li>Cookies</li>
            <li>Legal</li>
            <li>Retails</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <span className="mb-2 text-lg font-semibold">About</span>
            <li>Help Center</li>
            <li>FAQ&apos;s</li>
            <li>Contact Us</li>
            <li>Store</li>
            <li>Terms &amp; Conditions</li>
            <li>Find a store</li>
            <li>Women</li>
            <li>Gifts</li>
          </ul>

          <ul className="flex flex-col gap-2">
            <span className="mb-2 text-lg font-semibold">
              Help &amp; Information
            </span>
            <li>My Account</li>
            <li>Educator Offer</li>
            <li>Student Offer</li>
            <li>Shipping</li>
            <li>Return</li>
            <li>Cookies</li>
            <li>Legal</li>
            <li>Retails</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col w-1/2 gap-5">
        <h1 className="text-6xl italic font-bold">StrideX</h1>
        <p className="font-medium capitalize">
          Join the strideX community and experience footwear that redefines
          excellence. stay connected with us for exclusive offers, new releases,
          and.
        </p>
        <div className="flex gap-3">
          {icons.map((icon, index) => (
            <button
              key={index}
              className="flex items-center justify-center w-8 h-8 text-white bg-black rounded-full"
            >
              {icon}
            </button>
          ))}
        </div>

        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p>India</p>
          <p>5600 STRIDEX</p>
          <h2 className="mt-2 text-lg font-semibold">Email</h2>
          <p>hello{"@"}gmail.com</p>
          <p className="mt-4">Copyright&copy;2024 By StrideX</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
