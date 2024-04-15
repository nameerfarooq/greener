import { NavLink } from "react-router-dom";
import ButtonStyle1 from "../Buttons/ButtonStyle1";
import { useLocation } from "react-router-dom";
const NavMenu = () => {
  const { pathname } = useLocation();
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
        <div className="item text-2">Services</div>
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
