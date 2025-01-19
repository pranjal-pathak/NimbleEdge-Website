import React from "react";
import featuresBg from "/src/assets/features-bg.png"; // Adjust the path to your image
import certificationImg from "/src/assets/certification.svg"; // Add the certification image

const Features = () => {
  return (
    <div
      className="w-[1330px] h-[188px] rounded-[56px] overflow-hidden mt-40 mx-auto p-10 flex justify-between items-center"
      style={{
        backgroundImage: `url(${featuresBg})`, // Correctly set the background image
        backgroundSize: "cover", // Ensures the image covers the entire box
        backgroundPosition: "center", // Centers the image
      }}
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center">
        <h2 className="text-white font-bold text-[36px] leading-[44px] ">
          Security and Compliance
        </h2>

        <p className="text-[#B6B6B6] font-light text-[18px] leading-[160%] mt-4 p-2 font-roboto">
          NimbleEdge is SOC2 Type-2 and ISO 27001:2022 certified. Your <br />
          data is in good hands, and governed by audited industry best
          practices.
        </p>
      </div>

      {/* Certification Image */}
      <div className="flex-shrink-0">
        <img
          src={certificationImg}
          alt="Certification"
          className="w-[292px] h-[130px] object-contain"
        />
      </div>
    </div>
  );
};

export default Features;
