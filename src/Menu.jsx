import React from "react";
import profilepic from "./utils/profilepicbw.jpg";
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
          <body>
            <h1 className="header font-forma text-max text-eggshell">
              THE POETRY IS IN THE STREETS{" "}
              <span className="text-lightpink">//</span>{" "}
              <a href="/about">ENTER</a>
            </h1>
          </body>
        </div>
      </div>
      <div className="right flex items-center justify-center h-screen bg-eggshell">
        <img
          className="profile-picture w-auto h-screen"
          src={profilepic}
          alt="profile"
        ></img>
      </div>
    </div>
  );
};

const MenuItem = ({ text }) => <div>{text}</div>;

export default Menu;
