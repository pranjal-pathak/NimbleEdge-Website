import React from "react";
import whoareweBg from "/src/assets/about/whoareweBg.png";

const What = () => {
  return (
    <div
      className="mt-[13px] w-[1330px] h-[350px] mx-auto bg-cover bg-center border border-[rgba(255,255,255,0.2)] rounded-[56px]"
      style={{
        backgroundImage: `url(${whoareweBg})`,
      }}
    >
      {/* Content Wrapper */}
      <div className="py-[40px] px-[10px] text-center">
        {/* Heading */}
        <h1 className="text-[36px] font-semibold leading-[44px] text-[#ECF1F0]">
          What We Do
        </h1>

        {/* Description */}
        <p className="mt-[20px]  h-auto text-[18px] font-regular leading-[35px] text-[#B6B6B6] font-roboto">
          NimbleEdge is an AI platform for delivering real-time personalized
          experiences on-device. NimbleEdge provides state-of-the-art on-device
          GenAI models, <br />
          as well as a comprehensive software suite for continuous deployment,
          event ingestion, model execution, and monitoring.
        </p>
        <button
          className="bg-[#5834EE] text-white text-[16px] font-medium py-4 px-6 rounded-[10px] mt-[37px]"
          style={{ width: "385px" }}
        >
          Learn more about NimbleEdge platform
        </button>
      </div>
    </div>
  );
};

export default What;
