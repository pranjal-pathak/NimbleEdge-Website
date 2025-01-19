import React from "react";
import learnMoreBg from "/src/assets/ecommerce/learnMoreBg.png";
import learnMoreGraphic from "/src/assets/ecommerce/learnMoreGraphic.svg";

const LearnMore = () => {
  return (
    <div
      className="relative w-[1267px] h-[354px] bg-cover bg-center rounded-lg mt-[329px] mx-auto"
      style={{
        backgroundImage: `url(${learnMoreBg})`,
      }}
    >
      {/* Right Image */}
      <img
        src={learnMoreGraphic}
        alt="Graphics"
        className="absolute top-0 right-0 w-[574px] h-[354px]"
      />

      {/* Left Text Section */}
      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 w-[542px] h-[249px] flex flex-col">
        {/* Heading */}
        <h1 className="font-generalSans font-bold text-[clamp(30px,_48px,_5vw)] leading-tight text-[#ECF1F0]">
          Want to learn more?
        </h1>

        {/* Subheading */}
        <p className="font-roboto text-[18px] leading-[31px] text-[#B6B6B6] mt-[42px]">
          Get in touch to unlock real-time personalization using on-device AI
          with NimbleEdge.
        </p>

        {/* Button */}
        <button className="bg-[#5829EE] text-white text-[16px] font-medium py-[13px] px-[24px] rounded-[10px] mt-[59px] w-[141px] h-[50px] md:w-[180px] md:h-[60px] md:text-[18px]">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default LearnMore;
