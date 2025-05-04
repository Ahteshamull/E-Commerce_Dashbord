import React from "react";
import { Link } from "react-router";
import Logo from "../assets/images/Dashboard.png";
import Button from "@mui/material/Button";
import { TfiMenuAlt } from "react-icons/tfi";
import { TbArrowsCross } from "react-icons/tb";
import SearchBox from "./SearchBox";

export default function Header() {
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
          <div className="col-xs-3 pl-4  d-flex align-items-center part2">
            <Button className="button mr-3">
              <TfiMenuAlt />
            </Button>
            <SearchBox/>
          </div>
          <div className="col-xs-3 pl-4  d-flex align-items-center part2">
          
          </div>
        </div>
      </div>
    </header>
  );
}
