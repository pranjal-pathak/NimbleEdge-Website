import React from "react";
import heroImage from "/src/assets/platform/hero.svg";

const Hero = () => {
  return (
    <div className="flex justify-center mt-20">
      {/* Container for the hero image with a white stroke and border radius */}
      <div
        className="relative w-[1077px] h-[664px] rounded-[25px] overflow-hidden"
        // style={{ border: "1px solid rgba(255, 255, 255, 0.25)" }} // Border with 25% opacity
      >
        <img
          src={heroImage}
          alt="Hero"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
