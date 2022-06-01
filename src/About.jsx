import React from "react";
import Navbar from "./Navbar";
import biopic from "./utils/biopic.jpg";

const About = () => {
  return (
    <div className="about-page bg-almostBlack flex flex-row justify-center">
      <Navbar />
      <div className="about-bio flex flex-col w-[30%] my-[10vh] mx-[5vw]">
        <div className="about-picture-container flex flex-row w-full justify-start items-start h-[35vh] my-2vh">
          <img className="picture rounded w-auto h-[90%]" src={biopic}></img>
        </div>
        <div className="about-bio-content flex-col w-full text-eggshell font-forma leading-snug">
          <p className="p1 mb-[5vh]">
            Hi, I'm Neel! I spend most of the year studying computer science and
            writing code at the University of Illinois, Urbana-Champaign, where
            I am a junior. Two of my biggest areas of interest related to
            programming are transporation and finance, so in the near future I
            see myself building software that solves problems in these domains.
            At the moment, I’m not picky in terms of the kind of software I
            write, as long as it challenges me and I can learn from it. I find
            myself using C++ and Javascript the most, so you can be assured that
            I have a high pain threshold.{" "}
          </p>
          <p>
            At college, I am a full-stack software developer at Quant, and
            co-founder and President at August Productions, where we make films
            and documentaries. I am also involved with the Alpha Delta Phi
            fraternity, which provides a nice getaway from my busy schedule.
            During my (rare) free time, I like to play soccer, take pictures,
            read books, make videos, read articles, form opinions, express
            opinions, go to the gym, go for a walk, and grab dinner with friends
            (one at a time). I would like to learn how to relax.
          </p>
        </div>
      </div>
      <div className="about-values flex w-[30%] mt-[10vh]"></div>
    </div>
  );
};

export default About;
