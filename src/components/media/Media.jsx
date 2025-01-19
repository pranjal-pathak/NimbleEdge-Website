import React from "react";
import bgImage from "/src/assets/bg-above-the-fold.png";
import Navbar from "../Navbar.jsx";
import Header from "./Header.jsx";
import UseCases from "./UseCases.jsx";
import FourPowers from "/src/components/landing/FourPowers.jsx"
import Solutions from "./Solutions.jsx";
import MLExecution from "../landing/MLExecution.jsx";
import Footer from "../Footer.jsx"
import LearnMore from "./LearnMore.jsx";

const Media = () => {
  return (
    <div className="relative w-full min-h-screen font-generalSans">
      {/* Background image as a pseudo-element */}
      <div
        className="absolute top-0 left-0 w-full h-[900px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "top left",
          backgroundSize: "1440px 900px",
          opacity: 0.8, // Opacity only applies to the background image
          zIndex: -1, // Ensures it sits behind all content
        }}
      ></div>
      <Navbar />
      <Header /> 
      <UseCases />
     <FourPowers />
     <Solutions />
     <MLExecution />
     <LearnMore />
     <Footer />
    </div>
  );
};

export default Media;
