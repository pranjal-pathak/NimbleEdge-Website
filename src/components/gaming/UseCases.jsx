import React from "react";
import useCaseBg from "/src/assets/ecommerce/useCaseBg.png";
import useCaseImage from "/src/assets/gaming/box1.svg";
import useCaseImage2 from "/src/assets/gaming/box2.svg";
import useCaseImage3 from "/src/assets/gaming/box3.svg";
import useCaseImage4 from "/src/assets/gaming/box4.svg"

const UseCases = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-[238px]">
      <div>
        {/* Text Box */}
        <p className="text-[18px] font-roboto text-left ml-[40px] text-white">
          USE CASES
        </p>
        {/* Main UseCases Div */}
        <div
          className="w-[1330px] h-[2428px] rounded-[56px] border border-white/20 bg-cover bg-center mt-[10px] relative flex flex-col items-center pt-[83px] "
          style={{ backgroundImage: `url(${useCaseBg})` }}
        >
          {/* Inner Box 1*/}
          <div className="w-[1257px] h-[440px] flex items-center pl-[70px]">
            {/* Text Section */}
            <div className=" w-[703px] h-[343px] text-white flex flex-col justify-center">
              <div className="w-[647px] h-[343px] flex flex-col">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  GenAI based <br />
                  In-app Co-pilot
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Serve personalized guidance and tips, both prompted and
                  unpprompted, with a GenAI based, session-aware co-pilot
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    up to 10%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    improvement in conversion
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <img
              src={useCaseImage}
              alt="Use Case 1"
              className="w-[407.31px] h-[440px] ml-[-60px]"
            />
          </div>

          {/* Horizontal Line */}
          <div
            className="mt-[96px] w-[1169px] h-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // 20% opacity white
            }}
          ></div>

          {/* Inner Box 2 */}
          <div className="w-[1257px] h-[440px] flex items-center pl-[70px] mt-[96px]">
            {/* Image */}
            <img
              src={useCaseImage2}
              alt="Use Case 1"
              className="w-[407.31px] h-[440px] "
            />
            {/* Text Section */}
            <div className="ml-[202.96px] w-[647px] h-[294px] text-white flex flex-col justify-center">
              <div className="w-[647px] h-[343px] flex flex-col">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  Real-time In-app Purchase <br />
                  Recommendations
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Provide tailored recommendations incorporating in-session{" "}
                  <br />
                  user interactions (e.g. win/loss, purchases)
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    10-15%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    uptick in Gross Merchandise value
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Horizontal Line */}
          <div
            className="mt-[84px] w-[1169px] h-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // 20% opacity white
            }}
          ></div>

          {/* Inner Box 3 */}
          <div className="w-[1257px] h-[440px] flex items-center pl-[70px] mt-[78px]">
            {/* Text Section */}
            <div className=" w-[647px] h-[294px] text-white flex flex-col justify-center">
              <div className="w-[647px] h-[343px] flex flex-col">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  Real-time Personalized Game <br />
                  Recommendations
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Deliver personalized game recommendations that adapt with
                  real-time user actions (e.g. game joins, views)
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    6-8%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    increase in conversion
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <img
              src={useCaseImage3}
              alt="Use Case 1"
              className="w-[373.73px] h-[420px] ml-[-40px]"
            />
          </div>

          {/* Horizontal Line */}
          <div
            className="mt-[118px] w-[1169px] h-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // 20% opacity white
            }}
          ></div>
          {/* Inner Box 4*/}
          <div className="w-[1257px] h-[440px] flex items-center pl-[70px] mt-[83px]">
            {/* Image */}
            <img
              src={useCaseImage4}
              alt="Use Case 1"
              className="w-[445px] h-[320.91px]"
            />
            {/* Text Section */}
            <div className="ml-[120px] w-[591px] h-[301px] text-white flex flex-col justify-center ">
              <div className="w-[555px] h-[343px] flex flex-col ">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  Real-time Personalized <br /> Offers & Promotions
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Leverage real-time user data (e.g. wins/ losses) to
                  <br />
                  showcase offers and promotions geared for conversion
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    {">"}10%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    increase in redemption rates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
