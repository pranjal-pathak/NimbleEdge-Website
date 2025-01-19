import React from "react";
import logo from "/src/assets/logo.svg"; // Adjust the path to your logo
import linkedinIcon from "/src/assets/linkedIn.svg"; // Adjust for LinkedIn icon
import twitterIcon from "/src/assets/twitter.svg"; // Adjust for Twitter icon

const Footer = () => {
  return (
    <footer className="w-[1440px] h-[297px] bg-black text-white p-20 flex justify-between mx-auto mt-40">
      {/* Left Box */}
      <div className="flex flex-col ">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img
            src={logo}
            alt="NimbleEdge Logo"
            className="w-[168px] h-[56px]"
          />
        </div>
        {/* Social Icons */}
        <div className="ml-[12px] flex space-x-4 items-center w-[132px] h-[24px] mt-[23px]">
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="w-[38px] h-[38px]"
            />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <img
              src={twitterIcon}
              alt="Twitter"
              className="w-[22px] h-[22px]"
            />
          </a>
        </div>

        <p className=" ml-[12px] mt-[32px] text-[#B6B6B6] text-sm">
          © 2024 NimbleEdge Inc. All rights reserved
        </p>
      </div>

      {/* Right Box */}
      <div className="w-[732px] h-[197px] flex justify-end items-end">
        <div className="flex space-x-[140px]">
          {/* Solutions List */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-lg font-bold">Solutions</h3>
            <a href="#" className="text-[#B6B6B6] hover:text-white">
              Gaming
            </a>
            <a href="#" className="text-[#B6B6B6] hover:text-white">
              E-commerce
            </a>
            <a href="#" className="text-[#B6B6B6] hover:text-white">
              Media & Entertainment
            </a>
          </div>

          {/* Company List */}
          <div className="flex flex-col space-y-3">
            <h3 className="text-white text-lg font-bold">Company</h3>
            <a href="#" className="text-[#B6B6B6] hover:text-white">
              Platform
            </a>
            <a href="#" className="text-[#B6B6B6] hover:text-white">
              About Us
            </a>
            <a href="#" className="text-[#B6B6B6] hover:text-white">
              Blogs
            </a>
            <a href="#" className="text-[#B6B6B6] hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
