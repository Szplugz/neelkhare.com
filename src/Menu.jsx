import React from "react";
import profilepic from "./utils/profilepicture.jpg";
import "./Menu.css";

const Menu = () => {
  return (
    <div className="screen flex flex-row">
      <div className="left-box flex justify-center h-screen w-1/2 m-0 bg-almostBlack">
        <img
          className="profile-picture-phone xl:hidden drop-shadow-xl rounded"
          src={profilepic}
          alt="profile"
        ></img>
        <div className="menu-box flex flex-col justify-center w-480 min-w-480">
          <h className="name text-lightpink font-forma relative flex items-center font-[550] text-10 leading-none">
            {" "}
            Neel Khare{" "}
          </h>
          <li className="bits text-eggshell font-forma relative flex items-center font-[550] text-10 leading-none">
            <MenuItem text={"Bits"} />
          </li>
          <li className="intrigue text-eggshell font-forma relative flex items-center font-[550] text-10 leading-none">
            <MenuItem text={"Intrigue"} />
          </li>
          <li className="inspiration text-eggshell font-forma relative flex items-center font-[550] text-10 leading-none">
            <MenuItem text={"Inspiration"} />
          </li>
          <li className="projects text-eggshell font-forma relative flex items-center font-[550] text-10 leading-none">
            <MenuItem text={"Projects"} />
          </li>
          <li className="menu-item">
            <a href="/resume">
              <MenuItem text={"Resumé"} />
            </a>
          </li>
        </div>
      </div>
      <div className="right flex items-center justify-center w-1/2 h-screen bg-eggshell">
        <img
          className="profile-picture w-auto h-64 lg:h-96 drop-shadow-xl rounded"
          src={profilepic}
          alt="profile"
        ></img>
      </div>
    </div>
  );
};

const MenuItem = ({ text }) => <div>{text}</div>;

export default Menu;
