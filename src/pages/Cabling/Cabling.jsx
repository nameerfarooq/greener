import React from "react";
import HeroSection from "../../components/HeroSection";
import leaf2 from "../../assets/icons/leaf2.png";
import one from "../../assets/images/bico.png";
import two from "../../assets/images/locator.png";
import three from "../../assets/images/swg.png";
import four from "../../assets/images/tdr.png";
import greenervid from "../../assets/greenervid.mp4";
const Cabling = () => {
  return (
    <div>
      <HeroSection text={"Greener Power Division"} />
      <div className="power">
        <div className="inner">
          <p className="text-7">
            We possess the expertise, team, and equipment necessary for the
            underground installation, testing, and commissioning of power cables
            ranging from 11 KV to 220 KV. With over 8 years of industry
            experience, we have successfully delivered comprehensive underground
            cable installation solutions to clients such as K-Electric/KESC and
            Maritime Complex MTC
          </p>
        </div>
        <div className="product-items-holder">
          <div className="item">
            <img src={one} />
          </div>
          <div className="item">
            <img src={two} />
          </div>
          <div className="item">
            <img src={three} />
          </div>
          <div className="item">
            <img src={four} />
          </div>
        </div>
        <div className="power">
          <div className="inner">
            <div className="left">
              <div className="image1"></div>
              <div className="image2"></div>
              <div className="image3"></div>
            </div>
            <div className="right">
              <div className="text-9">Greener's</div>
              <div className="text-5">
                Underground Power Cables
                <span className="green"> – Fault Testing & Rectification</span>
              </div>
              <div className="text-7">Our services encompass:</div>
              <div className="points">
                <div className="point">
                  <div className="icon">
                    <img src={leaf2} alt="" />
                  </div>
                  <div className="text-8">
                    Conducting route surveys and strategic planning.
                  </div>
                </div>
                <div className="point">
                  <div className="icon">
                    <img src={leaf2} alt="" />
                  </div>
                  <div className="text-8">
                    Ensuring strict adherence to safety protocols throughout the
                    project duration.
                  </div>
                </div>
                <div className="point">
                  <div className="icon">
                    <img src={leaf2} alt="" />
                  </div>
                  <div className="text-8">
                    Fitting joints and termination kits accurately.
                  </div>
                </div>
                <div className="point">
                  <div className="icon">
                    <img src={leaf2} alt="" />
                  </div>
                  <div className="text-8">
                    Utilizing appropriate excavators, digging tools, rollers,
                    winches, and trolleys tailored to each project's
                    requirements.
                  </div>
                </div>
                <div className="point">
                  <div className="icon">
                    <img src={leaf2} alt="" />
                  </div>
                  <div className="text-8">
                    Employing proper techniques and experienced labor to handle
                    cable testing and rectification, minimizing the risk of
                    conductor breakage.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="last">
        <div className="inner">
          <div className="text-5 center">HOW IT WORKS?</div>
          <video className="videoGreener" controls>
            <source src={greenervid} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Cabling;
