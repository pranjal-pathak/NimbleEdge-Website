import React from "react";
import whoareweBg from "/src/assets/about/whoareweBg.png";
import investorsSvg from "/src/assets/about/investors.svg";
import companiesSvg from "/src/assets/about/companies.svg";

const Investors = () => {
  return (
    <div
      className="mt-[13px] w-[1330px] h-[388px] mx-auto bg-cover bg-center border border-[rgba(255,255,255,0.2)] rounded-[56px]"
      style={{
        backgroundImage: `url(${whoareweBg})`,
      }}
    >
      {/* Content Wrapper */}
      <div className="p-10 text-center">
        {/* Heading */}
        <h1 className="text-[36px] font-semibold leading-[44px] text-[#ECF1F0]">
          Our Investors
        </h1>

        {/* SVG Image: Investors */}
        <img
          src={investorsSvg}
          alt="Investors"
          className="mt-[19px] mx-auto"
          style={{
            width: "412px",
            height: "35px",
          }}
        />

        {/* Horizontal Line */}
        <div
          className="mt-[47px] mx-auto"
          style={{
            width: "1256px",
            height: "1px",
            backgroundColor: "#383856",
          }}
        ></div>

        {/* Text Below the Line */}
        <p className="mt-[26px] text-[24px] font-semibold leading-[35px] text-white">
          NimbleEdge is also backed by AI leaders from industry leaders &
          pioneering research institutions
        </p>

        {/* SVG Image: Companies */}
        <img
          src={companiesSvg}
          alt="Companies"
          className="mt-[24px] mx-auto"
          style={{
            width: "1025px",
            height: "60px",
          }}
        />
      </div>
    </div>
  );
};

export default Investors;
