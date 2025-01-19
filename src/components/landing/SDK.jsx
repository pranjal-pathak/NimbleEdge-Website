import React, { useState } from "react";
import ArrowIcon from "/src/assets/sdk/arrow.svg";
import ActiveArrowIcon from "/src/assets/sdk/active-arrow.svg";
import UpArrowIcon from "/src/assets/sdk/up-arrow.svg";
import DownArrowIcon from "/src/assets/sdk/down-arrow.svg";
import dataWarehouseLeft from "/src/assets/sdk/data-warehouse-left.svg";
import dataWarehouseLeftActive from "/src/assets/sdk/data-warehouse-left-active.svg";
import dataWarehouseGradient from "/src/assets/sdk/data-warehouse-gradient.png";

import realTimeLeft from "/src/assets/sdk/real-time-left.svg";
import realTimeLeftActive from "/src/assets/sdk/real-time-left-active.svg";
import realTimeGradient from "/src/assets/sdk/real-time-gradient.png";

import onDeviceLeft from "/src/assets/sdk/on-device-left.svg";
import onDeviceLeftActive from "/src/assets/sdk/on-device-left-active.svg";
import onDeviceRagGradient from "/src/assets/sdk/on-device-rag-gradient.png";

import onDeviceGenLeft from "/src/assets/sdk/on-device-gen-left.svg";
import onDeviceGenLeftActive from "/src/assets/sdk/on-device-gen-left-active.svg";
import onDeviceGenGradient from "/src/assets/sdk/on-device-gen-gradient.png";

import inferenceEngineLeft from "/src/assets/sdk/inference-engine-left.svg";
import inferenceEngineLeftActive from "/src/assets/sdk/inference-engine-left-active.svg";
import inferenceEngineGradient from "/src/assets/sdk/inference-engine-gradient.png";

import dataWarehouse from "/src/assets/sdk/data-warehouse.svg";
import dataWarehouseActive from "/src/assets/sdk/data-warehouse-active.svg";
import dataWarehouseActiveGradient from "/src/assets/sdk/data-warehouse-active-gradient.png";

import realTime from "/src/assets/sdk/real-time.svg";
import realTimeActive from "/src/assets/sdk/real-time-active.svg";
import realTimeActiveGradient from "/src/assets/sdk/real-time-active-gradient.png";

import onDevice from "/src/assets/sdk/on-device.svg";
import onDeviceActive from "/src/assets/sdk/on-device-active.svg";
import onDeviceActiveGradient from "/src/assets/sdk/on-device-active-gradient.png";

import onDeviceGen from "/src/assets/sdk/on-device-gen.svg";
import onDeviceGenActive from "/src/assets/sdk/on-device-gen-active.svg";
import onDeviceGenActiveGradient from "/src/assets/sdk/on-device-gen-active-gradient.png";

import inferenceEngine from "/src/assets/sdk/inference-engine.svg";
import inferenceEngineActive from "/src/assets/sdk/inference-engine-active.svg";
import inferenceEngineActiveGradient from "/src/assets/sdk/inference-engine-active-gradient.png";

import { motion } from 'framer-motion';


