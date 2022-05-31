import React from "react";
import Navbar from "./Navbar";
import biopic from "./utils/biopic.jpg";

const About = () => {
  return (
    <div className="about-page bg-almostBlack h-screen flex flex-row justify-center">
      <Navbar />
      <div className="about-bio flex w-[30%] my-[10vh] mx-[5vw]">
        <div className="about-picture-container flex flex-row w-full justify-start h-[35vh]">
          <img className="picture rounded" src={biopic}></img>
        </div>
      </div>
      <div className="about-values flex w-[30%] mt-[10vh]"></div>
    </div>
  );
};

export default About;
