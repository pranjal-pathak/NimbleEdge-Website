import React from "react";
import whoareweBg from "/src/assets/about/whoareweBg.png";

const Who = () => {
  return (
    <div
      className="mt-[344px] w-[1330px] h-[285px] mx-auto bg-cover bg-center border border-[rgba(255,255,255,0.2)] rounded-[56px]"
      style={{
        backgroundImage: `url(${whoareweBg})`,
      }}
    >
      {/* Content Wrapper */}
      <div className="p-10 text-center">
        {/* Heading */}
        <h1 className="text-[36px] font-semibold leading-[44px] text-[#ECF1F0]">
          Who we Are
        </h1>

        {/* Description */}
        <p className="mt-[20px]  text-[18px] font-regular leading-[35px] text-[#B6B6B6] font-roboto">
          NimbleEdge was founded with the aim of scaling the benefits of AI to
          billions of users. Especially with the requirements of GenAI, cloud
          infrastructure <br />
          alone is not capable of achieving this goal, with various challenges
          such as high costs, poor scalability, high latency and privacy
          concerns. NimbleEdge <br />
          enables on-device execution to circumvent these challenges, delivering
          session-aware, cost-efficient real-time AI.
        </p>
      </div>
    </div>
  );
};

export default Who;
