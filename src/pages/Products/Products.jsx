import React from "react";
import HeroSection from "../../components/HeroSection";
import inverter from "../../assets/images/inverter.png";
import b from "../../assets/images/b.jpg";
import battery from "../../assets/images/battery.webp";
import WorkProcess from "../../components/WorkProcess/WorkProcess";
import Packages from "../../components/Packages/Packages";
import Counter from "../../components/Counter/Counter";
const Products = () => {
  return (
    <div>
      <HeroSection text={"Products"} />
      <div className="products-page">
        <div className="inner">
          <div className="text-5 center">
            We Are Pioneers in The World Of Revewable Energy
          </div>
        </div>
      </div>
      <div className="services-holder">
        <div className="inner">
          <div className="service-card">
            <div className="image-holder">
              <img src={b} alt="" />
            </div>

            <div className="text-6">SOLAR PANELS</div>
            <div className="text-7">
              Harness the power of the sun with cutting-edge solar panels
              designed to maximize energy capture and efficiency
            </div>
          </div>
          <div className="service-card">
            <div className="image-holder">
              <img src={inverter} alt="" />
            </div>
            <div className="text-6">INVERTERS</div>
            <div className="text-7">
              Empower your energy system with our advanced inverters, ensuring
              seamless conversion and utilization of solar power for your needs
            </div>
          </div>
          <div className="service-card">
            <div className="image-holder">
              <img src={battery} alt="" />
            </div>
            <div className="text-6">BATTERIES</div>
            <div className="text-7">
              Store and manage renewable energy effectively with our
              high-performance batteries, providing reliable power even when the
              sun isn't shining
            </div>
          </div>
        </div>
      </div>
      <WorkProcess />
      <Packages />
      <Counter />
      <br /><br /><br /><br />
      <br /><br /><br /><br />
    </div>
  );
};

export default Products;
