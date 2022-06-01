import React from "react";
import Navbar from "./Navbar";
import biopic from "./utils/biopic.jpg";

const About = () => {
  return (
    <div className="about-page bg-almostBlack h-screen flex flex-row justify-center">
      <Navbar />
      <div className="about-bio flex flex-col w-[30%] my-[10vh] mx-[5vw]">
        <div className="about-picture-container flex flex-row w-full justify-start items-start h-[35vh] my-2vh">
          <img className="picture rounded w-auto h-[90%]" src={biopic}></img>
        </div>
        <div className="about-bio-content flex h-full w-full"></div>
      </div>
      <div className="about-values flex w-[30%] mt-[10vh]"></div>
    </div>
  );
};

export default About;
