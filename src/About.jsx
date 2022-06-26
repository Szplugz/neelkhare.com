import React from "react";
import Navbar from "./Navbar";
import biopic from "./utils/biopic.jpg";
import { Helmet } from "react-helmet";
import "./About.css";

const About = () => {
  return (
    <div className="about-page bg-almostBlack flex flex-row justify-center">
      <Helmet>
        <title>About | Neel Khare</title>
      </Helmet>
      <Navbar />
      <div className="about-bio flex flex-col w-[30%] my-[10vh] mx-[5vw]">
        {/* <div className="about-picture-container flex flex-row w-full justify-start items-start h-[35vh] my-2vh">
          <img className="picture rounded w-auto h-[90%]" src={biopic}></img>
        </div> */}
        <div className="about-bio-content flex-col w-full text-eggshell font-tablet font-[400] leading-snug">
          <p className="p1 mb-[3vh]">
            Hi, I'm Neel! I spend most of the year studying computer science and
            writing code at the University of Illinois, Urbana-Champaign, where
            I am a junior. What matters to me the most is consistent personal
            growth and sharing my knowledge with the world in the hope of
            lifting others up. At the moment, I'm quite interested in full-stack
            development and product design, and I am always looking to involve
            myself in projects that improve people’s quality of life. I find
            myself using C++ and Javascript the most (so you can be assured that
            I have a high pain threshold).
          </p>
          <h1 className="h1 mb-[3vh] text-lightpink font-[400]">
            What keeps me busy these days:
          </h1>
          <li className="bullet ml-[4vh] mb-[1vh]">
            <span className="p1">
              At college, I am a software developer at{" "}
              <a
                className="link text-lightpink"
                href="https://www.quantillinois.com/"
                target="_blank"
                rel="noreferrer"
              >
                Quant
              </a>
              , and co-founder and President at August Productions, where we
              make films and documentaries.
            </span>
          </li>
          <li className="bullet ml-[4vh] mb-[1vh]">
            <span className="p2">
              I build and maintain side projects that mostly consist of websites
              and handy web-applications.
            </span>
          </li>
          <li className="bullet ml-[4vh] mb-[3vh]">
            <span className="p2">
              I'm a full-stack engineering intern at{" "}
              <a
                className="link text-lightpink"
                href="https://www.mediaocean.com/"
                target="_blank"
                rel="noreferrer"
              >
                Mediaocean
              </a>
              .
            </span>
          </li>
          <p className="p1 mb-[3vh]">
            {" "}
            In my free time, I like roaming around Chicago, exploring cafés,
            watching trains, taking pictures, and reading. I love learning about
            human behavior, transportation, and startups, among many other
            things.
          </p>
          <p className="p1 mb-[3vh]">
            I love connecting with and meeting new people, so please feel free
            to reach out to me through any of the social links that you see on
            the left! I would <em>especially</em> love to hear from you if:
            <div className="list mt-[3vh]">
              <p className="about-cat-1 ml-[5%] mb-[1vh]">
                {" "}
                <span className="1 text-lightpink font-tablet">1.&nbsp;</span>
                You are a recruiter looking for a software engineering intern.
              </p>
              <p className="about-cat-2 ml-[5%] mb-[1vh]">
                {" "}
                <span className="2 text-lightpink font-tablet">2.&nbsp;</span>
                You are a developer/filmmaker/photographer looking to
                collaborate on a project.
              </p>
              <p className="about-cat-3 ml-[5%] mb-[1vh]">
                {" "}
                <span className="3 text-lightpink font-tablet">3.&nbsp;</span>
                If you would like to talk to (or argue with) me about one of my
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
      <div className="about-pictures flex flex-col items-center w-[30%] mt-[10vh]">
        <img
          className="picture rounded w-auto h-[50vh] mb-[1vh]"
          src={biopic}
        ></img>
      </div>
    </div>
  );
};

export default About;
