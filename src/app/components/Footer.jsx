import React from "react";

const Footer = () => {
  return (
    <div className="flex items-center flex-col p-20 bg-[#FAFAFC]">
      <div className="font-bold text-5xl mt-10 mb-10">iPhone</div>
      <div className="flex w-full justify-evenly flex-col sm:flex-row md:flex-row lg:flex-row gap-5">
        <div className="flex flex-col mt-10 gap-2">
          <h6 className="text-gray-600">Explore iPhone</h6>
          <h1 className="text-2xl font-medium">Explore All iPhone</h1>
          <h1 className="text-2xl font-medium">iPhone 16 Pro</h1>
          <h1 className="text-2xl font-medium">iPhone 16</h1>
          <h1 className="text-2xl font-medium">iPhone 16e</h1>
          <h1 className="text-2xl font-medium">iPhone 15</h1>

          <h6 className="font-medium">Compare iPhone</h6>
          <h6 className="font-medium">Switch from Android</h6>
        </div>
        <div className="flex flex-col mt-10 gap-2 ">
          <h6 className="text-gray-600">Shop iPhone</h6>
          <h1 className="text-lg font-medium">Shop iPhone</h1>
          <h1 className="text-lg font-medium">iPhone Accessories</h1>
          <h1 className="text-lg font-medium">Apple Trade In</h1>
          <h1 className="text-lg font-medium">Carrier Deals at Apple</h1>
          <h1 className="text-lg font-medium">Financing</h1>
        </div>
        <div className="flex flex-col mt-10 gap-2">
          <h6 className="text-gray-600">More from iPhone</h6>
          <h1 className="text-lg font-medium">AppleCare+ for iPhone</h1>
          <h1 className="text-lg font-medium">iOS 26 Preview</h1>
          <h1 className="text-lg font-medium">Apple Intelligence</h1>
          <h1 className="text-lg font-medium">Apps by Apple</h1>
          <h1 className="text-lg font-medium">iPhone Privacy</h1>

          <h6 className="font-medium">Compare iPhone</h6>
          <h6 className="font-medium">Switch from Android</h6>
        </div>
      </div>
    </div>
  );
};

export default Footer;
