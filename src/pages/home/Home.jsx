import React from "react";
import profilepic from "../../utils/profilepicbw.jpg";
import "./Home.css";

const Home = () => {
  var nearrow = "\u2197";
  return (
    <div className="screen flex flex-row">
      <div className="left-box flex justify-center h-screen w-[50%] m-0 bg-almostBlack">
        <div className="menu-box flex flex-col justify-center items-center w-[100%]">
          <body>
            <h1 className="header font-forma text-max text-eggshell">
              THE POETRY IS IN THE STREETS{" "}
              <span className="text-lightpink">//</span>{" "}
              <a href="/about">ENTER</a>
            </h1>
          </body>
          <img
            className="profile-picture-phone md:hidden drop-shadow-xl rounded"
            src={profilepic}
            alt="profile"
          ></img>
        </div>
      </div>
      <div className="right flex min-h-screen bg-eggshell">
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

export default Home;
