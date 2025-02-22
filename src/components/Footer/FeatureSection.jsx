import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { HiTag } from "react-icons/hi";
import { TfiHeadphoneAlt } from "react-icons/tfi";

function FeatureSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 items-center py-14 flex-wrap justify-between md:px-20 px-3 bg-[#F5F7FF] mt-[60px] text-center">
      <div className="px-4 my-3">
        <div className="bg-[#0156FF] inline-block p-3 rounded-full">
          <TfiHeadphoneAlt className="FeatureIcons" />
        </div>
        <h1 className="font-bold text-[18px] my-2">Product support</h1>
        <p className="text-[14px]">
          Up to 3 years on-site warranty available for your peace of mind.
        </p>
      </div>
      <div className="px-4 my-5">
        <div className="bg-[#0156FF] inline-block p-3 rounded-full">
          <FaUserCircle className="FeatureIcons" />
        </div>
        <h1 className="font-bold text-[18px] my-2">Personal Account</h1>
        <p className="text-[14px]">
          With big discounts, free delivery and a dedicated support specialist.
        </p>
      </div>
      <div className="px-4 my-5">
        <div className="bg-[#0156FF] inline-block p-3 rounded-full">
          <HiTag className="FeatureIcons" />
        </div>
        <h1 className="font-bold text-[18px] my-2">Amazing Savings</h1>
        <p className="text-[14px]">
          Up to 70% off new Products, you can be sure of the best price.
        </p>
      </div>
    </div>
  );
}

export default FeatureSection;
