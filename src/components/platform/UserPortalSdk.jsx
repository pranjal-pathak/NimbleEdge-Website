import React, { useState } from "react";
import UpArrowIcon from "/src/assets/sdk/up-arrow.svg";
import DownArrowIcon from "/src/assets/sdk/down-arrow.svg";

import pipelineManagement from "/src/assets/platform/pipeline-management.svg";
import cloudIntegrations from "/src/assets/platform/cloud-integrations.svg";
import smartRouting from "/src/assets/platform/smart-routing.svg";

import userPortalRight from "/src/assets/platform/user-portal-right.svg";
import edgeModeling from "/src/assets/platform/edge-modeling.svg"
import userDataIngestion from "/src/assets/platform/user-data-ingestion.svg";
import monAndana from "/src/assets/platform/monitoring-and-analytics.svg";




const leftBoxData = [
  {
    name: "On-device Modeling",
    icon: edgeModeling,
    iconWidth: "45px",
    iconHeight: "45px",
    activeIcon: edgeModeling,
    dropdownText:
      "Deploy models written in any framework (PyTorch, \nTensorFlow, ONNX, Numpy, XGBoost) with no extra \neffort for on-device modeling, including LoRA adapters",

    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "User data ingestion",
    icon: userDataIngestion,
    iconWidth: "45px",
    iconHeight: "45px",
    activeIcon: userDataIngestion,
    dropdownText:
      "Seamless import of user session clickstream data to \ncloud data stores for real-time AI experimentation",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "Monitoring and \nAnalytics",
    icon: monAndana,
    iconWidth: "45px",
    iconHeight: "45px",
    activeIcon: monAndana,
    dropdownText:
      "Cohort-based verbose logs and insightful dashboards, \nproviding complete visibility into existing on-device \ndeployments",
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
    src={userPortalRight}
    alt="Right Box"
    width="746"
    height="395"
    style={{
      borderRadius:"16px",
      border: "1px solid rgba(255, 255, 255, 0.05)",
      boxSizing: "border-box",
    }}
  />
);

const UserPortalSdk = () => {
  const [selected, setSelected] = useState("On-device Modeling");

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

export default UserPortalSdk;
