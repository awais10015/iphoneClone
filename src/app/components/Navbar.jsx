"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <>
    <div className="w-full bg-[#F5F5F7]">
      <div className="flex  items-center text-sm justify-between pt-1 pl-3 pr-3 sm:ml-25 sm:mr-25 lg:ml-25 lg:mr-25 flex-nowrap">
        <div className=" flex-1">
          <Image
            className="dark m-2"
            src="/logo.png"
            alt="logo"
            width={15}
            height={15}
          />
        </div>

        <li className="hidden lg:flex list-none m-2 flex-1">Mac</li>
        <li className="hidden lg:flex list-none m-2 flex-1">Store</li>
        <li className="hidden lg:flex list-none m-2 flex-1">iPad</li>
        <li className="hidden lg:flex list-none m-2 flex-1">iPhone</li>
        <li className="hidden lg:flex list-none m-2 flex-1">Watch</li>
        <li className="hidden lg:flex list-none m-2 flex-1">Vision</li>
        <li className="hidden lg:flex list-none m-2 flex-1">AirPods</li>
        <li className="hidden lg:flex list-none m-2 flex-1 whitespace-nowrap">
          TV & Home
        </li>
        <li className="hidden lg:flex list-none m-2 flex-1 mr-2">
          Entertainment
        </li>
        <li className="hidden lg:flex list-none m-2 flex-1">Accessories</li>
        <li className="hidden lg:flex list-none m-2 flex-1">Support</li>
        <div className="flex gap-2">
          <Image
            className="object-contain"
            src="/search.png"
            alt="search"
            width={20}
            height={20}
          />
          <Image
            className="object-contain"
            src="/shop.png"
            alt="shop"
            width={20}
            height={20}
          />
          <div className="lg:hidden relative right-0 top-1">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <div className="w-6 h-6">Close</div>
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <ul className="lg:hidden flex flex-col items-center bg-white shadow-md text-black font-medium space-y-4 py-4">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact </li>
        </ul>
      )}
      </div>
    </>
  );
};

export default Navbar;
