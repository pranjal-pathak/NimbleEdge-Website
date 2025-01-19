import React, { useEffect, useState, useRef } from "react";
import { animate,motion } from "framer-motion"; // Import animate from framer-motion
import rectangleImage from "/src/assets/Rectangle-5934.png"; // Adjust path to your image

// Stat Box Component for Reusability
const StatBox = ({ number, suffix, description, isInView }) => {
  const [count, setCount] = useState(0); // State to track the current count

 useEffect(() => {
   if (isInView) {
     const timeout = setTimeout(() => {
       const controls = animate(count, parseInt(number), {
         duration: 0.75,
         ease: "easeOut",
         onUpdate(value) {
           setCount(value.toFixed(0));
         },
       });
       return () => controls.stop();
     }, 300); // Delay of 300ms

     return () => clearTimeout(timeout); // Clean up timeout
   }
 }, [number, isInView, count]);


  return (
    <div className="flex flex-col items-center h-auto w-[342px] opacity-100">
      <div className="text-[101px] font-bold text-[#FFFFFF] text-center font-roboto flex items-center justify-center">
        <span>{count}</span>
        <span className="text-[#b6b6b6] font-roboto">{suffix}</span>
      </div>
      <div
        className="text-[24px] font-thin  text-[#FFFFFF] text-center"
        style={{ whiteSpace: "pre-line" }} // This will allow line breaks from \n
      >
        {description}
      </div>
    </div>
  );
};

const Stats = () => {
  const statData = [
    {
      number: "10",
      suffix: "B+",
      description: "On-device inference \ncalls executed",
    },
    { number: "10", suffix: "M+", description: "Devices with\nNimbleEdge SDK" },
    {
      number: "50",
      suffix: "B+",
      description: "Real-time user\nevents processed",
    },
  ];

  const statsRef = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    // IntersectionObserver setup
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If the section is in view, set the state to true
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      className="relative flex flex-col items-center mt-[118px] "
      ref={statsRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <img
        src={rectangleImage}
        alt="Background"
        className="w-[1330px] h-[272px] rounded-[56px] object-cover border-[1px] border-[#FFFFFF] border-opacity-[0.2]"
      />
      {/* Stats Box */}
      <div className="absolute flex space-x-[103px] w-[1232px] h-[171px] items-center justify-center top-[50%] transform -translate-y-1/2">
        {statData.map((stat, index) => (
          <StatBox
            key={index}
            number={stat.number}
            suffix={stat.suffix}
            description={stat.description}
            isInView={isInView} // Pass in the visibility state
          />
        ))}
      </div>
    </motion.div>
  );
};

export default Stats;
