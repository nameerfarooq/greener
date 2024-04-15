import leaf2 from "../../assets/icons/leaf2.png";

const WhyUs = () => {
  return (
    <div className="why-us">
      <div className="inner">
        <div className="left">
          <div className="image1"></div>
          <div className="image2"></div>
          <div className="image3"></div>
        </div>
        <div className="right">
          <div className="text-9">Why Choose us?</div>
          <div className="text-5">
            Elevate Your Choice for a <span className="green"> Greener</span>{" "}
            Tomorrow
          </div>
          <div className="text-7">
            Welcome to a brighter future! Here's why choosing us for your green
            energy needs is the smartest decision{" "}
          </div>
          <div className="points">
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">After Sales Services</div>
            </div>
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">Net Metering</div>
            </div>
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">Commercial Solar Solutions</div>
            </div>
            <div className="point">
              <div className="icon">
                <img src={leaf2} alt="" />
              </div>
              <div className="text-8">Experienced Team</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
