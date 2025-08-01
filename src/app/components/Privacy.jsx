"use client"
import React from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Privacy = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".Privacy", {
      // borderRadius: "3.5rem",
      // scale:0.9,
   
      // marginLeft: 5,
      // delay:1,
      // duration: 10,
      scrollTrigger: {
        trigger: ".Privacy",
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
    <div className="Privacy bg-[#F5F5F7] w-full h-auto">
      <div className="flex justify-between pt-10 sm:mx-15 md:mx-15 mx-4 sm:flex-row md:flex-row flex-col items-center">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl whitespace-normal sm:whitespace-nowrap text-center sm:text-left">
          Find the privacy you’re searching for.
        </h1>
      </div>

      <div className="relative rounded-3xl scale-95 w-full h-[300px] sm:h-[400px] md:h-[500px] mt-10 overflow-hidden">
        <Image
          src="/Privacy.avif"
          alt="Privacy"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default Privacy;
