import email from "../../assets/icons/email.png";
import phone from "../../assets/icons/phone.png";
import facebook from "../../assets/icons/facebooknew.png";
import twitter from "../../assets/icons/twitternew.png";
import instagram from "../../assets/icons/instagram.png";
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
  const [showDropDown2, setshowDropDown2] = useState(false);
  const enterShowDropDown = () => {
    setshowDropDown(true);
  };
  const exitShowDropDown = () => {
    setshowDropDown(false);
  };
  const enterShowDropDown2 = () => {
    setshowDropDown2(true);
  };
  const exitShowDropDown2 = () => {
    setshowDropDown2(false);
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
            <a href="tel:+923331111526">
              <div className="text-1">0333-1111526</div>
            </a>
          </div>
        </div>
        <div className="right">
          <abbr title="Facebook">
            <a
              target="_blank"
              href="https://www.facebook.com/profile.php?id=61557987998333&mibextid=LQQJ4d"
            >
              <div className="icon">
                <img src={facebook} alt="" />
              </div>
            </a>
          </abbr>
          <abbr title="Instagram">
            <a
              target="_blank"
              href="https://www.instagram.com/greener.pk?igsh=MWdxcnNoZTQwYzN0Nw=="
            >
              <div className="icon">
                <img src={instagram} alt="" />
              </div>
            </a>
          </abbr>{" "}
          <abbr title="LinkedIn">
            <div className="icon">
              <img src={linkedIn} alt="" />
            </div>
          </abbr>
          <abbr title="X(Twitter)">
            <a href="https://twitter.com/Greener1841567" target="_blank">
              <div className="icon">
                <img src={twitter} alt="" />
              </div>
            </a>
          </abbr>
          <abbr title="Youtube">
            <a href="http://www.youtube.com/@GreenerPk" target="_blank">
              <div className="icon">
                <img src={youtube} alt="" />
              </div>
            </a>
          </abbr>
          <abbr title="Pinterest">
            <a href="http://www.youtube.com/@GreenerPk" target="_blank">
              <div className="icon">
                <img src={youtube} alt="" />
              </div>
            </a>
          </abbr>
        </div>
      </div>
      <div
        className="bottom"
        onMouseLeave={() => {
          exitShowDropDown();
          exitShowDropDown2();
        }}
      >
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
              showDropDown2={showDropDown2}
              enterShowDropDown2={enterShowDropDown2}
              exitShowDropDown2={exitShowDropDown2}
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
