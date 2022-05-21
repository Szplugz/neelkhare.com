import React from "react";
import profilepic from "./utils/profilepicture.jpg";

const Home = () => {
  return (
    <div className="right flex fixed items-center justify-center right-0 w-1/2 h-screen bg-eggshell">
      <img
        className="profile-picture w-auto h-96 drop-shadow-xl rounded"
        src={profilepic}
        alt="profile"
      ></img>
    </div>
  );
};

export default Home;
