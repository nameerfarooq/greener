import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/HeaderFooter/Header";
import Home from "./pages/Home/Home";
import Footer from "./components/HeaderFooter/Footer";
import Marquee from "react-fast-marquee";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Products from "./pages/Products/Products";
import ELC from "./pages/ELC/ELC";
import ContactUs from "./pages/Contact/ContactUs";
import Feedback from "./pages/Feedback/Feedback";
import ScrollToTop1 from "./ScrollToTop";
import { AnimatePresence } from "framer-motion";
import Cabling from "./pages/Cabling/Cabling";
import LVCables from "./pages/Products/LVCables";
import ScrollToTop from "react-scroll-to-top";

const App = () => {
  const location = useLocation();
  return (
    <div className="app">
      {/* <Router> */}
      <Header />
      <ScrollToTop1 />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cabling" element={<Cabling />} />
          <Route path="/products" element={<Products />} />
          <Route path="/elc" element={<ELC />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/lvht-cables" element={<LVCables />} />
        </Routes>
      </AnimatePresence>
      <Marquee gradient={true} loop={0} pauseOnHover={true}>
        <div className="marquee">
          {" "}
          HEAL THE WORLD || EFFICIENCY & POWER || GENERATE YOUR OWN POWER ||
          REAP THE RETURNS || GREENER PAKISTAN ||{" "}
        </div>
      </Marquee>
      <Footer />
      {/* </Router> */}
      <ScrollToTop smooth />
    </div>
  );
};

export default App;
