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
        <div className="about-bio-content flex-col w-full text-eggshell font-tablet font-[400] leading-snug">
          <p className="p1 mb-[3vh]">
            Hi, I'm Neel! I spend most of the year studying computer science and
            writing code at the University of Illinois, Urbana-Champaign, where
            I am a junior. Two of my biggest areas of interest related to
            programming are transporation and finance, so in the near future I
            see myself building software that solves problems in these domains.
            At the moment, I'm quite interested in full-stack development and
            product design. I find myself using C++ and Javascript the most, so
            you can be assured that I have a high pain threshold.
          </p>
          <p className="p1 mb-[3vh]">
            At college, I am a software developer at{" "}
            <a
              className="link text-lightpink"
              href="https://www.quantillinois.com/"
              target="_blank"
              rel="noreferrer"
            >
              Quant
            </a>
            , and co-founder and President at August Productions, where we make
            films and documentaries. I am also involved with the Alpha Delta Phi
            fraternity, which provides a nice getaway from my busy schedule.
            During my (rare) free time, I like to play soccer, take pictures,
            read books, make videos, read articles, form opinions, express
            opinions, go to the gym, take a walk, and grab dinner with friends
            (one at a time). I would like to learn how to relax.
          </p>
          <p className="p1 mb-[3vh]">
            I love connecting with and meeting new people, so please feel free
            to reach out to me through any of the social links that you see on
            the bottom-left. I would <em>especially</em> love to hear from you
            if:
            <div className="list mt-[3vh]">
              <p className="about-cat-1 ml-[5%]">
                {" "}
                <span className="1 text-lightpink font-tablet">1.&nbsp;</span>
                You are a recruiter looking for a software engineering intern.
              </p>
              <p className="about-cat-2 ml-[5%]">
                {" "}
                <span className="2 text-lightpink font-tablet">2.&nbsp;</span>
                You are a developer/filmmaker/photographer looking to
                collaborate on a project.
              </p>
              <p className="about-cat-3 ml-[5%]">
                {" "}
                <span className="3 text-lightpink font-tablet">3.&nbsp;</span>
                If you would like to talk (or argue) with me about one of my
                many{" "}
                <span className="about-interests-link text-lightpink font-tablet">
                  interests
                </span>{" "}
                .
              </p>
            </div>
          </p>
        </div>
      </div>
      <div className="about-values flex w-[30%] mt-[10vh]"></div>
    </div>
  );
};

export default About;
