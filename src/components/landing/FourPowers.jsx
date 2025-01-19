
import revenue from "/src/assets/revenue.svg"
import cloudCost from "/src/assets/cloud-cost-red.svg"
import scale from "/src/assets/scale.svg"
import userPrivacy from "/src/assets/user-privacy.svg"
import bg from "/src/assets/fourPowerGradient.png";

const boxData = [
  {
    image: revenue,
    title: "Revenue Uplift",
    descriptionBold: "",
    descriptionThin:
      "With enhanced user experience \nwith AI based session-aware \npersonalization",
  },
  {
    image: cloudCost,
    title: "Cloud Cost Reduction",
    descriptionBold: "",
    descriptionThin:
      "Cut AI infrastructure costs by \nmore than 50% by using the \nNimbleEdge on-device AI stack",
  },
  {
    image: scale,
    title: "Scalability",
    descriptionBold: "",
    descriptionThin:
      "Handle rapid traffic surges \nwithout operational complexity \nor degrading user experiences ",
  },
  {
    image: userPrivacy,
    title: "User Privacy",
    descriptionBold: "",
    descriptionThin:
      "Enhance privacy posture by \nlimiting sensitive user data sent \nto cloud servers ",
  },
];

const FeatureBox = ({ image, title, descriptionBold, descriptionThin }) => (
  <div
    className="w-[297px] h-[296px] rounded-[18px] relative p-[5px]"
    style={{
      backgroundImage: `url(${bg})`, // Set the background image
      backgroundSize: "cover", // Ensure the image covers the box area
      backgroundPosition: "center",
      border: "1px solid transparent", // To handle border weight
      boxShadow: "inset 0 0 0 1px rgba(255, 255, 255, 0.16)", // Simulate the stroke with opacity
    }}
  >
    <img
      src={image}
      alt={title}
      className="w-[64.98px] h-[68px] absolute top-[20px] left-[20px]"
    />
    <div className="absolute w-[260px] h-[32px] top-[122.5px] left-[20px] text-[24px]  font-semibold font-generalSans text-white">
      {title}
    </div>
    <div className="absolute w-[260px] h-[121px] top-[151px] left-[20px] mt-[20px] text-[18px] font-roboto font-normal leading-[160%] text-white">
      <span className="font-semibold">{descriptionBold}</span>
      <span className="font-thin">{descriptionThin}</span>
    </div>
  </div>
);




const FourPowers = () => {
  return (
    <div className="flex flex-col items-center mt-[305px]">
      {/* First Line */}
      <h1 className="w-[1260px] h-[32px] text-[36px] font-normal leading-[32px] text-[#ECF1F0] text-center">
        Curate real-time personalized experiences with on-device AI that
        delivers...
      </h1>
      
        {/* Boxes with margin of 64px */}
        <div className="flex justify-between mt-[64px] space-x-[24px] w-[1278px] h-[296px]">
          {boxData.map((box, index) => (
            <FeatureBox
              key={index}
              image={box.image}
              title={box.title}
              descriptionBold={box.descriptionBold}
              descriptionThin={box.descriptionThin}
            />
          ))}
        </div>
      </div>
   
  );
};

export default FourPowers;
