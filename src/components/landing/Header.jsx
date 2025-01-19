import React, { useState } from "react";
import bg from "/src/assets/bg-above-the-fold.png"; // Adjust path to your image

const Header = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleVideoOpen = () => setIsVideoOpen(true);
  const handleVideoClose = () => setIsVideoOpen(false);

   const handleIframeLoad = () => {
     setLoading(false); // Set loading to false once the iframe has loaded
   };

  return (
    <header className="relative flex flex-col items-center justify-center text-center w-[788px] h-[332px] mx-auto my-[88px] ">
      {/* Overlay for readability */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center space-y-[20px]">
        <h1 className="w-[940px] h-auto text-[53px] font-semibold leading-[65px] text-[#ECF1F0] text-center px-10 ">
          Scaling AI for Billions of Users
        </h1>

        <div className="w-[788px] h-[78px] mt-2">
          <p className="font-roboto text-[18px] leading-[160%] text-[#B6B6B6] font-normal">
            Platform for orchestrating AI on-device to deliver real-time
            personalized experiences
          </p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center space-x-8">
          <button
            onClick={handleVideoOpen}
            className="bg-[#ffffff] text-[#5829EE] text-[16px] font-medium py-4 px-6 rounded-[10px]"
            style={{ width: "190px" }}
          >
            View Demo Video
          </button>
          <button
            className="bg-[#5829EE] text-white text-[16px] font-medium py-4 px-6 rounded-[10px]"
            style={{ width: "190px" }}
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-20">
          <div className="relative w-[80%] h-[80%] max-w-3xl bg-black rounded-lg overflow-hidden border-4 border-none">
            <button
              onClick={handleVideoClose}
              className="absolute top-4 right-4 bg-gray-700 text-white w-8 h-8 flex items-center justify-center p-0 rounded-full"
            >
              ✕
            </button>

            {/* Loading Spinner */}
            {loading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
                {/* Rotating spinner with two colors */}
                <div className="border-4 border-[#B6B6B6] border-t-4 border-t-[#5829EE] w-16 h-16 rounded-full animate-spin"></div>
              </div>
            )}

            <iframe
              src="https://drive.google.com/file/d/1BwOsdQzwVuj3mvBw9IZIGzIx7Vz5lC6E/preview"
              width="100%"
              height="100%"
              allow="autoplay"
              title="Demo Video"
              allowFullScreen
              className="border-none"
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
