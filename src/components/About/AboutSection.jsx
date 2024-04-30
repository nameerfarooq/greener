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
            At Greener Pakistan, we're committed to driving the transition
            towards a cleaner, more sustainable energy future. With our
            innovative solar energy solutions, we empower individuals and
            businesses to harness the abundant power of the sun, reducing their
            carbon footprint and energy costs simultaneously.
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
