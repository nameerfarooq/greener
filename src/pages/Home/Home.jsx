import AboutSection from "../../components/About/AboutSection";
import CEO from "../../components/CEO/CEO";
import Counter from "../../components/Counter/Counter";
import Footer from "../../components/HeaderFooter/Footer";
import Packages from "../../components/Packages/Packages";
import Slider from "../../components/Slider/Slider";
import SolutionTypes from "../../components/SolutionTypes/SolutionTypes";
import WhyUs from "../../components/WhyUs/WhyUs";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Transition from "../../Transition";
const Home = () => {
  return (
    <div className="Home-page">
      <Slider />
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 2,
        }}
      >
        <AboutSection />
      </motion.div>
      <SolutionTypes />
      <WhyUs />
      <Counter />
      <Packages />
      <CEO />
    </div>
  );
};

export default Transition(Home);
