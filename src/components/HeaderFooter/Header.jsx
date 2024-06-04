import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import facebook from "../../assets/icons/facebooknew.png";
import twitter from "../../assets/icons/twitternew.png";
import linkedIn from "../../assets/icons/linkedinnew.png";
import youtube from "../../assets/icons/youtubenew.png";
import logo from "../../assets/images/logo.png";
import NavMenu from "./NavMenu";
import ResponsiveNav from "./ResponsiveNav";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [showDropDown, setshowDropDown] = useState(false);
  const enterShowDropDown = () => {
    setshowDropDown(true);
  };
  const exitShowDropDown = () => {
    setshowDropDown(false);
  };
  return (
    <motion.div
      initial={{
        top: -200,
      }}
      animate={{
        top: 0,
      }}
      transition={{
        duration: 0.5,
        delay: 1,
        ease: "backInOut",
      }}
      className="header"
    >
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
          <abbr title="Facebook">
            <a href="https://www.facebook.com/profile.php?id=61557987998333&mibextid=LQQJ4d">
              <div className="icon">
                <img src={facebook} alt="" />
              </div>
            </a>
          </abbr>
          <abbr title="X(Twitter)">
            <div className="icon">
              <img src={twitter} alt="" />
            </div>
          </abbr>
          <abbr title="LinkedIn">
            <div className="icon">
              <img src={linkedIn} alt="" />
            </div>
          </abbr>
          <abbr title="Youtube">
            <div className="icon">
              <img src={youtube} alt="" />
            </div>
          </abbr>
        </div>
      </div>
      <div className="bottom" onMouseLeave={exitShowDropDown}>
        <div className="left">
          <Link to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="right">
          <div className="expanded-menu">
            <NavMenu
              showDropDown={showDropDown}
              enterShowDropDown={enterShowDropDown}
              exitShowDropDown={exitShowDropDown}
            />
          </div>
          <div className="collapsed-menu">
            <ResponsiveNav />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
