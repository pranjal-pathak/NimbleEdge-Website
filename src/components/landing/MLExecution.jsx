import React from "react";
import box1 from "/src/assets/ml-exec-1.svg";
import box2 from "/src/assets/ml-exec-2.svg";
import box3 from "/src/assets/ml-exec-3.svg";
import box4 from "/src/assets/ml-exec-4.svg"
import mlBg from "/src/assets/ml-background.png"

// Reusable Box Component
const ExecutionBox = ({ image, altText, title }) => (
  <div className="flex flex-col items-center w-[260px]">
    <img src={image} alt={altText} className="w-[64.98px] h-[64.49px]" />
    <div
      className="text-center mt-4 text-white font-roboto font-semibold text-[24px] leading-[31px]"
      dangerouslySetInnerHTML={{ __html: title }}
    />
  </div>
);

const MLExecution = () => {
  return (
    <div className="relative flex flex-col items-center mt-[302px]">
      {/* Gradient Box */}
      <div
        className="w-[1330px] h-[381px] rounded-[56px] flex flex-col justify-center items-center p-10 gap-[58px]"
        style={{
          backgroundImage: `url(${mlBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Text Box */}
        <div className="w-[924px] h-[88px] text-center text-[#ECF1F0]  font-semibold text-[36px] leading-[44px] mt-[41px]">
          Streamline the complete on-device AI lifecycle with <br />
          NimbleEdge platform
        </div>

        {/* Boxes Container */}
        <div className="flex justify-between space-x-6  w-full max-w-[1278px]">
          <ExecutionBox
            image={box1}
            altText="Managed deployment and execution"
            title="Pre-shipped Optimized 
            GenAI stack"
          />
          <ExecutionBox
            image={box2}
            altText="Seamless on-device ML orchestration"
            title="Continuous deployment and modeling "
          />

          <ExecutionBox
            image={box3}
            altText="Effortless edge modeling and robust monitoring"
            title="Session-aware<br />Event Ingestion"
          />
          <ExecutionBox
            image={box4}
            altText="Effortless edge modeling and robust monitoring"
            title="Advanced Monitoring and Analytics"
          />
        </div>
      </div>

      {/* Button Below the Gradient Box */}
      <div className="mt-[54px] flex justify-center">
        <button className="w-[382px] h-[56px] bg-[#5834EE] font-generalSans rounded-[10px] text-white text-[16px] font-normal leading-[24px] px-[24px] py-[16px] text-center">
          Learn more about NimbleEdge Platform
        </button>
      </div>
    </div>
  );
};

export default MLExecution;
