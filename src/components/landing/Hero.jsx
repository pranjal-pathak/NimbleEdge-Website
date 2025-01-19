import heroImage from "/src/assets/hero.svg"; // Adjust the path to your image

const Hero = () => {
  return (
    <div className="mt-[118px] w-[1154px] h-[883px] rounded-[30px] overflow-hidden mx-auto">
      <img 
        src={heroImage} 
        alt="Hero" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
};

export default Hero;
