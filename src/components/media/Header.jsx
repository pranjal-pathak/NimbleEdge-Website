const Header = () => {
  return (
    <header className="relative flex flex-col items-center justify-center text-center w-full max-w-[1440px] mx-auto mt-[98px] px-4">
      {/* First Text Box */}
      <div className="w-full max-w-[924px] flex items-top justify-center">
        <h1 className="font-generalSans font-semibold text-[clamp(30px,_53px,_5vw)] leading-[clamp(40px,_65px,_7vw)] text-[#ECF1F0] text-center">
          On-device Real-time AI Platform for
          <br />
          <span className="text-[#b6b6b6]">Media & Entertainment</span>
        </h1>
      </div>

      {/* Second Text Box */}
      <div className="w-full max-w-[788px] h-auto p-[10px] flex flex-col justify-center items-center mt-[18px]">
        <p className="font-roboto text-[clamp(14px,_18px,_2vw)] leading-[160%] text-[#B6B6B6] text-center">
          Boost user engagement with truly real-time personalized search,
          copilot and more.
        </p>

        <p className="font-roboto text-[clamp(14px,_18px,_2vw)] leading-[160%] text-[#B6B6B6] text-center mt-[30px]">
          Avoid breaking the bank on cloud costs with on-device AI.
        </p>
      </div>

      <button className="bg-[#5829EE] text-white text-[16px] font-medium py-[13px] px-[24px] rounded-[10px] mt-[48px] w-[141px] h-[50px] md:w-[180px] md:h-[60px] md:text-[18px]">
        Contact Us
      </button>
    </header>
  );
};

export default Header;
