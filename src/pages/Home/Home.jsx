import AboutSection from "../../components/About/AboutSection";
import Counter from "../../components/Counter/Counter";
import Slider from "../../components/Slider/Slider";
import SolutionTypes from "../../components/SolutionTypes/SolutionTypes";
import WhyUs from "../../components/WhyUs/WhyUs";

const Home = () => {
  return (
    <div className="Home-page">
      <Slider />
      <AboutSection />
      <SolutionTypes />
      <WhyUs />
      <Counter />
    </div>
  );
};

export default Home;
