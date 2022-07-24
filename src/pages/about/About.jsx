import React from "react";
import HomeNav from "../../components/navbar/HomeNav";
import Navmobile from "../../components/navbar/Navmobile";
import biopic from "../../utils/biopic.jpg";
import { Helmet } from "react-helmet";
import fallpic from "../../utils/fallrl2square.jpg";
import "./About.css";

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
            Hello
          </div>
        </div>
        <div className="about-bio-content overflow-x-hidden flex-col w-full text-almostBlack font-inter font-[400] text-xl leading-snug overflow-y-auto">
          <p className="about-bio-main mb-[5vh]">
            I'm Neel Khare, a junior at the{" "}
            <span className="text-[#ff6541]">
              University of Illinois, Urbana-Champaign
            </span>
            , where I spend most of the year studying computer science and
            writing code. What matters to me the most is consistent personal
            growth and sharing my knowledge with the world in the hope of
            lifting others up. At the moment, I'm quite interested in full-stack
            development and product design, and I am always looking to involve
            myself in projects that improve people’s quality of life.
          </p>
          <div className="bullets">
            <div className="bullet mb-[5vh]">
              <span className="p1">
                At college, I am a software developer at{" "}
                <a
                  className="link text-almostBlack underline hover:decoration-solid decoration-dotted hover:decoration-lightpink transition duration-[200ms] ease-in-out"
                  href="https://www.quantillinois.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Quant
                </a>
                , and co-founder and President at August Productions, where we
                make films and documentaries. I also build and maintain side
                projects that mostly consist of websites and handy
                web-applications. This summer, I'm interning as a full-stack
                developer at{" "}
                <a
                  className="link text-almostBlack underline hover:decoration-solid decoration-dotted hover:decoration-lightpink transition duration-[200ms] ease-in-out"
                  href="https://www.mediaocean.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mediaocean
                </a>
              </span>
            </div>
            {/* <li className="bullet mb-[1vh]">
              <span className="p2">
                I also build and maintain side projects that mostly consist of
                websites and handy web-applications.
              </span>
            </li>
            <li className="bullet mb-[3vh]">
              <span className="p2">
                I'm a full-stack engineering intern at{" "}
                <a
                  className="link text-almostBlack underline hover:decoration-solid decoration-dotted hover:text-lightpink transition duration-[200ms] ease-in-out"
                  href="https://www.mediaocean.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Mediaocean
                </a>
                .
              </span>
            </li> */}
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
