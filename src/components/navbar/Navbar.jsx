import React from "react";
import NavbarItem from "./NavbarItem";
import headshot from "../../utils/chiheadshot.jpg";

const Navbar = ({ isHomePage }) => {
  let homeImage = isHomePage ? headshot : null;
  return (
    <div className="navbar-box flex flex-col fixed left-[15vw] h-[60vh] align-top w-[15%] min-w-480 my-[10vh] mr-[7.5vw]">
      <div className="navbar-menu flex flex-col mb-10">
        <div className="navbar-item">
          <a href="/about">
            <NavbarItem text={"home"} />
          </a>
        </div>
        <div className="navbar-item">
          <NavbarItem text={"index"} invalid={true} />
        </div>
      </div>
      <div className="navbar-external flex flex-col justify-start align-top mb-10">
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
      <img src={homeImage} className="w-[80%] rounded-sm"></img>
    </div>
  );
};

export default Navbar;
