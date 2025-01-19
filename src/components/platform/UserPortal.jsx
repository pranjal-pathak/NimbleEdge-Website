import React from "react";

const UserPortal = () => {
  return (
    <div className="mt-10 flex flex-col items-center text-center">
      {/* Text Box 1 */}
      <div className="w-[924px] h-[65px]">
        <h1 className="font-generalSans text-[36px] font-semibold leading-[65px]">
          <span className="text-[#FFFFFF]">NimbleEdge </span>
          <span className="text-[#B6B6B6]">User Portal</span>
        </h1>
      </div>

      {/* Text Box 2 */}
      <div className="w-[788px] h-[78px] mt-4">
        <p className="font-roboto text-[18px] leading-[160%] text-[#B6B6B6] font-light">
          On-device AI experimentation and monitoring platform
        </p>
      </div>
    </div>
  );
};

export default UserPortal;
