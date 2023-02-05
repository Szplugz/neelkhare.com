import React from "react";
import profilepic from "../../utils/profilepicbw.jpg";
import "./Home.css";

const Home = () => {
  var nearrow = "\u2197";
  return (
    <>
      <div className="screen flex flex-row">
        <div className="left-box flex justify-center h-screen w-[50%] m-0 bg-almostBlack">
          <div className="menu-box flex flex-col justify-center items-center w-[100%]">
            <body>
              <h1 className="header font-forma text-max text-eggshell">
                THE POETRY IS IN THE STREETS{" "}
                <span className="text-lightpink">//</span>{" "}
                <a href="/about">CLICK TO ENTER</a>
              </h1>
            </body>
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
      <div className="screen-mobile h-screen bg-almostBlack flex flex-col items-center justify-center text-eggshell">
        <div className="text-mobile flex w-[80%] justify-start mb-[2vh]">
          <p className="header-mobile font-forma">
            <a href="/about"> THE POETRY IS IN THE STREETS </a> <br></br>
            <a href="/about">CLICK TO ENTER</a>{" "}
            <span className="text-lightpink">//</span>
          </p>
        </div>
        <div className="img-mobile flex w-[80%] mt-[2vh]">
          <img src={profilepic}></img>
        </div>
      </div>
    </>
  );
};

const MenuItem = ({ text }) => <div>{text}</div>;

export default Home;
