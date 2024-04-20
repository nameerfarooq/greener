import React from "react";

const HeroSection = ({ text }) => {
  return (
    <div className="hero-section">
      <div className="inner">
        <div className="text-20">{text}</div>
      </div>
    </div>
  );
};

export default HeroSection;
