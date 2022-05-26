import React from "react";
import profilepic from "./utils/profilepicture.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="right flex fixed items-center justify-center right-0 md:bottom-0 w-1/2 h-screen bg-eggshell">
      <img
        className="profile-picture w-auto h-64 lg:h-96 drop-shadow-xl rounded"
        src={profilepic}
        alt="profile"
      ></img>
    </div>
  );
};

export default Home;
