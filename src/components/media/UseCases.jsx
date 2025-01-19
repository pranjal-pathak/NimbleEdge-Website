import React from "react";
import useCaseBg from "/src/assets/ecommerce/useCaseBg.png";
import useCaseImage from "/src/assets/media/box1.svg";
import useCaseImage2 from "/src/assets/media/box2.svg";
import useCaseImage3 from "/src/assets/media/box3.svg";
import useCaseImage4 from "/src/assets/media/box4.svg"

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
                  GenAI Augmented Real- <br />
                  Time Personalized Search
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Supercharge content discovery with GenAI driven personalized
                  search that truly understands users' real-time intent
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    up to 20%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    improvement in search ranking metrics
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <img
              src={useCaseImage}
              alt="Use Case 1"
              className="w-[443px] h-[449.28px] ml-[-60px]"
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
              className="w-[550px] h-[447.8px] "
            />
            {/* Text Section */}
            <div className="ml-[140px] w-[647px] h-[294px] text-white flex flex-col justify-center">
              <div className="w-[647px] h-[343px] flex flex-col">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  GenAI based In-App
                  <br />
                  Co-Pilot
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Delight customers with an in-app AI assistant with full
                  in-session
                  <br />
                  context, capable of real-time responses
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    upto 10%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    increase in title page views
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
                  Real-time Personalized
                  <br />
                  Recommendations
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Serve highly personalized recommendations with real-time user
                  interactions fully baked in (e.g. likes, search queries)
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    6-10%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    improvement in ranking metrics
                  </p>
                </div>
              </div>
            </div>
            {/* Image */}
            <img
              src={useCaseImage3}
              alt="Use Case 1"
              className="w-[500px] h-[337.18px] ml-[-40px]"
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
              className="w-[512px] h-[382.47px]"
            />
            {/* Text Section */}
            <div className="ml-[120px] w-[591px] h-[301px] text-white flex flex-col justify-center ">
              <div className="w-[555px] h-[343px] flex flex-col ">
                {/* Text Box 1 */}
                <h2 className="text-[36px] font-generalSans font-semibold text-white leading-[49px] mb-[3px]">
                  Real-time Personalized Feed
                </h2>
                {/* Text Box 2 */}
                <p className="text-[18px] font-roboto text-[#B6B6B6] leading-[28px] w-[517px] mt-[3px]">
                  Deliver tailored feeds that respond to in-session user
                  interactions (e.g. likes, search queries) in real-time
                </p>
                {/* Text Box 3 */}
                <div className="mt-[65px] w-[637px] h-[95px] flex flex-col">
                  <p className="text-[53px] font-roboto font-extrabold text-[#ECF1F0] leading-[65px]">
                    8-10%
                  </p>
                  <p className="text-[20px] font-roboto text-[#B6B6B6] leading-[34px]">
                    increase in user likes
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
