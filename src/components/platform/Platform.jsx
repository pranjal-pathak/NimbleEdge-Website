import React from "react";
import Navbar from "../Navbar";
import Header from "./Header";
import Hero from "./Hero";
import PlatformArch from "./PlatformArch";
import NimbleEdgeSdk from "./NimbleEdgeSdk";
import SdkPlatform from "./SdkPlatform";
import Line from "./Line";
import CloudService from "./CloudService";
import CloudSDK from "./CloudIntegration"
import UserPortal from "./UserPortal";
import UserPortalSdk from "./UserPortalSdk";
import Footer from "../Footer";
import PlatformFeaturesBoxes from "./PlatformFeaturesBoxes";
import Solutions from "./Solutions.jsx";
import FourPowers from "./FourPowers.jsx"
import PlatformFeatures from "./FeaturesPlatform.jsx";

import bgImage from "/src/assets/bg-above-the-fold.png";



const Platform = () => {
  return (
    <div className="min-h-screen text-white font-raleway">
      <div
        className="absolute top-0 left-0 w-full h-[900px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "top left",
          backgroundSize: "1440px 900px",
          opacity: .8, // Opacity only applies to the background image
          zIndex: -1, // Ensures it sits behind all content
        }}
      ></div>
        <Navbar />
        <Header />
        <Hero />
        <PlatformArch />
        <NimbleEdgeSdk />
        <SdkPlatform />
        <Line />
        <CloudService />
        <CloudSDK />
        <Line />
        <UserPortal />
        <UserPortalSdk />
        <PlatformFeatures />
        <PlatformFeaturesBoxes />
        <Solutions />
        <FourPowers />
        <Footer />
    </div>
  );
};

export default Platform;
