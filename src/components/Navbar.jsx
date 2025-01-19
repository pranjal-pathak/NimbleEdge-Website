import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link from react-router-dom
import logo from "/src/assets/logo.svg";
import NavSolBg from "/src/assets/navbarSolutions.png";
import navecomm from "/src/assets/nav-e-comm.svg";
import gaming from "/src/assets/nav-media.svg";
import media from "/src/assets/nav-media.svg";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  const location = useLocation(); // Get the current path

  // Map paths to options
  const getSelectedOption = () => {
    if (location.pathname.startsWith("/solutions/ecommerce"))
      return "E-commerce";
    if (location.pathname.startsWith("/solutions/gaming")) return "Gaming";
    if (location.pathname.startsWith("/solutions/media"))
      return "Media & Entertainment";
    return null;
  };

  const selectedOption = getSelectedOption();

  return (
    <nav className="w-[1440px] h-[90px] flex justify-between items-center px-[90px] py-0 mx-auto bg-black text-white ">
      {/* Left: Logo Section */}
      <Link to="/" className="text-[#ECF1F0] text-[16px] leading-[24px]">
        <div className="flex items-center w-[205px] h-[30px]">
          <img
            src={logo}
            alt="Logo"
            className="w-[168px] h-[56px] object-contain"
          />
        </div>
      </Link>

      {/* Middle: Navigation Items */}
      <div className="flex space-x-[20px] items-center font-normal">
        <Link
          to="/platform"
          className="text-[#ECF1F0] text-[16px] leading-[24px]"
        >
          Platform
        </Link>
        <div className="relative group flex items-center">
          <button
            onClick={() => setShowModal(!showModal)}
            className="flex items-center text-[#ECF1F0] text-[16px] leading-[24px]"
          >
            Solutions
            <span className="ml-1">&#9662;</span> {/* Sleeker dropdown arrow */}
          </button>

          {showModal && (
            <div
              className="z-[9999] absolute top-full mt-2 left-0 bg-[url('/assets/solModBg.png')] bg-cover w-[383px]  rounded-bl-[26px] rounded-br-[26px] p-4 flex flex-col gap-5 "
              style={{
                backgroundImage: `url(${NavSolBg})`, // Set background image
                backgroundSize: "cover", // Ensure the image covers the div
                backgroundRepeat: "no-repeat", // Prevent tiling
                backgroundPosition: "center", // Center the image
              }}
            >
              {/* E-commerce Option */}
              <Link to="/solutions/ecommerce">
                <div
                  className={`w-[356px] ${
                    selectedOption === "E-commerce"
                      ? "h-[61px] bg-[#6A6A6A]/[0.17]"
                      : "h-[45px]"
                  } rounded-[10px] flex items-center px-4 transition-all duration-200`}
                  onClick={() => setShowModal(false)}
                >
                  <img src={navecomm} alt="E-commerce" className="mr-[35px]" />
                  <span
                    className={`${
                      selectedOption === "E-commerce"
                        ? "text-[#FFFFFF]"
                        : "text-[#ECF1F0]"
                    }`}
                  >
                    E-commerce
                  </span>
                </div>
              </Link>

              {/* Gaming Option */}
              <Link to="/solutions/gaming">
                <div
                  className={`w-[356px] ${
                    selectedOption === "Gaming"
                      ? "h-[61px] bg-[#6A6A6A]/[0.17]"
                      : "h-[45px]"
                  } rounded-[10px] flex items-center px-4 transition-all duration-200`}
                  onClick={() => setShowModal(false)}
                >
                  <img src={gaming} alt="Gaming" className="mr-[35px]" />
                  <span
                    className={`${
                      selectedOption === "Gaming"
                        ? "text-[#FFFFFF]"
                        : "text-[#ECF1F0]"
                    }`}
                  >
                    Gaming
                  </span>
                </div>
              </Link>

              {/* Media & Entertainment Option */}
              <Link to="/solutions/media">
                <div
                  className={`w-[356px] ${
                    selectedOption === "Media & Entertainment"
                      ? "h-[61px] bg-[#6A6A6A]/[0.17]"
                      : "h-[45px]"
                  } rounded-[10px] flex items-center px-4 transition-all duration-200`}
                  onClick={() => setShowModal(false)}
                >
                  <img
                    src={media}
                    alt="Media & Entertainment"
                    className="mr-[35px]"
                  />
                  <span
                    className={`${
                      selectedOption === "Media & Entertainment"
                        ? "text-[#FFFFFF]"
                        : "text-[#ECF1F0]"
                    }`}
                  >
                    Media & Entertainment
                  </span>
                </div>
              </Link>
            </div>
          )}
        </div>

        <Link to="/about" className="text-[#ECF1F0] text-[16px] leading-[24px]">
          About Us
        </Link>
        <Link to="/" className="text-[#ECF1F0] text-[16px] leading-[24px]">
          Blogs
        </Link>
      </div>

      {/* Right: Contact Us Section */}
      <Link to="/contact-us">
        <div className="w-[205px] flex items-center justify-center px-[24px] py-[13px]">
          <button className="w-[104px] h-[50px] bg-[#5834EE] text-white font-normal text-[16px] leading-[24px] rounded-[10px] hover:bg-opacity-90">
            Contact Us
          </button>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
