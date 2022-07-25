import React from "react";
import HomeNav from "../../components/navbar/HomeNav";
import Navmobile from "../../components/navbar/Navmobile";
import biopic from "../../utils/biopic.jpg";
import { Helmet } from "react-helmet";
import fallpic from "../../utils/fallrl2square.jpg";
import "./About.css";
import chistar from "../../utils/CHISTARCHISTAR.svg";

const About = () => {
  return (
    <div className="about-page bg-eggshell flex flex-row justify-center selection:bg-skyBlue">
      <Helmet>
        <title>About | Neel Khare</title>
      </Helmet>
      <HomeNav />
      <div className="about-bio float flex-col w-[40%] my-[10vh] ml-[15vw] overflow-y-auto">
        <Navmobile />
        <div className="desktop-head flex justify-between">
          <div className="navbar-neel text-navy relative flex items-center text-4xl font-[500] font-inter mb-[5vh]">
            Hello, I'm Neel.
          </div>
        </div>
        <div className="about-bio-content overflow-x-hidden flex-col w-full text-almostBlack font-inter font-[400] text-xl leading-snug overflow-y-auto">
          <img className="mb-[5vh]" src={chistar}></img>
          <p className="about-bio-main mb-[5vh]">
            I study computer science and economics at the{" "}
            <span className="text-[#ff6541]">
              University of Illinois, Urbana-Champaign
            </span>
            . I’m a creator; most of my time is spent building programs, making
            videos, and writing essays. The rest of it is spent being pedantic
            (this website took way longer than it should have).
          </p>
          <div className="bullets">
            <div className="bullet mb-[5vh]">
              I’m interested in technology that facilitates human connection.
              I'm working to become a full-stack developer, hopefully making
              beautiful products with high utility to people.
            </div>
            <div className="bullet mb-[5vh]">
              <span className="p1">
                At college, I am a software developer at{" "}
                <a
                  className="link text-almostBlack underline hover:decoration-solid decoration-dotted hover:decoration-lightpink transition duration-[200ms] ease-in-out"
                  href="https://uiucquant.web.illinois.edu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quant
                </a>
                , UIUC's premier quantitative finance organization, and
                co-founder and president at August Productions, where we make
                films and documentaries. This summer, I'm interning as a
                full-stack developer at{" "}
                <a
                  className="link text-almostBlack underline hover:decoration-solid decoration-dotted hover:decoration-lightpink transition duration-[200ms] ease-in-out"
                  href="https://www.mediaocean.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mediaocean
                </a>
                .
              </span>
            </div>
            <p className="p1 mb-[5vh]">
              {" "}
              In my free time, I like roaming around Chicago, exploring cafés,
              watching trains, taking pictures, and reading. I love learning
              about human behavior, transportation, and startups, among many
              other things.
            </p>
            <p className="p1 mb-[5vh]">
              I'm always looking to connect with and meet new people, so please
              feel free to reach out to me through any of the social links that
              you see on the left! I would <em>especially</em> love to hear from
              you if:
              <div className="list mt-[5vh]">
                <p className="about-cat-1 mb-[1vh]">
                  {" "}
                  <span className="1 text-navy font-tablet">1.&nbsp;</span>
                  You are a recruiter looking for a software engineering intern.
                </p>
                <p className="about-cat-2 mb-[1vh]">
                  {" "}
                  <span className="2 text-navy font-tablet">2.&nbsp;</span>
                  You are a developer/filmmaker/photographer looking to
                  collaborate on a project.
                </p>
                <p className="about-cat-3 mb-[1vh]">
                  {" "}
                  <span className="3 text-navy font-tablet">3.&nbsp;</span>
                  If you would like to talk to (or argue with) me about one of
                  my many{" "}
                  <span className="link text-almostBlack underline hover:decoration-solid decoration-dotted">
                    interests
                  </span>{" "}
                  .
                </p>
              </div>
            </p>
          </div>
        </div>
        <img
          className="picture-mobile rounded w-[100%] mb-[1vh]"
          src={fallpic}
        ></img>
      </div>
    </div>
  );
};

export default About;