const leftBoxData = [
  {
    name: "Data Warehouse",
    icon: dataWarehouseLeft,
    iconWidth: "43px",
    iconHeight: "35px",
    activeIcon: dataWarehouseLeftActive,
    activeIconWidth: "43px",
    activeIconHeight: "35px",
    activeBackgroundGradient: dataWarehouseGradient,
    dropdownText:
      "Managed on-device database to easily store real-time user interactions with a single SDK API call",
    dropdownText2:
      "Provisions to seamlessly adjust ingested real-time events with a single-click on/ off toggle",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "Real-time Event Processing",
    icon: realTimeLeft,
    iconWidth: "42px",
    iconHeight: "43px",
    activeIcon: realTimeLeftActive,
    activeIconWidth: "42px",
    activeIconHeight: "43px",
    activeBackgroundGradient: realTimeGradient,
    dropdownText:
      "Session-aware event stream processing using Python APIs with cross-session persistence",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "On-device RAG",
    icon: onDeviceLeft,
    iconWidth: "47px",
    iconHeight: "44px",
    activeIcon: onDeviceLeftActive,
    activeIconWidth: "35px",
    activeIconHeight: "35px",
    activeBackgroundGradient: onDeviceRagGradient,
    dropdownText:
      "Full support for RAG and VectorDB on-device for use-case customization",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "On-device Gen AI Models",
    icon: onDeviceGenLeft,
    iconWidth: "47px",
    iconHeight: "47px",
    activeIcon: onDeviceGenLeftActive,
    activeIconWidth: "47px",
    activeIconHeight: "47px",
    activeBackgroundGradient: onDeviceGenGradient,
    dropdownText:
      "Pre-shipped state-of-the art on-device GenAI models with support for LoRA fine tuning",
    dropdownText2:
      "On the fly asset deployment to devices with progressive rollout support",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
  {
    name: "Inference Engine",
    icon: inferenceEngineLeft,
    iconWidth: "46px",
    iconHeight: "46px",
    activeIcon: inferenceEngineLeftActive,
    activeIconWidth: "46px",
    activeIconHeight: "46px",
    activeBackgroundGradient: inferenceEngineGradient,
    dropdownText:
      "High performance managed on-device inference across AI models",
    dropdownText2:
      "Optimized, low-latency execution with minimal resource usage (e.g. RAM, battery) across device models",
    lineStartGradient: "#4BBEFF",
    lineEndGradient: "#6565FF",
  },
];


const boxData = [
  {
    name: "Data Warehouse",
    icon: dataWarehouse,
    activeIcon: dataWarehouseActive, // Active icon
    iconWidth: "44px",
    iconHeight: "36px",
    text: "Data\nWarehouse",
    textWidth: "118px",
    textHeight: "54px",
    activeBackgroundImage: dataWarehouseActiveGradient,
  },
  {
    name: "Real-time Event Processing",
    icon: realTime,
    activeIcon: realTimeActive, // Active icon
    iconWidth: "31.12px",
    iconHeight: "37px",
    text: "Real-time\nEvent Processing",
    textWidth: "118px",
    textHeight: "54px",
    activeBackgroundImage: realTimeActiveGradient,
  },
  {
    name: "On-device RAG",
    icon: onDevice,
    activeIcon: onDeviceActive, // Active icon
    iconWidth: "38px",
    iconHeight: "38px",
    text: "On-device\nRAG",
    textWidth: "118px",
    textHeight: "54px",
    activeBackgroundImage: onDeviceActiveGradient,
  },
  {
    name: "On-device Gen AI Models",
    icon: onDeviceGen,
    activeIcon: onDeviceGenActive, // Active icon
    iconWidth: "35px",
    iconHeight: "35px",
    text: "On-device\nGen AI Models",
    textWidth: "118px",
    textHeight: "54px",
    activeBackgroundImage: onDeviceGenActiveGradient,
  },
  {
    name: "Inference Engine",
    icon: inferenceEngine,
    activeIcon: inferenceEngineActive, // Active icon
    iconWidth: "40px",
    iconHeight: "40px",
    text: "Inference Engine",
    textWidth: "118px",
    textHeight: "22px",
    activeBackgroundImage: inferenceEngineActiveGradient,
  },
];


const SdkItem = ({
  icon,
  iconWidth,
  iconHeight,
  activeIcon,
  activeIconWidth,
  activeIconHeight,
  activeBackgroundGradient,
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
            backgroundImage: isSelected
              ? `url(${activeBackgroundGradient})`
              : "none",
            backgroundColor: isSelected ? "transparent" : "#6a6a6a17",
          }}
        >
          <img
            src={isSelected ? activeIcon : icon}
            alt={`${text} Icon`}
            width={isSelected ? activeIconWidth : iconWidth}
            height={isSelected ? activeIconHeight : iconHeight}
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

      {/* Arrow Icon */}
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

        {/* Conditional Divider Line */}
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
          : "#383856", // Default line color if not selected
      }}
    ></div>
  </div>
);

