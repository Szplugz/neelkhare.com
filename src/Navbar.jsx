import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-box flex flex-col justify-start align-top w-[15%] min-w-480 mt-[10vh]">
      <div className="navbar-name font-forma relative flex items-center font-[550] text-[4vh] leading-none">
        <a href="/about">
          <h className="navbar-neel text-lightpink font-forma relative flex items-center font-[550] text-[4vh] hover:text-eggshell transition duration-500 ease-in-out leading-none">
            Neel Khare
          </h>
        </a>
      </div>
      <li className="navbar-bits text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
        <NavbarItem text={"Bits"} />
      </li>
      <li className="navbar-intrigue text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
        <NavbarItem text={"Intrigue"} />
      </li>
      <li className="navbar-inspiration text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
        <NavbarItem text={"Inspiration"} />
      </li>
      <li className="navbar-projects text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
        <NavbarItem text={"Projects"} />
      </li>
      <li className="menu-item text-[4vh]">
        <a href="/resume">
          <NavbarItem text={"Resumé"} />
        </a>
      </li>
    </div>
  );
};

const NavbarItem = ({ text }) => <div>{text}</div>;

export default Navbar;
