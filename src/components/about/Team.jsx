import React from "react";
import varunImage from "/src/assets/about/varun.svg";
import neerajImage from "/src/assets/about/neeraj.svg";
import linkedInIcon from "/src/assets/about/linkedIn.svg";
import twitterIcon from "/src/assets/about/twitter.svg";

const Team = () => {
  return (
    <div className="mt-[336px] text-center">
      {/* Heading */}
      <h1 className="text-[36px] font-semibold leading-[65px]">
        <span className="text-white">Our </span>
        <span className="text-[#B6B6B6]">Team</span>
      </h1>

      {/* Subheading */}
      <p className="mt-[18px] text-[18px] font-regular leading-[160%] text-[#B6B6B6]">
        Meet NimbleEdge’s leadership team
      </p>

      {/* Team Boxes */}
      <div className="flex justify-center mt-[74px] gap-[57px]">
        {/* Varun Khare Box */}
        <div
          className="w-[248px] h-[388px] rounded-[20.08px] border"
          style={{
            borderWidth: "0.87px",
            borderColor: "rgba(255, 255, 255, 0.2)", // White with 20% opacity
          }}
        >
          {/* Image */}
          <img
            src={varunImage}
            alt="Varun Khare"
            className="w-[248px] h-[260px] rounded-t-[20.08px] object-cover"
          />
          {/* Role */}
          <p className="mt-[14px] text-[14px] font-medium text-[#B6B6B6] leading-auto">
            CEO
          </p>
          {/* Name */}
          <p className="mt-[13.85px] text-[24px] font-medium text-white leading-auto">
            Varun Khare
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center mt-[14px] gap-[15px]">
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="w-[16px] h-[16px]"
            />
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>

        {/* Neeraj Poddar Box */}
        <div
          className="w-[248px] h-[388px] rounded-[20.08px] border"
          style={{
            borderWidth: "0.87px",
            borderColor: "rgba(255, 255, 255, 0.2)", // White with 20% opacity
          }}
        >
          {/* Image */}
          <img
            src={neerajImage}
            alt="Neeraj Poddar"
            className="w-[248px] h-[260px] rounded-t-[20.08px] object-cover"
          />
          {/* Role */}
          <p className="mt-[14px] text-[14px] font-medium text-[#B6B6B6] leading-auto">
            VP of Engineering
          </p>
          {/* Name */}
          <p className="mt-[13.85px] text-[24px] font-medium text-white leading-auto">
            Neeraj Poddar
          </p>
          {/* Social Media Icons */}
          <div className="flex justify-center mt-[14px] gap-[15px]">
            <img
              src={linkedInIcon}
              alt="LinkedIn"
              className="w-[16px] h-[16px]"
            />
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-[16px] h-[16px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
