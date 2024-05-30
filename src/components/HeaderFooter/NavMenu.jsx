import { NavLink } from "react-router-dom";
import ButtonStyle1 from "../Buttons/ButtonStyle1";
import { useLocation } from "react-router-dom";
import { useState } from "react";
const NavMenu = () => {
  const { pathname } = useLocation();
  const [showDropDown, setShowDropDown] = useState(false);

  console.log(pathname);
  return (
    <div className="menu-items">
      <NavLink to="/home">
        <div className="item text-2">Home</div>
      </NavLink>
      <NavLink to="/about">
        <div className="item text-2">About Us</div>
      </NavLink>
      <NavLink to="/services">
        <div
          onMouseEnter={() => setShowDropDown(true)}
          className="item text-2 drop-down-holder"
        >
          Services
          {showDropDown && (
            <div
              className="drop-down "
              onMouseLeave={() => setShowDropDown(false)}
            >
              <div className="left ">
                <NavLink to="" className="text-23">
                  Residential Solar System
                </NavLink>
                <NavLink to="" className="text-23">
                  Commercial Solar System
                </NavLink>
                <NavLink to="" className="text-23">
                  Industrial Solar System
                </NavLink>
                <NavLink to="" className="text-23">
                  Solar Maintainance & Support
                </NavLink>
              </div>
              <div className="right">
                <NavLink to="" className="text-23">
                  Underground Cabling Maintainance
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </NavLink>
      <NavLink to="/elc">
        <div className="item text-2">Energy Load Calculator</div>
      </NavLink>
      <NavLink to="/products">
        <div className="item text-2">Products</div>
      </NavLink>
      <NavLink to="/contact">
        <ButtonStyle1 text="Contact Us" />
      </NavLink>
    </div>
  );
};

export default NavMenu;
