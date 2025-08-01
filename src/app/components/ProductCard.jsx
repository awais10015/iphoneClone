"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProductCard = ({
  src,
  title,
  subtitle,
  description,
  img1,
  img2,
  img3,
  img4,
  img5,
  txt1,
  txt2,
  txt3,
  txt4,
  txt5,
}) => {
  return (
    <div className="mt-15 flex flex-col  p-10 justify-between items-center gap-6">
      <Image src={src} width={200} height={200} alt="img"/>
      <div></div>
      <h2 className="text-3xl font-medium">{title}</h2>
      <h6>{subtitle}</h6>
      <h4 className="text-lg font-medium whitespace-nowrap">{description}</h4>
      <div>
        <button className="pl-5 pr-5 p-2 text-lg rounded-4xl bg-blue-600 text-white">
          Learn More
        </button>
        <Button className="hover:text-blue-600 text-lg" variant="link">
          Buy
        </Button>
      </div>

<hr className="border-t border-gray-900 my-4 w-full" />

      <div className="flex flex-col gap-6 mt-20 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <Image src={img1} width={40} height={40} alt="img"/> <p className="text-center flex flex-wrap text-sm">{txt1}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={img2} width={40} height={40} alt="img"/> <p className="text-center flex flex-wrap text-sm"> {txt2}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={img3} width={40} height={40} alt="img"/> <p className="text-center flex flex-wrap text-sm">{txt3}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={img4} width={40} height={40} alt="img"/> <p className="text-center flex flex-wrap text-sm">{txt4}</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image src={img5} width={40} height={40} alt="img"/> <p className="text-center flex flex-wrap text-sm">{txt5}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
