import support from "../../assets/icons/1.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="inner">
        <div className="row1">
          <div className="box">
            <div className="left">
              <img src={support} alt="" />
            </div>
            <div className="right">
              <div className="text-16">Support & Email</div>
              <div className="text-17">info@greener.com.pk</div>
            </div>
          </div>
          <div className="box">
            <div className="left">
              <img src={support} alt="" />
            </div>
            <div className="right">
              <div className="text-16">Customer Support</div>
              <div className="text-17">+92 21 32787711, 22, 33, 44</div>
            </div>
          </div>
          <div className="box">
            <div className="left">
              <img src={support} alt="" />
            </div>
            <div className="right">
              <div className="text-16">Our Location</div>
              <div className="text-17">Shahra-e-Faisal, Karachi</div>
            </div>
          </div>
        </div>
        <div className="row2"></div>
      </div>
    </div>
  );
};

export default Footer;
