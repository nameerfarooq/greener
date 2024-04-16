import AboutSection from "../../components/About/AboutSection";
import CEO from "../../components/CEO/CEO";
import Counter from "../../components/Counter/Counter";
import Packages from "../../components/Packages/Packages";
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
      <Packages />
      <CEO />
    </div>
  );
};

export default Home;
