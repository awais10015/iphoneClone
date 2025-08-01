"use client"
import React from 'react'
import Card from '@/app/components/Card'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Features = () => {

gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".Cards", {
      // borderRadius: "3.5rem",
      // scale:0.9,
   
      // marginLeft: 5,
      // delay:1,
      // duration: 10,
      scrollTrigger: {
        trigger: ".Cards",
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
    <>
      <div className='Cards w-full'>
        
        <div className='pl-20 text-7xl font-extrabold mt-20'>
          Get to know iPhone.
        </div>

        
        <div className='overflow-x-auto scrollbar-hide'>
          <div className='flex gap-5 w-fit pl-20 pr-10'>
            <Card title="Apple Intelligence" subtitle="AI opening possibilities." url="/F1.jpg" />
            <Card title="Cutting edge Cameras" subtitle="Picture your best Photos and Videos" url="/F2.jpg" />
            <Card title="Chip and Battery Life" subtitle="Fast that Lasts" url="/F3.jpg" />
            <Card title="Innovation" subtitle="Beautiful and Durable by Design" url="/F4.jpg" />
            <Card title="Environment" subtitle="Recycle, Reuse and Repeat" url="/F5.jpg" />
            <Card title="Privacy" subtitle="Your Data just where you want it" url="/F6.jpg" />
            <Card title="Peace of Mind" subtitle="Helpful Features. On and Off the Grid" url="/F7.jpg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Features
