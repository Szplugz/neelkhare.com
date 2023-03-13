import React, { useState } from "react";
import "./Navmobile.css";
import NavbarItem from "./NavbarItem";

const Navmobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-mobile flex flex-row my-10 ml-[10%]">
      <div className="navbar flex flex-row">
        <div className="navbar-menu flex flex-row">
          <div className="navbar-item pr-5">
            <a href="/about">
              <NavbarItem text={"home"} mobile={true} />
            </a>
          </div>
          <div className="navbar-item pr-5">
            <NavbarItem text={"index"} invalid={true} mobile={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navmobile;
