import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import "./People.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import chistar from "../../utils/CHISTAR.svg";
import newlogo from "../../utils/StarLogoNeel.svg";

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
      <Navbar />
      <div className="people-content float flex-col w-[40%] pt-[10vh] ml-[7.5vw] overflow-y-hidden font-inter  sm:text-lg text-sm">
        <div className="header flex flex-row justify-between items-center text-navy mb-[5vh] text-2xl font-[500]">
          <div className="title">People</div>
          <img className="stars h-[4vh]" src={newlogo}></img>
        </div>
        <Navmobile />
        <div className="p1 mb-[5vh] sm:text-xl text-base">
          One of the reasons I love the internet is that it affords access to
          the minds of a variety of people from across the globe with
          interesting things to say. This website and many of my lifestyle
          choices are heavily inspired by a(n ever-expanding) group of
          fascinating people:
        </div>
        <div className="people-technology mb-[5vh]">
          <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-2 text-2xl font-[500]">
            Technology
          </div>
          <div className="people-list">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Paul Graham</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="http://paulgraham.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
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
                  className="people-link text-candy"
                  href="http://patrickcollison.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
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
                  className="people-link text-candy"
                  href="https://www.mollymielke.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/mollyfmielke"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Devon Zuegel</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="https://devonzuegel.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/devonzuegel"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Michael Solana</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="https://piratewires.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/micsolana"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Matt Levine</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <div></div>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/matt_levine"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Rob Henderson</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <div></div>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/robkhenderson"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Lex Fridman</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="https://lexfridman.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/lexfridman"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="people-life mb-[5vh]">
          <div className="life-header flex flex-row justify-between items-center text-chinaRose mb-2 text-2xl font-[500]">
            Life
          </div>
          <div className="person-list">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Andrew Huberman</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="https://hubermanlab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/hubermanlab"
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
                  href="https://ava.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
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
                  className="people-link text-candy"
                  href="https://waitbutwhy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/waitbutwhy"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Jonathan Haidt</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="https://jonathanhaidt.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy"
                  href="https://twitter.com/jonhaidt"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy w-[40%]">
                Jordan Peterson (professor era)
              </div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy"
                  href="https://www.jordanbpeterson.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="people-art mb-[5vh]">
          <div className="art-header flex flex-row justify-between items-center text-chinaRose mb-2 text-2xl font-[500]">
            Art
          </div>
          <div className="person-list">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Tim Kellner</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <div></div>
                <a
                  className="people-link text-candy"
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
                  className="people-link text-candy"
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
                  className="people-link text-candy"
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
        <img className="footerstar h-[5vh] mb-[5vh]" src={newlogo}></img>
      </div>
    </div>
  );
};

const Navmobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-mobile">
      <div className="flexibleHead flex justify-between">
        <p className="navbar-neel text-navy relative flex items-center font-[500] text-2xl font-inter mb-[5vh]">
          People
        </p>
        <div>
          {open ? (
            <ThemeProvider theme={theme}>
              <IconButton
                className="button rounded-[50%] h-[3vh] w-[3vh]"
                aria-label="close"
                color="navy"
                onClick={() => setOpen(false)}
              >
                <CloseIcon />
              </IconButton>
            </ThemeProvider>
          ) : (
            <ThemeProvider theme={theme}>
              <IconButton
                className="button rounded-[50%] h-[3vh] w-[3vh]"
                aria-label="open"
                color="navy"
                onClick={() => setOpen(true)}
              >
                <AddIcon />
              </IconButton>
            </ThemeProvider>
          )}
        </div>
      </div>
      {open && (
        <div className="dropdown flex flex-col h-[100vh] w-[100vw]">
          <div className="navbar-menu mb-[5vh] flex flex-col">
            <li className="navbar-item font-[300] text-xl">
              <a href="/about">
                <NavbarItem text={"Home"} />
              </a>
            </li>
            <li className="navbar-index text-gray-600 font-forma relative flex items-center font-[300] text-xl">
              <NavbarItem text={"Index"} />
            </li>
            <li className="navbar-item font-[300] text-xl">
              <a href="/people">
                <NavbarItem text={"People"} />
              </a>
            </li>
            <li className="navbar-item font-[300] text-xl">
              <a href="/photography">
                <NavbarItem text={"Photography"} />
              </a>
            </li>
            <li className="navbar-item font-[300] text-xl">
              <a
                href="https://read.cv/szplugz"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"Resumé"} />
              </a>
            </li>
            <li className="navbar-bits text-gray-600 font-forma relative flex items-center font-[300] text-xl">
              <NavbarItem text={"Tapas"} />
            </li>
            <li className="navbar-item font-[300] text-xl">
              <a href="/work">
                <NavbarItem text={"Work"} />
              </a>
            </li>
          </div>
          <div className="navbar-external flex flex-col justify-start align-top">
            <li className="navbar-email text-almostBlack font-forma relative flex items-center font-[300] text-xl hover:text-blue transition duration-500 ease-in-out">
              <a
                href="mailto:neelk2@illinois.edu"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"email"} />
              </a>
            </li>
            <li className="navbar-github text-almostBlack font-forma relative flex items-center font-[300] text-xl hover:text-githubGrey transition duration-500 ease-in-out">
              <a
                href="https://github.com/Szplugz"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"github"} />
              </a>
            </li>
            <li className="navbar-twitter text-almostBlack font-forma relative flex items-center font-[300] text-xl hover:text-twitterBlue transition duration-500 ease-in-out">
              <a
                href="https://www.twitter.com/szplugz/"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"twitter"} />
              </a>
            </li>
            <li className="navbar-youtube text-almostBlack font-forma relative flex items-center font-[300] text-xl hover:text-youtubeRed transition duration-500 ease-in-out">
              <a
                href="https://www.youtube.com/kiltoch/"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"youtube"} />
              </a>
            </li>
          </div>
        </div>
      )}
    </div>
  );
};

const NavbarItem = ({ text }) => <div>{text}</div>;

export default People;
