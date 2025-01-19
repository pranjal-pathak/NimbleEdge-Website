const Header = () => {
  return (
    <header className="relative flex flex-col items-center justify-center text-center w-full max-w-[1440px] mx-auto mt-[98px] px-4">
      {/* First Text Box */}
      <div className="w-full max-w-[924px] flex items-top justify-center">
        <h1 className="font-generalSans font-semibold text-[clamp(30px,_53px,_5vw)] leading-[clamp(40px,_65px,_7vw)] text-[#ECF1F0] text-center">
          Get in Touch
        </h1>
      </div>

      {/* Second Text Box */}
      <div className="w-full max-w-[788px] h-auto p-[10px] flex flex-col justify-center items-center mt-[18px]">
        <p className="font-roboto text-[clamp(14px,_18px,_2vw)] leading-[160%] text-[#B6B6B6] text-center">
          Effortlessly deploy and execute real-time AI models on-device for <br />session-aware, privacy-preserving personalization
        </p>
      </div>

    </header>
  );
};

export default Header;
