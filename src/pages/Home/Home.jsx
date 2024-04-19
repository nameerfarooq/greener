import AboutSection from "../../components/About/AboutSection";
import CEO from "../../components/CEO/CEO";
import Counter from "../../components/Counter/Counter";
import Footer from "../../components/HeaderFooter/Footer";
import Packages from "../../components/Packages/Packages";
import Slider from "../../components/Slider/Slider";
import SolutionTypes from "../../components/SolutionTypes/SolutionTypes";
import WhyUs from "../../components/WhyUs/WhyUs";
import Marquee from "react-fast-marquee";

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
      <Marquee gradient={true} loop={0} pauseOnHover={true}>
        <div className="marquee">
          HEAL THE WORLD / EFFICIENCY & POWER / GENERATE YOUR OWN POWER / REAP
          THE RETURNS / GREENER PAKISTAN /
        </div>
      </Marquee>
      <Footer />
    </div>
  );
};

export default Home;
