import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import "./People.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import chistar from "../../utils/CHISTAR.svg";
import newlogo from "../../utils/StarLogoNeel.png";
import Navmobile from "../../components/navbar/Navmobile";
import MobileFooter from "../../components/navbar/MobileFooter";

const theme = createTheme({
  palette: {
    lightPink: {
      main: "#EE9B86",
    },
    navy: {
      main: "#003547",
    },
  },
});

const People = () => {
  return (
    <div className="people-page bg-pastelGreen h-screen w-screen flex flex-row justify-center selection:bg-mangoHighlight">
      <Helmet>
        <title>People | Neel Khare</title>
      </Helmet>
      {/* Navabr is hidden on mobile because of index.css in case you get stuck on it for hours again */}
      <Navbar />
      <div className="people-content flex-col w-[40%] pt-[10vh] ml-[7.5vw] overflow-y-hidden font-inter sm:text-lg text-sm">
        <Navmobile />
        <div className="header flex flex-row justify-between items-center text-navy mb-5 sm:text-3xl text-2xl font-[500]">
          <div className="title">People</div>
          <img className="people-stars h-[4vh]" src={newlogo}></img>
        </div>
        <div className="p1 mb-5 text-base">
          I'm fortunate to have met and befriended some wonderful people who are
          perpetually curious, energetic, and interesting.
        </div>
        <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
          Friends
        </div>
        <div className="people-list text-base mb-5">
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Luke Clancy</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://www.lukeclancy.me/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://twitter.com/luke_clancy1"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Sam Schapiro</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://samjschapiro.github.io/samjschapiro/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://www.linkedin.com/in/samuel-schapiro/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Rohan Hirani</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://rohanhirani.notion.site/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://twitter.com/rohanhirani_"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Aidan Murphy</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <div></div>
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://twitter.com/adnmurphy"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Grant Hale</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://granthale.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                href="https://twitter.com/grant__hale"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
        </div>
        <div className="p1 mb-5 text-base">
          But the internet affords me access to the minds of a variety of people
          from across the globe, and most of my ideas, interests, and lifestyle
          choices are heavily inspired by a group of fascinating people I follow
          online:
        </div>
        <div className="people-technology">
          <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            Technology & Entrepreneurship
          </div>
          <div className="people-list text-base mb-3">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Paul Graham</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="http://paulgraham.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/paulg"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Patrick Collison</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="http://patrickcollison.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/patrickc"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Molly Mielke</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.mollymielke.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/mollyfmielke"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Jake Chvatal</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://jake.isnt.online/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.are.na/jake-isnt"
                  target="_blank"
                  rel="noreferrer"
                >
                  are.na
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Erik Torenberg</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://eriktorenberg.substack.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/eriktorenberg"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Marc Andreesen</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://pmarca.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/pmarca"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="people-life">
          <div className="life-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            Life
          </div>
          <div className="people-list text-base mb-3">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Andrew Huberman</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://hubermanlab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/hubermanlab"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Tim Ferriss</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://tim.blog/new-start-here/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/tferriss"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy w-[40%]">Jordan Peterson</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.jordanbpeterson.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Lex Fridman</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://lexfridman.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/lexfridman"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Isabel Hazan</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://mindmine.substack.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/isabelunraveled"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Ava Huang</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="https://ava.substack.com/ hover:text-navy ease-in-out transition duration-[300ms]"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/noampomsky"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Tim Urban</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy  hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://waitbutwhy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/waitbutwhy"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="people-art mb-[5vh]">
          <div className="art-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            Art & Design
          </div>
          <div className="people-list text-base mb-3">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Tim Kellner</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <div></div>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.youtube.com/user/TimtotheWild"
                  target="_blank"
                  rel="noreferrer"
                >
                  youtube
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Cody Hudson</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.struggleinc.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <div></div>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Rasmus Andersson</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://rsms.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <MobileFooter />
      </div>
    </div>
  );
};

export default People;
