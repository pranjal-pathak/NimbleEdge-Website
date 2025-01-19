import React, { useState } from "react";
import solutionsBg from "../../assets/solutions-bg.png";
import ecommerceImage from "../../assets/e-commerce.svg";
import gaming from "../../assets/gaming.svg";
import inactiveMask from "../../assets/inactive_mask.png";
import media from "../../assets/media&entertainment.svg";
import genAI from "../../assets/genAI.png";
import leftArrow from "/src/assets/sol-left-arrow.png";
import rightArrow from "/src/assets/sol-right-arrow.png";

const Solutions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleLeftClick = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 2));
  };

  const handleRightClick = () => {
    setCurrentIndex((prev) => (prev < 2 ? prev + 1 : 0));
  };

  const boxWidth = 889; // Width of each box
  const boxMarginRight = 250; // Consistent margin between boxes
  const translateXValue = (boxWidth + boxMarginRight) * currentIndex; // Adjusted translation

  return (
    <div className="flex flex-col items-center mt-[342px] space-y-8">
      <div
        className="relative w-[1330px] h-[1001px] bg-cover bg-center rounded-[56px] border-1 border-white border-opacity-10"
        style={{ backgroundImage: `url(${solutionsBg})`, opacity: 1 }}
      >
        <div
          className="absolute left-6 top-[55%] transform -translate-y-1/2 flex items-center justify-center w-[12px] h-[18px] bg-transparent text-[#6565FF] opacity-100 cursor-pointer z-10"
          onClick={handleLeftClick}
        >
          <img src={leftArrow} />
        </div>

        <div
          className="absolute right-10 top-[55%] transform -translate-y-1/2 flex items-center justify-center w-[12px] h-[18px] bg-transparent text-[#6565FF] opacity-100 cursor-pointer z-10"
          onClick={handleRightClick}
        >
          <img src={rightArrow} />
        </div>

        <div className="h-full p-10">
          <div className="w-[1244px] bg-transparent h-[29px] text-[#b6b6b6] text-left font-roboto text-[18px] tracking-[0] p-2">
            SOLUTIONS
          </div>

          <div className="w-[1256px] h-[64px] p-[10px] bg-transparent text-left mt-[9px]">
            <p className="text-[#ECF1F0] font-generalSans font-semibold text-[36px] leading-[44px]">
              Unleash the power of personalized, real-time AI on device
            </p>
          </div>

          <div className="relative w-[1342px] h-[702px] rounded-md mt-8 overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${translateXValue}px)`,
                gap: `${boxMarginRight}px`, // Consistent gap between boxes
              }}
            >
              {/* Box 1 */}
              <div className="min-w-[889px] h-[574px] rounded-md p-4 flex flex-col mt-8 ">
                <div
                  className="text-[#b6b6b6] opacity-84 font-roboto font-black text-[93px] leading-[24px] mb-16 mt-4"
                  style={{ width: "552px", height: "24px" }}
                >
                  E-Commerce
                </div>

                <div className="flex">
                  <img
                    src={ecommerceImage}
                    alt="E-Commerce"
                    className="w-[302px] h-[486px] mr-14"
                  />

                  <div className="flex flex-col justify-center space-y-4">
                    <div
                      className="bg-transparent text-left text-[#ffffff] font-generalSans font-medium text-[24px] leading-[35px] p-2"
                      style={{ width: "498px", height: "102px" }}
                    >
                      Read your users' mind with personalized, truly
                      real-timeGenAI augmented search, copilot and product
                      recommendations
                    </div>

                    <div className="w-[423px] h-[114px] bg-transparent text-left text-[#b6b6b6] font-roboto font-normal text-[18px] leading-[31px] p-2">
                      <div className="w-[423px] h-[93px]">
                        Boost conversion and average order value by delivering
                        tailored, Gen AI powered user experiences, that adapt in
                        real-time based on user behavior
                      </div>
                    </div>
                    <div className="px-4">
                      <button
                        className="bg-[#5834EE] text-white text-[16px] font-medium py-[13px] px-[24px] rounded-[10px]"
                        style={{ width: "131px" }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2 */}
              <div className="min-w-[889px] h-[574px] rounded-md p-4 flex flex-col mt-8 ">
                <div
                  className="text-[#b6b6b6] opacity-84 font-roboto font-black text-[93px] leading-[24px] mb-16 mt-4"
                  style={{ width: "552px", height: "24px" }}
                >
                  Gaming
                </div>

                <div className="flex">
                  <img
                    src={gaming}
                    alt="gaming"
                    className="w-[302px] h-[486px] mr-14"
                  />

                  <div className="flex flex-col justify-center space-y-4">
                    <div
                      className="bg-transparent text-left text-[#ffffff] font-generalSans font-medium text-[24px] leading-[35px] p-2"
                      style={{ width: "498px", height: "102px" }}
                    >
                      Elevate gamer experience with GenAI augmented copilot and
                      real-time personalized recommendations
                    </div>

                    <div className="w-[423px] h-[114px] bg-transparent text-left text-[#b6b6b6] font-roboto font-normal text-[18px] leading-[31px] p-2">
                      <div className="w-[423px] h-[93px]">
                        Improve gamer engagement and cut dropoff with Gen AI
                        driven experiences, personalized in real-time to
                        incorporate in-session user behavior
                      </div>
                    </div>
                    <div className="px-4">
                      <button
                        className="bg-[#5834EE] text-white text-[16px] font-medium py-[13px] px-[24px] rounded-[10px]"
                        style={{ width: "131px" }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 3 */}
              <div className="min-w-[889px] h-[574px] rounded-md p-4 flex flex-col mt-8 mr-[0px] ">
                <div
                  className="text-[#b6b6b6] opacity-84 font-roboto font-black text-[93px] leading-[24px] mb-16 mt-4"
                  style={{ width: "970px", height: "24px" }}
                >
                  Media & Entertainment
                </div>

                <div className="flex">
                  <img
                    src={media}
                    alt="media"
                    className="w-[545px] h-[486px] mr-0"
                  />

                  <div className="flex flex-col justify-center space-y-4">
                    <div
                      className="bg-transparent text-left text-[#ffffff] font-generalSans font-medium text-[24px] leading-[35px] p-2"
                      style={{ width: "498px", height: "102px" }}
                    >
                      Deliver engaging user experiences with real-time GenAI
                      driven copilot, personalized recommendations & search
                    </div>

                    <div className="w-[423px] h-[114px] bg-transparent text-left text-[#b6b6b6] font-roboto font-normal text-[18px] leading-[31px] p-2">
                      <div className="w-[423px] h-[93px]">
                        Optimize content discovery using Gen AI, with highly
                        personalized user experiences that rapidly adapt to
                        in-session user interactions (e.g. clicks, likes)
                      </div>
                    </div>
                    <div className="px-4">
                      <button
                        className="bg-[#5834EE] text-white text-[16px] font-medium py-[13px] px-[24px] rounded-[10px]"
                        style={{ width: "131px" }}
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 4 */}
              {/* <div className="min-w-[889px] h-[574px] rounded-md p-4 flex flex-col mt-8 ml-[50px]">
                <div
                  className="text-[#b6b6b6] opacity-84 font-roboto font-black text-[93px] leading-[24px] mb-16 mt-4"
                  style={{ width: "970px", height: "24px" }}
                >
                  Generative AI
                </div>

                <div className="flex">
                  <img
                    src={genAI}
                    alt="genAI"
                    className="w-[302px] h-[486px] mr-14"
                  />

                  <div className="flex flex-col justify-center space-y-4">
                    <div
                      className="bg-transparent text-left text-[#ffffff]  font-medium text-[24px] leading-[35px] p-2"
                      style={{ width: "498px", height: "102px" }}
                    >
                      Embed our low-latency and reliable Gen AI APIs to deliver
                      real-time, highly personalized user experiences
                    </div>

                    <div className="w-[423px] h-[114px] bg-transparent text-left text-[#b6b6b6] font-roboto font-normal text-[18px] leading-[31px] p-2">
                      <div className="w-[423px] h-[93px]">
                        Leverage our low-latency, scalable and reliable
                        infrastructure to deliver highly personalized Gen AI
                        driven experiences that adapt in real-time
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            <img
              src={inactiveMask}
              alt="mask"
              className="absolute right-0 bottom-0 h-[732px] opacity-[80%]"
              style={{
                width: currentIndex === 2 ? "0px" : "250px", // Half width when the 3rd box is active
              }}
            />

            {/* Active Line Indicator */}
          </div>
          <div className="flex justify-center mt-10">
            <div className="flex space-x-[16px]">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`rounded-full transition-colors duration-300 ${
                    index === currentIndex ? "bg-[#ffffff]" : "bg-[#252545] "
                  }`}
                  style={{
                    width: "25px",
                    height: "4px", // Small height to make it look like a line
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
