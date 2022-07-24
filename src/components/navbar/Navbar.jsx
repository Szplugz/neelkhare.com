import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-box flex flex-col fixed left-[15vw] h-[85vh] align-top w-[15%] min-w-480 my-[10vh] mr-[7.5vw]">
      <div className="navbar-menu flex flex-col mb-[7vh]">
        <li className="navbar-item">
          <a href="/about">
            <NavbarItem text={"Home"} />
          </a>
        </li>
        <li className="navbar-index text-gray-600 font-forma relative flex items-center font-[300] text-2xl leading-tight">
          <NavbarItem text={"Index"} />
        </li>
        <li className="navbar-item">
          <a href="/people">
            <NavbarItem text={"People"} />
          </a>
        </li>
        <li className="navbar-item">
          <a href="/photography">
            <NavbarItem text={"Photography"} />
          </a>
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
        <li className="navbar-bits text-gray-600 font-forma relative flex items-center font-[300] text-2xl leading-tight">
          <NavbarItem text={"Tapas"} />
        </li>
        <li className="navbar-item">
          <a href="/work">
            <NavbarItem text={"Work"} />
          </a>
        </li>
      </div>
      <div className="navbar-external flex flex-col justify-start align-top">
        <li className="navbar-email text-almostBlack font-forma relative flex items-center font-[300] text-2xl leading-tight hover:text-blue transition duration-500 ease-in-out">
          <a href="mailto:neelk2@illinois.edu" target="_blank" rel="noreferrer">
            <NavbarItem text={"email"} />
          </a>
        </li>
        <li className="navbar-github text-almostBlack font-forma relative flex items-center font-[300] text-2xl leading-tight hover:text-githubGrey transition duration-500 ease-in-out">
          <a href="https://github.com/Szplugz" target="_blank" rel="noreferrer">
            <NavbarItem text={"github"} />
          </a>
        </li>
        <li className="navbar-twitter text-almostBlack font-forma relative flex items-center font-[300] text-2xl leading-tight hover:text-twitterBlue transition duration-500 ease-in-out">
          <a
            href="https://www.twitter.com/szplugz/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"twitter"} />
          </a>
        </li>
        <li className="navbar-youtube text-almostBlack font-forma relative flex items-center font-[300] text-2xl leading-tight hover:text-youtubeRed transition duration-500 ease-in-out">
          <a
            href="https://www.youtube.com/kiltoch/"
            target="_blank"
            rel="noreferrer"
          >
            <NavbarItem text={"youtube"} />
          </a>
        </li>
      </div>
    </div>
  );
};

const NavbarItem = ({ text }) => <div>{text}</div>;

export default Navbar;
