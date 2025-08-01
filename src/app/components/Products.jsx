"use client"
import React from "react";
import ProductCard from "@/app/components/ProductCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Products = () => {

gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from(".Products", {
      // borderRadius: "3.5rem",
      // scale:0.9,
   
      // marginLeft: 5,
      // delay:1,
      // duration: 10,
      scrollTrigger: {
        trigger: ".Products",
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
    <div className="Products bg-[#F5F5F7] mt-10 w-full">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start px-6 sm:px-16 md:px-20 pt-10 gap-4 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
          Explore the Lineup
        </h1>
        <h4 className="text-blue-600 font-bold text-lg sm:text-xl mt-2 sm:mt-8">
          Compare all models
        </h4>
      </div>

      {/* Scrollable Cards Section */}
      <div className="overflow-x-auto scrollbar-hide mt-10">
        <div className="flex gap-5 px-6 sm:px-16 md:px-20 w-fit">
          <ProductCard
            src="/P1.png"
            title="iPhone 16 Pro"
            subtitle="The ultimate iPhone."
            description="From $999 or $41.62/mo. for 24 mo.***"
            img1="/Pimg1.png"
            img2="/p1img2.png"
            img3="/p1img3.png"
            img4="/p1img4.png"
            img5="/p1img5.png"
            txt1="Apple Intelligence1"
            txt2="A18 Pro chip with 6-core GPU"
            txt3="Camera Control"
            txt4="Pro camera system Our most advanced 48MP Fusion camera 5x Telephoto camera 48MP Ultra Wide camera Visual intelligence, to learn about your surroundings11"
            txt5="Up to 33 hours video playback3"
          />
          <ProductCard
            src="/P2.png"
            title="iPhone 16"
            subtitle="A total powerhouse."
            description="From $799 or $33.29/mo. for 24 mo.***"
            img1="/Pimg1.png"
            img2="/p1img2.png"
            img3="/p1img3.png"
            img4="/p1img4.png"
            img5="/p1img5.png"
            txt1="Apple Intelligence1"
            txt2="A18 Pro chip with 6-core GPU"
            txt3="Camera Control"
            txt4="Pro camera system Our most advanced 48MP Fusion camera 5x Telephoto camera 48MP Ultra Wide camera Visual intelligence, to learn about your surroundings11"
            txt5="Up to 33 hours video playback3"
          />
          <ProductCard
            src="/P3.png"
            title="iPhone 16e"
            subtitle="Latest iPhone. Greatest price."
            description="From $599 or $24.95/mo. for 24 mo.***"
            img1="/Pimg1.png"
            img2="/p1img2.png"
            img3="/p1img3.png"
            img4="/p1img4.png"
            img5="/p1img5.png"
            txt1="Apple Intelligence1"
            txt2="A18 Pro chip with 6-core GPU"
            txt3="Camera Control"
            txt4="Pro camera system Our most advanced 48MP Fusion camera 5x Telephoto camera 48MP Ultra Wide camera Visual intelligence, to learn about your surroundings11"
            txt5="Up to 33 hours video playback3"
          />
          <ProductCard
            src="/P4.png"
            title="iPhone 15"
            subtitle="As amazing as ever."
            description="From $699 or $29.12/mo. for 24 mo.***"
            img1="/Pimg1.png"
            img2="/p1img2.png"
            img3="/p1img3.png"
            img4="/p1img4.png"
            img5="/p1img5.png"
            txt1="Apple Intelligence1"
            txt2="A18 Pro chip with 6-core GPU"
            txt3="Camera Control"
            txt4="Pro camera system Our most advanced 48MP Fusion camera 5x Telephoto camera 48MP Ultra Wide camera Visual intelligence, to learn about your surroundings11"
            txt5="Up to 33 hours video playback3"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
