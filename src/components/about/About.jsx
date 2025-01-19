import React from "react";
import Navbar from "../Navbar.jsx";
import Header from "./Header.jsx";

import Line from "./Line.jsx";

import Footer from "../Footer.jsx";

import bgImage from "/src/assets/bg-above-the-fold.png";
import Who from "./Who.jsx";
import What from "./What.jsx";
import Investors from "./Investors.jsx";
import Team from "./Team.jsx";
import LearnMore from "./LearnMore.jsx";

const About = () => {
  return (
    <div className="min-h-screen text-white font-raleway">
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
      <Who />
      <Line />
      <What />
      <Line />
      <Investors />
      <Team />
      <LearnMore />
      <Footer />
    </div>
  );
};

export default About;
