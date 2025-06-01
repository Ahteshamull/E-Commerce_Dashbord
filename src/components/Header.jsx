import React from "react";
import { Link, Links } from "react-router";
import Logo from "../assets/images/Dashboard.png";
import Button from "@mui/material/Button";
import { TfiMenuAlt } from "react-icons/tfi";

import SearchBox from "./SearchBox";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { MdOutlineLightMode } from "react-icons/md";
import { BsFillMoonFill } from "react-icons/bs";
import { MdShoppingCart } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdNotificationsActive } from "react-icons/md";
import userImage from "../assets/images/images.jpg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import { LuShieldAlert } from "react-icons/lu";
import Logout from "@mui/icons-material/Logout";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [notifyMenu, setNotifyMenu] = React.useState(null);
  const open = Boolean(anchorEl);
  const open1 = Boolean(notifyMenu);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleNotify = (event) => {
    setNotifyMenu(event.currentTarget);
  };
  const handleCloseNotify = () => {
    setNotifyMenu(null);
  };
  return (
    <header className="d-flex align-items-center">
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center w-100">
          <div className="col-sm-2 part1">
            <Link to="/" className="d-flex logo align-items-center">
              <img src={Logo} alt="Logo" />
              <span className="ml-2">E-CUSTOMS</span>
            </Link>
          </div>
          <div className="col-sm-3 pl-4  d-flex align-items-center part2">
            <Button className="button mr-3">
              <TfiMenuAlt />
            </Button>
            <SearchBox />
          </div>
          <div className="col-sm-7 pl-5  d-flex justify-content-end align-items-center part3">
            <Button className="button mr-3">
              <MdOutlineLightMode />
            </Button>
            <Button className="button mr-3">
              <MdShoppingCart />
            </Button>

            <Button className="button mr-3">
              <MdEmail />
            </Button>

            <Link to="/notification">
              <Button className="button mr-3">
                <MdNotificationsActive />
              </Button>
            </Link>

            <Menu
              notifyMenu={notifyMenu}
              className="notifyMenu_dropdown"
              id="notifyMenu"
              open={open1}
              onClose={handleCloseNotify}
              onClick={handleCloseNotify}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "left", vertical: "top" }}
              anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
            >
              <div className="notifyItems pl-3 pb-2">
                <h3>Order (09)</h3>
              </div>
              <Divider />
              <MenuItem onClick={handleCloseNotify}>
                <div className="notify_item d-flex align-items-center">
                  <div>
                    <div className="userImg">
                      <span className="rounded-circle">
                        <img src={userImage} alt="userImage" />
                      </span>
                    </div>
                    <div className="notify_info">
                      <h3>
                        <span>
                          <b>Hasan Khan</b>
                          <p>Lorem ipsum dolor sit amet, enim.</p>
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
              </MenuItem>
            </Menu>

            <div className="myAccRap">
              <Button
                onClick={handleClick}
                className="myAcc d-flex align-items-center"
              >
                <div className="userImg">
                  <span className="rounded-circle">
                    <img src={userImage} alt="userImage" />
                  </span>
                </div>

                <div className="userInfo">
                  <h3>Hasan</h3>
                  <p className="mb-0">Admin</p>
                </div>
              </Button>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                slotProps={{
                  paper: {
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&::before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  },
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              >
                <MenuItem onClick={handleClose}>
                  <Avatar /> Profile
                </MenuItem>

                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <LuShieldAlert size={20} />
                  </ListItemIcon>
                  Reset Password
                </MenuItem>
                <MenuItem className="text-danger" onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" className="text-danger" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
