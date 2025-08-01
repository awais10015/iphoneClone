"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Video = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".video-wrapper", {
      // borderRadius: "3.5rem",
      // scale:0.9,
   
      // marginLeft: 5,
      // delay:1,
      // duration: 10,
      scrollTrigger: {
        trigger: ".video-wrapper",
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
    gsap.to(".video-wrapper", {
      borderRadius: "3.5rem",
      scale:0.9,
   
      marginLeft: 5,
      delay:1,
      duration: 10,
      scrollTrigger: {
        trigger: ".video-wrapper",
        scroller: "body",
        scrub: true,
        start: "top 30%",
        end: "top 0%",
        // markers: true,
      },
    });
  });
  return (
    <>
      <div className="flex justify-between pt-10 sm:m-15 md:m-15 m-0 sm:flex-row md:flex-row flex-col items-center">
        <h1 className="font-extrabold text-7xl">iPhone</h1>
        <h3 className="font-bold text-2xl">Designed to be loved</h3>
      </div>
      <div className="mt-10 video-wrapper w-full h-full overflow-hidden">
        <video
          className="w-full h-full object-cover "
          src="/large.mp4"
          loop
          autoPlay
          muted
        ></video>
      </div>
    </>
  );
};

export default Video;
