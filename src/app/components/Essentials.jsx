"use client"
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Essentials = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".Essentials", {
      // borderRadius: "3.5rem",
      // scale:0.9,
   
      // marginLeft: 5,
      // delay:1,
      // duration: 10,
      scrollTrigger: {
        trigger: ".Essentials",
        scroller: "body",
        // scrub: true,
        start: "top 100%",
        end: "top 0%",
        // markers: true,
      },
      opacity:0,
      y:300,
      duration:1,

    });
  });
  return (
    <div className="Essentials">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-6 sm:px-16 md:px-20 pt-10 gap-4 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Explore the Lineup
        </h1>
        <h4 className="text-blue-600 font-bold text-lg sm:text-xl mt-2 sm:mt-8">
          Compare all models
        </h4>
      </div>

      <div className="flex gap-10 p-15 flex-col sm:flex-row md-flex-row">
        <div className="bg-[#F5F5F7] flex-1  rounded-3xl flex flex-col justify-center items-center pt-10">
          <h1 className="mt-8 w-full text-center font-medium text-4xl">iPhone accessories</h1>
          <h4 className="p-5 text-center w-full font-medium">
            Explore colorful cases, USB‑C power adapters, MagSafe accessories,
            and more.
          </h4>
          <Button variant="link" className="text-blue-600 text-lg">
            Shop iPhone accessories
          </Button>
          <Image className="mt-10 w-full object-fill rounded-3xl" src="/E1.jpg" height={500} width={500} alt="img"/>
        </div>

        <div className="bg-[#F5F5F7] flex-1  rounded-3xl flex flex-col justify-center items-center">
          <h1 className="w-full text-center mt-8 font-medium text-4xl">AirTag</h1>
          <h4 className="p-5 w-full text-center font-medium">
            Attach one to your keys. Put another in your backpack. If they’re
            misplaced, just use the Find My app.
          </h4>
           <Button variant="link" className="text-blue-600 text-lg">
            Buy
          </Button>
          <Image className="mt-10 w-full object-fill over rounded-b-3xl" src="/E2.jpg" height={500} width={500} alt="img"/>
        </div>
      </div>
    </div>
  );
};

export default Essentials;