const RightBox = ({ selected, handleSelect }) => {
  return (
    <motion.div
      className="flex justify-center items-center"
      style={{
        backgroundColor: "#000000",
        width: "884px",
        height: "494px",
        borderTopLeftRadius: "66px",
        borderBottomLeftRadius: "66px",
        border: "7px solid #0f0f1f",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-end items-center w-full pr-6">
        {boxData.map((box, index) => (
          <div className="flex items-center" key={index}>
            {/* Box */}
            <motion.div
              className="flex flex-col items-center justify-center"
              style={{
                backgroundColor: selected === box.name ? "transparent" : "",
                backgroundImage:
                  selected === box.name
                    ? `url(${box.activeBackgroundImage})`
                    : "",
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "119px",
                height: "205px",
                border: selected === box.name ? "none" : "1px solid #383856",
                borderRadius: "19px",
                transition:
                  "background-color 0.3s ease-in-out, background-image 0.3s ease-in-out, border 0.3s ease-in-out",
                boxSizing: "border-box",
                cursor: "pointer", // Add this line to change cursor on hover
              }}
              onClick={() => handleSelect(box.name)} // Call handleSelect on click
              whileHover={{ scale: 1.05 }} // Scale on hover
            >
              <motion.img
                src={selected === box.name ? box.activeIcon : box.icon}
                alt={`${box.name} Icon`}
                width={box.iconWidth}
                height={box.iconHeight}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div
                className="text-center mt-4"
                style={{
                  width: box.textWidth,
                  height: box.textHeight,
                  fontFamily: "General Sans, sans-serif",
                  fontSize: "14px",
                  lineHeight: "21px",
                  color: selected === box.name ? "#FFFFFF" : "#383856",
                  fontWeight: "500",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {box.text.split("\n").map((line, index) => (
                  <div key={index}>{line}</div>
                ))}
              </div>
            </motion.div>

            {/* Arrow between boxes */}
            {index < boxData.length - 1 && (
              <motion.img
                src={
                  selected === boxData[index + 1].name
                    ? ActiveArrowIcon
                    : ArrowIcon
                }
                alt="Arrow"
                style={{
                  margin: "0", // Ensures no extra spacing is added
                  padding: "0", // Ensures no extra spacing is added
                  height: "126px",
                }}
                initial={{ opacity: 0.5 }}
                animate={{ opacity: selected === boxData[index + 1].name ? 1 : 0.5 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

const SDK = () => {
  const [selected, setSelected] = useState("Data Warehouse"); // Set default to "Inference Engine"

  const handleSelect = (text) => {
    setSelected((prevSelected) => (prevSelected === text ? "" : text));
  };

  return (
    <div className="flex flex-col items-center mt-[366px]">
      <div className="w-[940px] h-auto p-2.5 text-center">
        <h1
          className="text-[36px] font-bold leading-[50px] text-[#ECF1F0]"
          
        >
          Unlock real-time personalization with
        </h1>
        <h2
          className="text-[36px] font-bold leading-[50px] text-[#B6B6B6]"
          
        >
          NimbleEdge Platform
        </h2>
      </div>

      <div
        className="flex mt-36 ml-20"
        style={{ width: "1382px", height: "602px" }}
      >
        <div className="w-[467px] flex flex-col gap-4">
          {leftBoxData.map((box) => (
            <SdkItem
              key={box.name}
              icon={box.icon}
              iconWidth={box.iconWidth}
              iconHeight={box.iconHeight}
              activeIcon={box.activeIcon}
              activeIconWidth={box.activeIconWidth}
              activeIconHeight={box.activeIconHeight}
              activeBackgroundGradient={box.activeBackgroundGradient}
              text={box.name}
              isSelected={selected === box.name}
              onClick={handleSelect} // Pass handleSelect to SdkItem as well
              dropdownText={box.dropdownText}
              dropdownText2={box.dropdownText2}
              lineStartGradient={box.lineStartGradient}
              lineEndGradient={box.lineEndGradient}
            />
          ))}
        </div>

        <div className="flex-1 flex items-center justify-center ml-6">
          <RightBox selected={selected} handleSelect={handleSelect} />
          
        </div>
      </div>
    </div>
  );
};

export default SDK;














// const SdkItem = ({
//   icon,
//   iconWidth,
//   iconHeight,
//   activeIcon,
//   activeIconWidth,
//   activeIconHeight,
//   activeBackgroundGradient,
//   text,
//   isSelected,
//   onClick,
//   dropdownText,
//   dropdownText2,
//   lineStartGradient,
//   lineEndGradient,
// }) => (
//   <div onClick={() => onClick(text)} className="cursor-pointer bg-transparent">
//     <div className="flex items-center justify-between w-[427.84px] h-[64.49px] mb-2">
//       <div className="flex items-center">
//         <div
//           className="w-[64.98px] h-[64.49px] rounded-full flex items-center justify-center bg-cover bg-center"
//           style={{
//             backgroundImage: isSelected
//               ? `url(${activeBackgroundGradient})`
//               : "none",
//             backgroundColor: isSelected ? "transparent" : "#6a6a6a17",
//           }}
//         >
//           <img
//             src={isSelected ? activeIcon : icon}
//             alt={`${text} Icon`}
//             width={isSelected ? activeIconWidth : iconWidth}
//             height={isSelected ? activeIconHeight : iconHeight}
//           />
//         </div>

//         <div
//           className={`ml-4 w-[326.47px] h-[45px] font-medium text-[24px] leading-[35px] text-left ${
//             isSelected ? "text-white" : "text-[#383856]"
//           }`}
//           style={{ fontFamily: "General Sans, sans-serif" }}
//         >
//           {text}
//         </div>
//       </div>

//       {/* Arrow Icon */}
//       <img
//         src={isSelected ? UpArrowIcon : DownArrowIcon}
//         alt="Arrow Icon"
//         className="w-[8.92px] h-[16.84px]"
//       />
//     </div>

//     {/* Animate dropdown text */}
//     {isSelected && (
//       <motion.div
//         className="ml-2 mt-2 text-[#B6B6B6] text-[16px] leading-[24px] w-[438px]"
//         initial={{ opacity: 0, y: -2 }} // Initial state (invisible and slightly above)
//         animate={{ opacity: 1, y: 0 }} // Animate to visible and original position
//         exit={{ opacity: 0, y: 2 }} // Animate out when unselected
//         transition={{ duration: 0.5 }} // Duration of animation
//       >
//         <p className="mb-4 font-roboto text-[18px] leading-[31px] text-[#B6B6B6]">
//           {dropdownText}
//         </p>

//         {/* Conditional Divider Line */}
//         {dropdownText2 && (
//           <>
//             <div className="w-[467px] h-[1px] bg-white opacity-10 my-2"></div>
//             <p className="mt-4 mb-4 font-roboto text-[18px] leading-[31px] text-[#B6B6B6]">
//               {dropdownText2}
//             </p>
//           </>
//         )}
//       </motion.div>
//     )}

//     <div
//       className="w-full h-[1px]"
//       style={{
//         background: isSelected
//           ? `linear-gradient(to right, ${lineStartGradient}, ${lineEndGradient})`
//           : "#383856", // Default line color if not selected
//       }}
//     ></div>
//   </div>
// );