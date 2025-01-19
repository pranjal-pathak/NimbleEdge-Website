import React from "react";
import platformArchImage from "/src/assets/platform/platformArch.svg";

const PlatformArch = () => {
  return (
    <div className="mt-40 flex flex-col items-center text-center">
      {/* Text Box 1 */}
      <div className="w-[924px] h-[65px]">
        <h1 className="font-generalSans text-[36px] font-semibold leading-[65px] text-[#FFFFFF]">
          Platform Architecture
        </h1>
      </div>

      {/* Text Box 2 */}
      <div className="w-[788px] h-[78px] mt-4">
        <p className="font-roboto text-[18px] leading-[160%] text-[#B6B6B6]">
          Seamlessly manage on-device AI orchestration with NimbleEdge Cloud
          Service,
          <br />
          and on-device AI execution with the lightweight NimbleEdge SDK
        </p>
      </div>

      {/* PlatformArch Image */}
      <div className="mt-8">
        <img
          src={platformArchImage}
          alt="Platform Architecture"
          className="w-[1330px] h-[716px] rounded-[56px] object-contain border"
          style={{
            borderWidth: "1px",
            borderColor: "rgba(255, 255, 255, 0.05)", // Adjusts stroke opacity to 5%
          }}
        />
      </div>
    </div>
  );
};

export default PlatformArch;
