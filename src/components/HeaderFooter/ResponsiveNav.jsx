import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { NavLink } from "react-router-dom";
import ButtonStyle1 from "../Buttons/ButtonStyle1";
import menu from "../../assets/icons/menu.png";
const ResponsiveNav = () => {
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div className="responsive-header-nav">
      <Button onClick={toggleDrawer(true)}>
        {" "}
        <img width={40} src={menu} alt="" srcset="" />{" "}
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <div className="responsive-header-nav-menu-items">
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
        </Box>
      </Drawer>
    </div>
  );
};

export default ResponsiveNav;
