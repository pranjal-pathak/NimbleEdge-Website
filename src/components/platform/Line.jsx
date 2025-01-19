import React from "react";
import lineImage from "/src/assets/platform/line.svg"; // Adjust the path as necessary

const Line = () => {
  return (
    <div className="flex justify-center items-center my-20">
      <img
        src={lineImage}
        alt="Line"
        width="7"
        height="247"
        
      />
    </div>
  );
};

export default Line;
