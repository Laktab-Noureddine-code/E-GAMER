import React from "react";
import NewsLetter from "./NewsLetter";
import Infos from "./Infos";
import CopyRight from "./CopyRight";
import FeatureSection from "./FeatureSection";

function Footer() {
  return (
    <div className="mt-5  mx-auto">
      <FeatureSection />
      <div className="bg-black text-white px-4 py-6 lg:px-[90px] 2xl:max-w-[1530px] ">
        <NewsLetter />
        <Infos />
        <div className="w-full bg-gray-800 h-[1px] "></div>
        <CopyRight />
      </div>
    </div>
  );
}

export default Footer;
