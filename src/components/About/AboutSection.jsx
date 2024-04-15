import leaf2 from "../../assets/icons/leaf2.png";
const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="inner">
        <div className="left">
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>
        </div>
        <div className="right">
          <div className="text-5">
            About <span className="green"> Greener</span> Pakistan
          </div>
          <div className="text-7">
            Greener is more than just a solar company; we're your partners in
            embracing sustainable energy solutions. Specializing in solar
            panels, inverters, and battery storage, we aim to revolutionize
            clean energy adoption while offering cost-efficient solutions to
            all. We are devoted to ensuring that every component of our
            technology maximizes energy output, allowing individuals and
            communities to confidently transition to renewable energy sources.
          </div>
          <div className="text-7">
            Greener is more than just solar products; it is also an investment
            in a brighter, greener future for generations to come.{" "}
          </div>
          <div className="points">
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">Solar Inverter Setup</div>
            </div>
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">Battery Storage Solutions</div>
            </div>
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">Solar Material Financing</div>
            </div>
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">24 X 7 Call & Chat Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
