import React from "react";
import Navmobile from "../../components/navbar/Navmobile";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import "./About.css";
import newlogo from "../../utils/StarLogoNeel.png";
import MobileFooter from "../../components/navbar/MobileFooter";
import headshot from "../../utils/profilepicbw.jpg";

const About = () => {
  return (
    <div className="about-page bg-eggshell2 h-screen flex flex-row justify-center selection:bg-skyBlue break-normal overflow-y-scroll">
      <Helmet>
        <title>About | Neel Khare</title>
      </Helmet>
      <div className="about-content bg-eggshell2 h-screen flex flex-row justify-center">
        <div>
          <Navbar isHomePage={true} />
        </div>
        <div className="about-bio float flex-col w-[40%] mt-[10vh] sm:ml-[7.5rem] overflow-y-visible">
          <Navmobile />
          <div className="quote-mobile text-slate-600 font-inter text-sm mb-5 flex justify-end">
            <em>Encourage the beautiful, for the useful encourages itself.</em>
          </div>
          <div className="callout block w-full rounded-md bg-lightMud bg-opacity-10 mb-5 sm:text-lg text-md p-3 text-mud leading-snug">
            <div className="mb-5">
              <p>
                Hey! This website is currently undergoing a deep, tectonic
                renovation. A more intuitive and exciting experience awaits you
                :)
              </p>
            </div>
            <div className="flex flex-row justify-between sm:text-sm text-xs text-lightMud">
              <p>Posted on Jul 15, 2023.</p>
              <p>ETA - 2 months</p>
            </div>
          </div>
          <div className="desktop-head flex justify-between">
            <div className="navbar-neel text-navy relative flex items-center sm:text-2xl text-xl font-[500] font-inter mb-5">
              Hello, I'm Neel. I'm an artisan engineer.
            </div>
            <img className="mb-5 sm:h-[2rem] h-[1.75rem]" src={newlogo}></img>
          </div>

          <div className="about-bio-content overflow-x-hidden flex-col w-full text-almostBlack font-inter font-[400] text-base sm:text-base leading-snug">
            <p className="about-bio-main mb-5">
              I study computer science and psychology at the University of
              Illinois, Urbana-Champaign. I value . I spend most of my time
              building beautiful things, learning from interesting people, and
              strengthening my brain and body. Sometimes, I go to class.
            </p>
            <p className="text-lightMud mb-5">
              To learn more about me, visit my{" "}
              <a
                className="link text-lightMud underline hover:decoration-solid decoration-dotted decoration-mud transition duration-[1000ms] ease-in-out"
                href="index/"
              >
                index
              </a>
              .
            </p>
            <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
              Presently
            </div>
            <ul className="list-disc pl-5 mb-5 marker:text-chinaRose">
              <li className="list-item">
                Building a mobile app to augment your experience with the
                <br></br>
                <a
                  className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                  href="https://hubermanlab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Huberman Lab
                </a>{" "}
                podcast.
              </li>
              <li className="list-item">
                Setting up a{" "}
                <a
                  className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                  href="https://steel-plain-b28.notion.site/Proposing-a-Design-Technology-Symposium-at-the-University-of-Illinois-1983d619135a45c0bae4651aee51e135"
                  target="_blank"
                  rel="noreferrer"
                >
                  Design Symposium
                </a>{" "}
                at college.
              </li>
              <li>
                Building{" "}
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
            </ul>
            <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
              In the past
            </div>
            <ul className="list-disc pl-5 mb-5 marker:text-chinaRose">
              <li className="list-item">
                Designed and developed the frontend architecture and branding
                for{" "}
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
                Taught students the fundamentals of Object-Oriented Programming
                as a course assistant for{" "}
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
              I'm endlessly curious about people and the world around us, so I'm
              always open to making new friends, learning new things, working on
              cool projects, or just chatting! You can reach me at{" "}
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="mailto:neelk2"
                target="_blank"
                rel="noreferrer"
              >
                neelk2
                <span className="text-chinaRose">&#123;</span>at
                <span className="text-chinaRose">&#125;</span>illinois.edu
              </a>{" "}
              or at any of the social links you see on the side.
            </p>
            <hr className="line-2 border-dotted mb-5 h-[1px] border-navy"></hr>
            <img
              src={headshot}
              className="mb-10 rounded-sm pointer-events-none mb-5 sm:hidden"
            ></img>
            <div className="quote-desktop text-slate-600 font-inter text-sm mb-[4.25rem] flex justify-end">
              <em>
                Encourage the beautiful, for the useful encourages itself.
              </em>
            </div>
            <MobileFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
