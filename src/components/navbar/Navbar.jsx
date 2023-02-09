import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="navbar-box flex flex-col fixed left-[20vw] h-[85vh] align-top w-[15%] min-w-480 my-[10vh] mr-[7.5vw]">
      <div className="navbar-menu flex flex-col mb-[7vh]">
        <div className="navbar-item">
          <a href="/about">
            <NavbarItem text={"home"} />
          </a>
        </div>
        <div className="navbar-item">
          <NavbarItem text={"index"} invalid={true} />
        </div>
      </div>
      <div className="navbar-external flex flex-col justify-start align-top">
        <div className="navbar-item">
          <a
            href="https://www.are.na/neel-khare"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"are.na"} />
          </a>
        </div>
        <div className="navbar-item">
          <a href="mailto:neelk2@illinois.edu" target="_blank" rel="noreferrer">
            <NavbarItem text={"email"} />
          </a>
        </div>
        <div className="navbar-item">
          <a href="https://github.com/Szplugz" target="_blank" rel="noreferrer">
            <NavbarItem text={"github"} />
          </a>
        </div>
        <div className="navbar-item">
          <a
            href="https://www.twitter.com/szplugz/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"twitter"} />
          </a>
        </div>
        <div className="navbar-item">
          <a
            href="https://www.youtube.com/kiltoch/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"youtube"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
