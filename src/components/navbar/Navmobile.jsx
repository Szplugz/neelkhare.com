import React, { useState } from "react";
import "./Navmobile.css";
import NavbarItem from "./NavbarItem";

const Navmobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-mobile flex flex-row mb-5">
      <div className="navbar flex flex-row">
        <div className="navbar-menu flex flex-row">
          <div className="navbar-item pr-5">
            <a href="/about">
              <NavbarItem text={"home"} mobile={true} />
            </a>
          </div>
          <div className="navbar-item pr-5">
            <a href="/index">
              <NavbarItem text={"index"} mobile={true} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navmobile;
