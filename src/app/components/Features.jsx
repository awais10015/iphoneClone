"use client";
import React from "react";
import Card from "@/app/components/Card";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".Cards", {
      opacity: 0,
      y: 300,
      duration: 1,
      scrollTrigger: {
        trigger: ".Cards",
        scroller: "body",
        start: "top 100%",
        end: "top 0%",
        // scrub: true,
        // markers: true,
      },
    });
  }, []); 

  return (
    <div className="Cards w-full">
     
      <div
        className="w-full px-4 sm:px-10 lg:pl-20 text-start 
        text-3xl sm:text-5xl md:text-5xl lg:text-7xl 
        font-extrabold mt-10 sm:mt-16 lg:mt-20 leading-tight"
      >
        Get to know iPhone.
      </div>

   
      <div className="overflow-x-auto scrollbar-hide mt-10">
        <div
          className="flex gap-5 w-fit 
          px-4 sm:px-10 lg:px-20"
        >
          <Card
            title="Apple Intelligence"
            subtitle="AI opening possibilities."
            url="/F1.jpg"
          />
          <Card
            title="Cutting edge Cameras"
            subtitle="Picture your best Photos and Videos"
            url="/F2.jpg"
          />
          <Card
            title="Chip and Battery Life"
            subtitle="Fast that Lasts"
            url="/F3.jpg"
          />
          <Card
            title="Innovation"
            subtitle="Beautiful and Durable by Design"
            url="/F4.jpg"
          />
          <Card
            title="Environment"
            subtitle="Recycle, Reuse and Repeat"
            url="/F5.jpg"
          />
          <Card
            title="Privacy"
            subtitle="Your Data just where you want it"
            url="/F6.jpg"
          />
          <Card
            title="Peace of Mind"
            subtitle="Helpful Features. On and Off the Grid"
            url="/F7.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
