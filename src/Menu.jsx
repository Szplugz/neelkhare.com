import React from "react";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="left-box flex items-center justify-center fixed top-0 left-0 h-screen w-1/2 m-0 bg-almostBlack">
      <div className="menu-box flex flex-col w-480">
        <h className="name text-lightpink font-forma relative flex items-center font-[550] text-10 h-12.7">
          {" "}
          Neel Khare{" "}
        </h>
        <li className="bits text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <MenuItem text={"Bits"} />
        </li>
        <li className="intrigue text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <MenuItem text={"Intrigue"} />
        </li>
        <li className="inspiration text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <MenuItem text={"Inspiration"} />
        </li>
        <li className="project text-eggshell font-forma relative flex items-center font-[550] text-10 h-12.7">
          <MenuItem text={"Projects"} />
        </li>
        <li className="menu-item">
          <a href="/resume">
            <MenuItem text={"Resumé"} />
          </a>
        </li>
      </div>
    </div>
  );
};

const MenuItem = ({ text }) => <div>{text}</div>;

export default Menu;
