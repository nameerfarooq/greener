import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderFooter/Header";
import Home from "./pages/Home/Home";
const App = () => {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<>about</>} />
          <Route path="/services" element={<>services</>} />
          <Route path="/products" element={<>products</>} />
          <Route path="/elc" element={<>energy load calculator</>} />
          <Route path="/contact" element={<>contact</>} />
          <Route path="/feedback" element={<>feedback</>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
