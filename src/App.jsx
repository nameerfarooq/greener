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
import ScrollToTop from "./ScrollToTop";


const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/elc" element={<ELC />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
        </Routes>
        <Marquee gradient={true} loop={0} pauseOnHover={true}>
          <div className="marquee">
            HEAL THE WORLD / EFFICIENCY & POWER / GENERATE YOUR OWN POWER / REAP
            THE RETURNS / GREENER PAKISTAN /
          </div>
        </Marquee>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
