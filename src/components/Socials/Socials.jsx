import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Socials = () => {
  return (
    <>
      <abbr title="Facebook">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61557987998333&mibextid=LQQJ4d"
        >
          <div className="icon">
            <FaFacebook size={22} color="#7Ed957" />
          </div>
        </a>
      </abbr>
      <abbr title="Instagram">
        <a
          target="_blank"
          href="https://www.instagram.com/greener.pk?igsh=MWdxcnNoZTQwYzN0Nw=="
        >
          <div className="icon">
            <FaInstagram size={22} color="#7Ed957" />
          </div>
        </a>
      </abbr>{" "}
      <abbr title="LinkedIn">
        <div className="icon">
          <FaLinkedin size={22} color="#7Ed957" />
        </div>
      </abbr>
      <abbr title="X(Twitter)">
        <a href="https://twitter.com/Greener1841567" target="_blank">
          <div className="icon">
            <FaXTwitter size={22} color="#7Ed957" />
          </div>
        </a>
      </abbr>
      <abbr title="Youtube">
        <a href="http://www.youtube.com/@GreenerPk" target="_blank">
          <div className="icon">
            <FaYoutube size={22} color="#7Ed957" />
          </div>
        </a>
      </abbr>
      <abbr title="Pinterest">
        <a href="http://www.youtube.com/@GreenerPk" target="_blank">
          <div className="icon">
            <FaPinterest size={22} color="#7Ed957" />
          </div>
        </a>
      </abbr>
    </>
  );
};

export default Socials;
