import React from "react";
import AboutSection from "../../components/About/AboutSection";
import Features from "../../components/SolutionTypes/Features";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import Counter from "../../components/Counter/Counter";
import Testimonials from "../../components/Testimonials/Testimonials";
import HeroSection from "../../components/HeroSection";

const About = () => {
  return (
    <div className="about-page">
      <HeroSection text={"About Us"} />
      <AboutSection />
      <Features />
      <WorkProcess />
      <Counter />
      <Testimonials />
    </div>
  );
};

export default About;
