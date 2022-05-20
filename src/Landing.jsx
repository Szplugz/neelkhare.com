import React from "react";
import "./Landing.css";

const Landing = () => {
  return (
    <div className="left-box flex items-center justify-center fixed top-0 left-0 h-screen w-1/2 m-0 bg-black">
      <div className="menu-box flex flex-col w-480">
        <h className="name text-lightpink font-forma relative flex items-center font-[550] text-84 h-12.7">
          {" "}
          Neel Khare{" "}
        </h>
        <li className="menu-item">
          <a href="#">
            <MenuItem text={"Bits"} />
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <MenuItem text={"Intrigue"} />
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <MenuItem text={"Inspiration"} />
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <MenuItem text={"Project"} />
          </a>
        </li>
        <li className="menu-item">
          <a href="#">
            <MenuItem text={"Resumé"} />
          </a>
        </li>
      </div>
      <div className="right bg-eggshell"></div>
    </div>
  );
};

const MenuItem = ({ text }) => <div className="menu-item">{text}</div>;

export default Landing;
