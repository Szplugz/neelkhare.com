import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import "./People.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      <div className="people-content float flex-col w-[30%] my-[10vh] ml-[7.5vw] overflow-y-auto font-inter">
        <div className="header text-navy mb-[5vh]">People</div>
        <Navmobile />
        <div className="p1 mb-[2vh]">
          A list of cool internet people that do cool things from whom I
          regularly learn and draw inspiration. Interestingly, almost all of
          them write.
        </div>
        <div className="subtext text-navy font-inter font-[300] text-xs mb-[5vh]">
          <em>
            Most of them are in the same "twitter-tech-entrepreneur-writer"
            network.
          </em>
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
            <div className="text-navy">Aella</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://knowingless.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/aella_girl"
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
            <div className="text-navy">Randall Munroe</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://xkcd.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
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
            <div className="text-navy">Jordan Peterson</div>
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
          <hr className="line border-dotted my-[0.5vh] h-[1px] border-navy"></hr>
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
        </div>
      </div>
    </div>
  );
};

const Navmobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-mobile">
      <div className="flexibleHead flex justify-between">
        <p className="navbar-neel text-navy relative flex items-center font-[400] font-inter mb-[10vh]">
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
            <li className="navbar-item font-[300] text-[3vh]">
              <a href="/about">
                <NavbarItem text={"Home"} />
              </a>
            </li>
            <li className="navbar-intrigue text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Intrigue"} />
            </li>
            <li className="navbar-lyrics text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Lyrics"} />
            </li>
            <li className="navbar-item font-[300] text-[3vh]">
              <a href="/people">
                <NavbarItem text={"People"} />
              </a>
            </li>
            <li className="navbar-photography text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Photography"} />
            </li>
            <li className="navbar-projects text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Projects"} />
            </li>
            <li className="navbar-quotes text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Quotes"} />
            </li>
            <li className="navbar-item font-[300] text-[3vh]">
              <a
                href="https://drive.google.com/file/d/1Opg8P9ej8cd1tPoKEsSkcYo7F4J3Uz63/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"Resumé"} />
              </a>
            </li>
            <li className="navbar-websites text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Websites"} />
            </li>
            <li className="navbar-bits text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Tapas"} />
            </li>
          </div>
          <div className="navbar-external flex flex-col justify-start align-top">
            <li className="navbar-email text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-blue transition duration-500 ease-in-out">
              <a
                href="mailto:neelk2@illinois.edu"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"email"} />
              </a>
            </li>
            <li className="navbar-github text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-githubGrey transition duration-500 ease-in-out">
              <a
                href="https://github.com/Szplugz"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"github"} />
              </a>
            </li>
            <li className="navbar-twitter text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-twitterBlue transition duration-500 ease-in-out">
              <a
                href="https://www.instagram.com/secondhandneel/"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"twitter"} />
              </a>
            </li>
            <li className="navbar-youtube text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-youtubeRed transition duration-500 ease-in-out">
              <a
                href="https://www.instagram.com/secondhandneel/"
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
