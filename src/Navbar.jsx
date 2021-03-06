import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-box flex flex-col justify-start align-top w-[15%] min-w-480 mt-[10vh] mb-[10vh]">
      <div className="navbar-name font-forma relative flex items-center font-[550] text-[4vh] leading-none">
        <a href="/about">
          <h className="navbar-neel text-lightpink font-forma relative flex items-center font-[550] text-[4vh] hover:text-eggshell transition duration-500 ease-in-out leading-none">
            Neel Khare
          </h>
        </a>
      </div>
      <div className="navbar-menu flex flex-col h-[35%] overflow-y-auto">
        <li className="navbar-bits text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"Bits"} />
        </li>
        <li className="navbar-intrigue text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"Intrigue"} />
        </li>
        <li className="navbar-lyrics text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"Lyrics"} />
        </li>
        <li className="navbar-people text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"People"} />
        </li>
        <li className="navbar-photography text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"Photography"} />
        </li>
        <li className="navbar-projects text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"Projects"} />
        </li>
        <li className="navbar-quotes text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"Quotes"} />
        </li>
        <li className="navbar-item text-[4vh]">
          <a href="/resume">
            <NavbarItem text={"Resumé"} />
          </a>
        </li>
        <li className="navbar-websites text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none">
          <NavbarItem text={"Websites"} />
        </li>
      </div>
      <div className="navbar-external flex flex-col fixed bottom-[10vh] justify-start align-top">
        <li className="navbar-github text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none hover:text-githubGrey transition duration-500 ease-in-out">
          <a href="https://github.com/Szplugz" target="_blank">
            <NavbarItem text={"github"} />
          </a>
        </li>
        <li className="navbar-instagram text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none hover:text-instagramRed transition duration-500 ease-in-out">
          <a href="https://www.instagram.com/secondhandneel/" target="_blank">
            <NavbarItem text={"instagram"} />
          </a>
        </li>
        <li className="navbar-twitter text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none hover:text-twitterBlue transition duration-500 ease-in-out">
          <a href="https://www.instagram.com/secondhandneel/" target="_blank">
            <NavbarItem text={"twitter"} />
          </a>
        </li>
        <li className="navbar-youtube text-eggshell font-forma relative flex items-center font-[550] text-[4vh] leading-none hover:text-youtubeRed transition duration-500 ease-in-out">
          <a href="https://www.instagram.com/secondhandneel/" target="_blank">
            <NavbarItem text={"youtube"} />
          </a>
        </li>
      </div>
    </div>
  );
};

const NavbarItem = ({ text }) => <div>{text}</div>;

export default Navbar;
