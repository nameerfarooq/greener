import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import facebook from "../../assets/icons/facebook.png";
import instagram from "../../assets/icons/instagram.png";
import logo from "../../assets/images/logo.png";
import NavMenu from "./NavMenu";
const Header = () => {
  return (
    <div className="header">
      <div className="top">
        <div className="left">
          <div className="boxes">
            <div className="icon">
              <img src={email} alt="" />
            </div>
            <a href="mailto:info@greener.com.pk">
              <div className="text-1">info@greener.com.pk</div>
            </a>
          </div>
          <div className="boxes">
            <div className="icon">
              <img src={phone} alt="" />
            </div>
            <a href="tel:+922132787711">
              <div className="text-1">+92-21-32787711</div>
            </a>
          </div>
        </div>
        <div className="right">
          <a href="https://www.facebook.com/profile.php?id=61557987998333&mibextid=LQQJ4d">
            <div className="icon">
              <img src={facebook} alt="" />
            </div>
          </a>
          <a href="https://www.instagram.com/greener.pk?igsh=MWdxcnNoZTQwYzN0Nw==">
            <div className="icon">
              <img src={instagram} alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <img src={logo} alt="" />
        </div>
        <div className="right">
          <NavMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
