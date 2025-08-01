"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
const Card = ({title , subtitle, url}) => {
  return (
    <div style={{ backgroundImage: `url(${url})` }} className="h-150 z-10 bg-contain mt-10 text-white rounded-4xl min-w-80 flex flex-col items-start  justify-between " >
      <div>
        <h2 className="mt-10 ml-10 text-xl">{title}</h2>
        <h1 className="ml-10 text-3xl font-bold">{subtitle}</h1>
      </div>
      <div className="w-full p-10 flex justify-end items-end">
        <Button variant="secondary">
          <Plus />
        </Button>
      </div>
    </div>
  );
};

export default Card;
