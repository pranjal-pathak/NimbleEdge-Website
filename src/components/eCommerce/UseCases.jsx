import React from "react";
import useCaseBg from "/src/assets/ecommerce/useCaseBg.png";
import useCaseImage from "/src/assets/ecommerce/useCase1.svg";
import useCaseImage2 from "/src/assets/ecommerce/useCase2.svg";
import useCaseImage3 from "/src/assets/ecommerce/useCase3.svg";
import useCaseImage4 from "/src/assets/ecommerce/useCase4.svg"

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
            {/* Image */}
            <img
              src={useCaseImage}
              alt="Use Case 1"
              className="w-[407.31px] h-[440px]"
            />
            {/* Text Section */}
            <div className="ml-[202.69px] w-[703px] h-[343px] text-white flex flex-col justify-center">
              <div className="w-[647px] h-[343px] flex flex-col">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  GenAI augmented Real-time <br />
                  Personalized Search
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Supercharge discovery with GenAI driven personalized search
                  that truly understands your users' real-time intent
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    up to 20%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    uptick in product views from search results
                  </p>
                </div>
              </div>
            </div>
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
            {/* Text Section */}
            <div className=" w-[647px] h-[294px] text-white flex flex-col justify-center">
              <div className="w-[647px] h-[343px] flex flex-col">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  GenAI based In-App Co-Pilot
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Delight customers with an in-app AI assistant, with full
                  session <br />
                  ‘context capable of real-time generation
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
              src={useCaseImage2}
              alt="Use Case 1"
              className="w-[407.31px] h-[440px] ml-[-60px]"
            />
          </div>
          {/* Horizontal Line */}
          <div
            className="mt-[84px] w-[1169px] h-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // 20% opacity white
            }}
          ></div>
          {/* Inner Box 3*/}
          <div className="w-[1257px] h-[440px] flex items-center pl-[70px] mt-[83px]">
            {/* Image */}
            <img
              src={useCaseImage3}
              alt="Use Case 1"
              className="w-[492px] h-[266px]"
            />
            {/* Text Section */}
            <div className="ml-[120px] w-[591px] h-[301px] text-white flex flex-col justify-center ">
              <div className="w-[555px] h-[343px] flex flex-col ">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  Session-aware <br /> Personalized Homepage
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Deliver tailored homepage feeds incorporating in-session{" "}
                  <br />
                  user-product interactions (e.g. clicks, favourite's)
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    8-10%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    uptick in homepage Gross Merchandise Value (GMV)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Horizontal Line */}
          <div
            className="mt-[118px] w-[1169px] h-[2px]"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)", // 20% opacity white
            }}
          ></div>
          {/* Inner Box 4 */}
          <div className="w-[1257px] h-[440px] flex items-center pl-[70px] mt-[78px]">
            {/* Text Section */}
            <div className=" w-[647px] h-[294px] text-white flex flex-col justify-center">
              <div className="w-[647px] h-[343px] flex flex-col">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  Real-time Personalized Product <br />
                  Recommendations
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Serve personalized product recommendations incorporating
                  session context on checkout, product pages and more
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    up to 20%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    improvement in click through rate
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <img
              src={useCaseImage4}
              alt="Use Case 1"
              className="w-[407.31px] h-[440px] ml-[-40px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseCases;
