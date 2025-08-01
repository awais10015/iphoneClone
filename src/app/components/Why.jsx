"use client"
import React from "react";
import Whycard from "@/app/components/Whycard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const Why = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".Why", {
      // borderRadius: "3.5rem",
      // scale:0.9,
   
      // marginLeft: 5,
      // delay:1,
      // duration: 10,
      scrollTrigger: {
        trigger: ".Why",
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
    <div className="Why bg-[#F5F5F7] pt-10 w-full pb-20">
     
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-6 sm:px-16 md:px-20 pt-10 gap-4 text-center sm:text-left">
        <h1 className="text-4xl sm:text-4xl md:text-4xl font-bold">
          Why Apple is the best place to buy iPhone.
        </h1>
        <h4 className="text-blue-600  text-lg sm:text-xl ">
          Shop iPhone
        </h4>
      </div>

      
      <div className="overflow-x-auto scrollbar-hide mt-10">
        <div className="flex gap-5 px-6 sm:px-16 md:px-20 w-fit">
          <Whycard
            src="/W1.png"
            title="Save with apple trade in."
            subtitle="Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device."
          />
          <Whycard
            src="/W2.png"
            title="Pay over time- interest free."
            subtitle="Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device."
          />
          <Whycard
            src="/W3.png"
            title="Apple, your one stop shop for carrier deals."
            subtitle="Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device."
          />
          <Whycard
            src="/W4.png"
            title="Get flexible delivery and pickup."
            subtitle="Trade‑in values will vary based on the condition, year, and configuration of your eligible trade‑in device."
          />
        </div>
      </div>
    </div>
  );
};

export default Why;
