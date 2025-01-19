import bg from "/src/assets/platform/bg-above-the-fold.png"; // Adjust path to your image

const Header = () => {
  return (
    <header className="relative flex flex-col items-center justify-center text-center w-[788px] h-[267px] mx-auto mt-[44px]">
      {/* First Text Box */}
      <div className="w-[925px] h-[64px] flex items-top justify-center mb-10">
        <h1 className="font-generalSans font-semibold text-[53px] leading-[65px] text-[#ECF1F0] text-center">
          Scaling AI for billions of users
        </h1>
      </div>

      {/* Second Text Box */}
      <div className="w-[788px] h-auto px-[10px] flex justify-center items-center mt-[10px]">
        <p className="font-roboto text-[18px] leading-[160%] text-[#B6B6B6] text-center">
          AI platform for delivering real-time personalized experiences
          on-device
        </p>
      </div>

      <button
        className="bg-[#5829EE] text-white text-[16px] font-medium py-4 px-6 rounded-[10px] mt-[40px]"
        style={{ width: "190px" }}
      >
        Get In Touch
      </button>
    </header>
  );
};

export default Header;
