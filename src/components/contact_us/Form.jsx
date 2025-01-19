import React, { useState } from "react";
// import emailjs from "emailjs-com";
import formBg from "/src/assets/contact/formBg.png";
import formImage from "/src/assets/contact/formImage.svg";
import emailjs from "emailjs-com";


const Form = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    jobTitle: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_2207j4h", // Replace with your SERVICE_ID
        "template_v23ne1q", // Replace with your TEMPLATE_ID
        formData,
        "tOc7_HVVrAYctYtPT" // Replace with your USER_ID
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            company: "",
            jobTitle: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          alert("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div
      className="w-[1092px] h-[524px] rounded-[56px] border border-white/5 bg-cover bg-center mt-[67px] mx-auto flex items-center justify-center"
      style={{
        backgroundImage: `url(${formBg})`,
      }}
    >
      <div className="flex gap-[30px]">
        {/* Left Box */}
        <div className="w-[506px] h-[425px] rounded-[16px] flex items-center justify-center from-gray-900 to-gray-800 p-8">
          <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="p-3 rounded-[8px] bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                className="p-3 rounded-[8px] bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                className="p-3 rounded-[8px] bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                placeholder="Job Title"
                className="p-3 rounded-[8px] bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="p-3 rounded-[8px] bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="p-3 rounded-[8px] bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              className="p-3 rounded-[8px] bg-white/5 border border-white/20 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows="4"
            ></textarea>
            <button
              type="submit"
              className="bg-[#5829EE] text-white py-3 rounded-[10px] hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Box */}
        <div className="w-[516px] h-[426px]">
          <img
            src={formImage}
            alt="Form Illustration"
            className="w-full h-full object-cover rounded-[16px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
