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
          <img className="mb-[5vh] h-[2.25rem]" src={newlogo}></img>
        </div>
        <div className="about-bio-content overflow-x-hidden flex-col w-full text-almostBlack font-inter font-[400] text-xl leading-snug overflow-y-auto">
          <p className="about-bio-main mb-[5vh]">
            I study computer science and economics at the{" "}
            <span className="text-[#ff6541]">
              University of Illinois, Urbana-Champaign
            </span>
            . I’m a creator; most of my time is spent building{" "}
            <a
              className="link text-almostBlack underline hover:decoration-solid decoration-dotted hover:decoration-lightpink transition duration-[200ms] ease-in-out"
              href="https://github.com/szplugz"
              target="_blank"
              rel="noreferrer"
            >
              programs
            </a>
            , making&nbsp;
            <a
              className="link text-almostBlack underline hover:decoration-solid decoration-dotted hover:decoration-lightpink transition duration-[200ms] ease-in-out"
              href="https://youtube.com/kiltoch"
              target="_blank"
              rel="noreferrer"
            >
              videos
            </a>
            , and writing essays. The rest of it is spent being pedantic (this
            website took way longer than it should have).
          </p>
          <div className="bullets">
            <div className="bullet mb-[5vh]">
              I’m interested in technology that explores and enhances the human
              condition at the neuro-psychological level. I believe that there
              is a lot of untapped insight at the intersection of computer
              science and neuroscience, which, once realized, will enable us to
              live more fulfilling lives. Ultimately, I would like to leverage
              scientific literature, historical data, and machine learning to
              build products that help people optimize their mental performance
              and build deeper social connctions.
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
                films and documentaries. Over the past summer, I was a full-stack
                developer intern at{" "}
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
              In my free time, I like roaming around Chicago, visiting cafés,
              watching trains, taking pictures, and reading. I think a lot about
              human behavior, transportation, and cities.
            </p>
            <hr className="line border-dotted my-[5vh] h-[1px] border-navy"></hr>
            <p className="p-last mb-[5vh]">
              I built this website because I wanted a single platform where
              people (and recruiters) could find everything they need to know
              about me. I'd love to hear from you if you're a video creator or
              programmer and you'd like to work on a project together. And even
              if you're not, the internet is a great way to meet people, in my
              opinion, so if you find something here that's worth talking about,
              or if you just want to praise me and tell me how elegant my
              website is and how you want to pay me a lot of money to build a
              similar one for you, please reach out to me! I haven't set up a
              contact page yet, but you can use any of the social links you see
              to get in touch with me in the meantime.
            </p>
            <p className="subtext text-slate-600 font-inter font-[300] text-sm mb-[6vh]">
              Btw, a personal website comes in handy when you're on a date with
              someone and you forget who you are. Just open your website and
              watch the confidence start flowing through you like fuel through a
              jet engine.
            </p>
            <hr className="line-2 border-dotted mb-[8vh] h-[1px] border-navy"></hr>
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
