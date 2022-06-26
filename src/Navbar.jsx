import React, { useState } from "react";
import "./Navbar.css";
import plus from "./utils/add.svg";
import x from "./utils/x.svg";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar-box flex flex-col justify-between h-[85vh] align-top w-[15%] min-w-480 mt-[10vh] mb-[10vh]">
      <div className="navbar-menu flex flex-col h-[35%]">
        <li className="navbar-neel text-lightpink font-forma relative flex items-center font-[300] text-[3vh] hover:text-eggshell transition duration-500 ease-in-out leading-none">
          Neel Khare
        </li>
        <li className="navbar-intrigue text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"Intrigue"} />
        </li>
        <li className="navbar-lyrics text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"Lyrics"} />
        </li>
        <li className="navbar-people text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"People"} />
        </li>
        <li className="navbar-photography text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"Photography"} />
        </li>
        <li className="navbar-projects text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"Projects"} />
        </li>
        <li className="navbar-quotes text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"Quotes"} />
        </li>
        <li className="navbar-item">
          <a
            href="https://drive.google.com/file/d/1Opg8P9ej8cd1tPoKEsSkcYo7F4J3Uz63/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"Resumé"} />
          </a>
        </li>
        <li className="navbar-websites text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"Websites"} />
        </li>
        <li className="navbar-bits text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
          <NavbarItem text={"Tapas"} />
        </li>
      </div>
      <div className="navbar-external flex flex-col justify-start align-top">
        <li className="navbar-email text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-blue transition duration-500 ease-in-out">
          <a href="mailto:neelk2@illinois.edu" target="_blank" rel="noreferrer">
            <NavbarItem text={"email"} />
          </a>
        </li>
        <li className="navbar-github text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-githubGrey transition duration-500 ease-in-out">
          <a href="https://github.com/Szplugz" target="_blank" rel="noreferrer">
            <NavbarItem text={"github"} />
          </a>
        </li>
        <li className="navbar-instagram text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-instagramRed transition duration-500 ease-in-out">
          <a
            href="https://www.instagram.com/secondhandneel/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"instagram"} />
          </a>
        </li>
        <li className="navbar-twitter text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-twitterBlue transition duration-500 ease-in-out">
          <a
            href="https://www.instagram.com/secondhandneel/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"twitter"} />
          </a>
        </li>
        <li className="navbar-youtube text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-youtubeRed transition duration-500 ease-in-out">
          <a
            href="https://www.instagram.com/secondhandneel/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"youtube"} />
          </a>
        </li>
      </div>
      <div className="navbar-mobile">
        {toggleMenu ? (
          <img
            className="x-button h-[6vh] w-auto"
            src={x}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <img
            className="plus-button h-[6vh] w-auto"
            src={plus}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-menu flex flex-col h-[35%] overflow-y-auto">
            <li className="navbar-neel text-lightpink font-forma relative flex items-center font-[300] text-[3vh] hover:text-eggshell transition duration-500 ease-in-out leading-none">
              Neel Khare
            </li>
            <li className="navbar-bits text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Bits"} />
            </li>
            <li className="navbar-intrigue text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Intrigue"} />
            </li>
            <li className="navbar-lyrics text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Lyrics"} />
            </li>
            <li className="navbar-people text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"People"} />
            </li>
            <li className="navbar-photography text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Photography"} />
            </li>
            <li className="navbar-projects text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Projects"} />
            </li>
            <li className="navbar-quotes text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Quotes"} />
            </li>
            <li className="navbar-item">
              <a
                href="https://drive.google.com/file/d/1Opg8P9ej8cd1tPoKEsSkcYo7F4J3Uz63/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"Resumé"} />
              </a>
            </li>
            <li className="navbar-websites text-eggshell font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Websites"} />
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

const NavbarItem = ({ text }) => <div>{text}</div>;

export default Navbar;
