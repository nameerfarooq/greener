/* eslint-disable react/prop-types */
import { Link, NavLink } from "react-router-dom";
import ButtonStyle1 from "../Buttons/ButtonStyle1";
const NavMenu = ({
  showDropDown,
  enterShowDropDown,
  exitShowDropDown,
  showDropDown2,
  enterShowDropDown2,
  exitShowDropDown2,
}) => {
  return (
    <div className="menu-items">
      <NavLink to="/home">
        <div
          className="item text-2"
          onMouseEnter={() => {
            exitShowDropDown();
            exitShowDropDown2();
          }}
        >
          Home
        </div>
      </NavLink>
      <NavLink
        to="/about"
        onMouseEnter={() => {
          exitShowDropDown();
          exitShowDropDown2();
        }}
      >
        <div className="item text-2">About Us</div>
      </NavLink>
      <NavLink to="/services">
        <div
          onMouseEnter={() => {
            enterShowDropDown();
            exitShowDropDown2();
          }}
          className="item text-2 drop-down-holder"
        >
          Services
          {showDropDown && (
            <div
              className="drop-down "
              onMouseEnter={() => enterShowDropDown()}
              onMouseLeave={() => exitShowDropDown()}
            >
              <div className="left ">
                <ul>
                  <li>
                    <Link to="/ev" className="text-23">
                      EV Charging
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/#residential-solar" className="text-23">
                      Residential Solar System
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/#commercial-solar" className="text-23">
                      Commercial Solar System
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/#industrial-solar" className="text-23">
                      Industrial Solar System
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/services/#solar-maintainance"
                      className="text-23"
                    >
                      Solar Maintainance & Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="right">
                <ul>
                  <li>
                    <Link to="/cabling" className="text-23">
                      Underground HT/LT Cabling & Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/cabling" className="text-23">
                      HT/LT Cable Jointing
                    </Link>
                  </li>
                  <li>
                    <Link to="/cabling" className="text-23">
                      Sub-Station Service & Maintenance
                    </Link>
                  </li>
                  <li>
                    <Link to="/cabling" className="text-23">
                      New Sub-Station Construction (Civil & Electrical)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </NavLink>
      <NavLink
        to="/elc"
        onMouseEnter={() => {
          exitShowDropDown();
          exitShowDropDown2();
        }}
      >
        <div className="item text-2">Energy Load Calculator</div>
      </NavLink>
      <NavLink
        to="/products"
        onMouseEnter={() => {
          exitShowDropDown();
          enterShowDropDown2();
        }}
      >
        <div className="item text-2 drop-down-holder">
          Products
          {showDropDown2 && (
            <div
              className="drop-down2 "
              onMouseEnter={() => enterShowDropDown2()}
              onMouseLeave={() => exitShowDropDown2()}
            >
              <div className="left ">
                <Link to="/lvht-cables" className="text-23">
                  LV/HT Cables
                </Link>
              </div>
            </div>
          )}
        </div>
      </NavLink>
      <NavLink
        to="/contact"
        onMouseEnter={() => {
          exitShowDropDown();
          exitShowDropDown2();
        }}
      >
        <ButtonStyle1 text="Contact Us" />
      </NavLink>
    </div>
  );
};

export default NavMenu;
