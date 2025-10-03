import React from "react";
import dark_arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className="hero box flex items-center justify-center">
      <div className="hero-text text-center max-w-[800px]">
        <h1 className="text-6xl font-bold">We Ensure better Education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  );
};

export default Hero;
