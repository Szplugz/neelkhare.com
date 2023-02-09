import React from "react";
import NavbarItem from "./NavbarItem";

const MobileFooter = () => {
  return (
    <div className="navbar-mobile flex flex-row mb-5">
      <div className="social flex flex-row justify-start align-top">
        <div className="navbar-item pr-5">
          <a
            href="https://www.are.na/neel-khare"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"are.na"} mobile={true} />
          </a>
        </div>
        <div className="navbar-item pr-5">
          <a href="mailto:neelk2@illinois.edu" target="_blank" rel="noreferrer">
            <NavbarItem text={"email"} mobile={true} />
          </a>
        </div>
        <div className="navbar-item pr-5">
          <a href="https://github.com/Szplugz" target="_blank" rel="noreferrer">
            <NavbarItem text={"github"} mobile={true} />
          </a>
        </div>
        <div className="navbar-item pr-5">
          <a
            href="https://www.twitter.com/szplugz/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"twitter"} mobile={true} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
