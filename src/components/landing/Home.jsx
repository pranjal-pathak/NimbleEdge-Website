import React, { Suspense } from "react";
import bgImage from "/src/assets/bg-above-the-fold.png"; // Import the background image

// Lazy load the components
const Navbar = React.lazy(() => import("../Navbar"));
const Header = React.lazy(() => import("./Header"));
const Hero = React.lazy(() => import("./Hero"));
const Stats = React.lazy(() => import("./Stats"));
const FourPowers = React.lazy(() => import("./FourPowers"));
const Solutions = React.lazy(() => import("./Solutions"));
const MLExecution = React.lazy(() => import("./MLExecution"));
const SDK = React.lazy(() => import("./SDK"));
const Features = React.lazy(() => import("./Features"));
const Footer = React.lazy(() => import("../Footer"));

const Home = () => {
  return (
    <div className="relative w-full min-h-screen font-generalSans">
      {/* Background image as a pseudo-element */}
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
      {/* Suspense for lazy-loaded components */}
      <Suspense fallback={<div> </div>}>
        <Navbar /> {/* Navbar stays at the top */}
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Header /> {/* The Header component */}
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Hero /> {/* The Hero component */}
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Stats /> {/* The Stats component */}
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <FourPowers />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Solutions />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <MLExecution />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <SDK />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Features />
      </Suspense>

      <Suspense fallback={<div> </div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
