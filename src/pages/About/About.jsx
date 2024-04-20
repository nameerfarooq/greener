import React from "react";
import AboutSection from "../../components/About/AboutSection";
import Features from "../../components/SolutionTypes/Features";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import Counter from "../../components/Counter/Counter";
import Testimonials from "../../components/Testimonials/Testimonials";

const About = () => {
  return (
    <div className="about-page">
      <div className="hero-section">
        <div className="inner">
          <div className="text-20">About us</div>
        </div>
      </div>
      <AboutSection />
      <Features />
      <WorkProcess />
      <Counter />
      <Testimonials />
    </div>
  );
};

export default About;
