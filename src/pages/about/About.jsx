import React from "react";
import HomeNav from "../../components/navbar/HomeNav";
import Navmobile from "../../components/navbar/Navmobile";
import { Helmet } from "react-helmet";
import fallpic from "../../utils/fallrl2square.jpg";
import "./About.css";
import newlogo from "../../utils/StarLogoNeel.svg";
import headshot from "../../utils/chiheadshot.jpg";

const About = () => {
  return (
    <div className="about-page bg-eggshell2 h-screen flex flex-row justify-center selection:bg-skyBlue">
      <Helmet>
        <title>About | Neel Khare</title>
      </Helmet>
      <HomeNav />
      <div className="about-bio float flex-col w-[40%] my-[10vh] ml-[15vw] overflow-y-auto">
        <Navmobile />
        <div className="desktop-head flex justify-between">
          <div className="navbar-neel text-navy relative flex items-center text-3xl font-[500] font-inter mb-[5vh]">
            Hello, I'm Neel.
          </div>
          <img className="mb-[5vh] h-[2rem]" src={newlogo}></img>
        </div>
        <div className="about-bio-content overflow-x-hidden flex-col w-full text-almostBlack font-inter font-[400] text-base sm:text-base leading-snug overflow-y-auto">
          <p className="about-bio-main mb-5">
            I study computer science, economics, and psychology at the{" "}
            <span className="text-[#ff6541]">
              University of Illinois, Urbana-Champaign
            </span>
            . Currently, I'm curious about high-frequency trading and
            computational neuroscience. Outside of class, I spend most of my
            time taking{" "}
            <a
              className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
              href="/photography"
              target="_blank"
              rel="noreferrer"
            >
              pictures
            </a>
            , building websites, exercising, and socializing.
          </p>
          <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            Presently
          </div>
          <ul className="list-disc pl-5 mb-5 marker:text-chinaRose">
            <li className="list-item">
              Building an order-matching engine at{" "}
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="https://uiucquant.web.illinois.edu/"
                target="_blank"
                rel="noreferrer"
              >
                Quant
              </a>
              .
            </li>
            <li>
              Developing a website and producing video content for{" "}
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="https://www.instagram.com/tfnuiuc/"
                target="_blank"
                rel="noreferrer"
              >
                The Fashion Network
              </a>
              .
            </li>
            <li>Making short films and documentaries at August Productions.</li>
          </ul>
          <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            In the past
          </div>
          <ul className="list-disc pl-5 mb-5 marker:text-chinaRose">
            <li className="list-item">
              Designed and developed the frontend architecture for Quant.
            </li>
            <li>
              Taught students the fundamentals of Object-Oriented Programming as
              a course assistant for{" "}
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="https://www.cs124.org/"
                target="_blank"
                rel="noreferrer"
              >
                CS 124
              </a>{" "}
            </li>
          </ul>
          <p className="about-bio-main mb-5">
            I'm always open to making new friends, learning new things, working
            on cool projects, or just chatting! You can reach me at any of the
            social links you see on the side.
          </p>
          <hr className="line-2 border-dotted mb-[8vh] h-[1px] border-navy"></hr>
          <div className="quote text-slate-600 font-inter text-sm mb-[4.25rem] flex justify-end">
            <em>After a while, determination starts to look like talent.</em>
          </div>
        </div>
        <img
          className="picture-mobile rounded w-[100%] mb-[1vh]"
          src={headshot}
        ></img>
      </div>
    </div>
  );
};

export default About;
