import React from "react";
import box1Image from "/src/assets/platform/box1.svg";
import box2Image from "/src/assets/platform/box2.svg";
import box3Image from "/src/assets/platform/box3.svg";
import box4Image from "/src/assets/platform/box4.svg";
import box5Image from "/src/assets/platform/box5.svg";
import box6Image from "/src/assets/platform/box6.svg";
import box7Image from "/src/assets/platform/box7.svg";
import box8Image from "/src/assets/platform/box8.svg";
import box9Image from "/src/assets/platform/box9.svg";
import bg from "/src/assets/fourPowerGradient.png";



const boxData = [
  {
    image: box1Image,
    title: "Built for device diversity",

    descriptionThin:
      "Fully managed, performant on-device inference \nirrespective of OS, device \nmanufacturer and AI/ ML model",
  },
  {
    image: box2Image,
    title: "Lightweight SDK",

    descriptionThin:
      "Ultra-small ~200 KB on-device SDK to minimize concerns around app size and footprint constraints",
  },
  {
    image: box3Image,
    title: "Unlimited inference per user",

    descriptionThin:
      "Beat exploitative per token/ per API call pricing on cloud with unlimited inference calls per user at no additional charges",
  },
  {
    image: box4Image,
    title: "Rapid app integration",

    descriptionThin:
      "Straightforward, quick app integration with SDK involving only 3 APIs (Initialize, Ingest and Inference)",
  },
  {
    image: box5Image,
    title: "Over the air updates",

    descriptionThin:
      "Seamlessly update on-device models and scripts, with app updates and asset updates completely decoupled",
  },
  {
    image: box6Image,
    title: "Python-like scripting engine",

    descriptionThin:
      "Use Python to define on-device data processing operations on raw real-time user data, with no learning curve",
  },
  {
    image: box7Image,
    title: "Device-cloud data sync",

    descriptionThin:
      "Sync on-device and server data as needed - send clickstream data to cloud, or import global features to edge devices",
  },
  {
    image: box8Image,
    title: "Flexible event ingestion",

    descriptionThin:
      "Easily select or unselect the real-time user interactions to be ingested and/ or sent to cloud stores for experimentation",
  },
  {
    image: box9Image,
    title: "Role-based access control",

    descriptionThin:
      "Exercise complete control on usage permissions with provisions for role-based access and approval workflows",
  },
];

const FeatureBox = ({ image, title, descriptionBold, descriptionThin }) => (
  <div
    className="w-[386px] h-[297px] rounded-[18px] relative p-[5px]"
    style={{
      backgroundImage: `url(${bg})`, // Set the background image
      backgroundSize: "cover", // Ensure the image covers the box area
      backgroundPosition: "center",
      border: "1px solid transparent", // To handle border weight
      boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.16)", // Simulate the stroke with opacity
    }}
  >
    <img
      src={image}
      alt={title}
      className="w-[64.98px] h-[68px] absolute top-[20px] left-[20px]"
    />
    <div className="absolute w-[346px] h-[32px] top-[122.5px] left-[20px] text-[24px]  font-semibold font-generalSans text-white">
      {title}
    </div>
    <div className="absolute w-[325px] h-[94px] top-[151px] left-[20px] mt-[20px] text-[18px] font-roboto font-normal leading-[160%] text-white">
      <span className="font-semibold">{descriptionBold}</span>
      <span className="font-thin">{descriptionThin}</span>
    </div>
  </div>
);

const PlatformFeaturesBoxes = () => {
  return (
    <div className="flex flex-col items-center mt-20">
      <div className="grid grid-cols-3 gap-[24px] mt-[64px]">
        {boxData.map((box, index) => (
          <FeatureBox
            key={index}
            image={box.image}
            title={box.title}
            descriptionBold={box.descriptionBold}
            descriptionThin={box.descriptionThin}
          />
        ))}
      </div>
    </div>
  );
};
export default PlatformFeaturesBoxes;
