import React, { useState } from "react";
import UpArrowIcon from "/src/assets/sdk/up-arrow.svg";
import DownArrowIcon from "/src/assets/sdk/down-arrow.svg";
import rightBoxImage from "/src/assets/platform/cloud-int-right-box.svg";
import pipelineManagement from "/src/assets/platform/pipeline-management.svg";
import cloudIntegrations from "/src/assets/platform/cloud-integrations.svg";
import smartRouting from "/src/assets/platform/smart-routing.svg";

const leftBoxData = [
  {
    name: "Pipeline Management",
    icon: pipelineManagement,
    iconWidth: "45px",
    iconHeight: "45px",
    activeIcon: pipelineManagement,
    dropdownText:
      "Seamless serialization and hosting of AI models on-\ndevice, with orchestration control for model execution \nand data flow management",
    dropdownText2:
      "One-click, over the air updates for AI models and data \nprocessing scripts",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "Smart Routing",
    icon: smartRouting,
    iconWidth: "45px",
    iconHeight: "45px",
    activeIcon: smartRouting,
    dropdownText:
      "Automatic routing of complex GenAI queries to more \nsophisticated models on cloud, ensuring stellar \nresponses to each query",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "Cloud Integrations",
    icon: cloudIntegrations,
    iconWidth: "45px",
    iconHeight: "45px",
    activeIcon: cloudIntegrations,
    dropdownText:
      "Pre-built cloud AI and storage integrations (AWS, GCP, \nDatabricks, Azure) to enable use of existing models or \nsync with cloud feature stores",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
];

const SdkItem = ({
  icon,
  iconWidth,
  iconHeight,
  activeIcon,
  text,
  isSelected,
  onClick,
  dropdownText,
  dropdownText2,
  lineStartGradient,
  lineEndGradient,
}) => (
  <div onClick={() => onClick(text)} className="cursor-pointer bg-transparent">
    <div className="flex items-center justify-between w-[427.84px] h-[64.49px] mb-2">
      <div className="flex items-center">
        <div
          className="w-[64.98px] h-[64.49px] rounded-full flex items-center justify-center bg-cover bg-center"
          style={{
            backgroundImage: "none",
            backgroundColor: isSelected ? "transparent" : "#6a6a6a17",
          }}
        >
          <img
            src={isSelected ? activeIcon : icon}
            alt={`${text} Icon`}
            width={iconWidth}
            height={iconHeight}
          />
        </div>
        <div
          className={`ml-4 w-[326.47px] h-[45px] font-medium text-[24px] leading-[35px] text-left ${
            isSelected ? "text-white" : "text-[#383856]"
          }`}
          style={{ fontFamily: "General Sans, sans-serif" }}
        >
          {text}
        </div>
      </div>

      <img
        src={isSelected ? UpArrowIcon : DownArrowIcon}
        alt="Arrow Icon"
        className="w-[8.92px] h-[16.84px]"
      />
    </div>

    {isSelected && (
      <div className="ml-2 mt-2 text-[#B6B6B6] text-[16px] leading-[24px] w-[438px]">
        <p className="mb-4 font-roboto text-[18px] leading-[31px] text-[#B6B6B6]">
          {dropdownText}
        </p>
        {dropdownText2 && (
          <>
            <div className="w-[467px] h-[1px] bg-white opacity-10 my-2"></div>
            <p className="mt-4 mb-4 font-roboto text-[18px] leading-[31px] text-[#B6B6B6]">
              {dropdownText2}
            </p>
          </>
        )}
      </div>
    )}

    <div
      className="w-full h-[1px]"
      style={{
        background: isSelected
          ? `linear-gradient(to right, ${lineStartGradient}, ${lineEndGradient})`
          : "#383856",
      }}
    ></div>
  </div>
);

const RightBox = () => (
  <img
    src={rightBoxImage}
    alt="Right Box"
    width="780"
    height="454"
    style={{
      borderTopLeftRadius: "56px",
      borderBottomLeftRadius: "56px",
      borderTopRightRadius: "0",
      borderBottomRightRadius: "0",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      boxSizing: "border-box",
    }}
  />
);

const CloudSDK = () => {
  const [selected, setSelected] = useState("Pipeline Management");

  const handleSelect = (text) => {
    setSelected((prevSelected) => (prevSelected === text ? "" : text));
  };

  return (
    <div className="flex items-start justify-center mt-16 ml-20 mb-[-100px]">
      <div className="flex" style={{ width: "1382px", height: "602px" }}>
        <div className="w-[467px] flex flex-col gap-4">
          {leftBoxData.map((box) => (
            <SdkItem
              key={box.name}
              icon={box.icon}
              iconWidth={box.iconWidth}
              iconHeight={box.iconHeight}
              activeIcon={box.activeIcon}
              text={box.name}
              isSelected={selected === box.name}
              onClick={handleSelect}
              dropdownText={box.dropdownText}
              dropdownText2={box.dropdownText2}
              lineStartGradient={box.lineStartGradient}
              lineEndGradient={box.lineEndGradient}
            />
          ))}
        </div>
        <div className="flex-1 flex items-start justify-center ml-6">
          <RightBox />
        </div>
      </div>
    </div>
  );
};

export default CloudSDK;
