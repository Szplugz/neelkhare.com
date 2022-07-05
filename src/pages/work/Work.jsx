import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Title } from "@mui/icons-material";
import "./Work.css";

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

export const Work = () => {
  return (
    <div className="work-page bg-skyBlue h-screen w-screen flex flex-row justify-center selection:bg-mangoHighlight">
      <Helmet>
        <title>Work | Neel Khare</title>
      </Helmet>
      <Navbar />
      <div className="work-content float flex-col w-[40%] pt-[10vh] ml-[7.5vw] overflow-y-auto font-inter">
        <div className="work-header text-candy mb-[5vh]">Work</div>
        <Navmobile />
        <div className="p1 mb-[5vh]">
          Ultimately, I want to make beautiful things. I define <em>Work</em> as
          experiences that count towards that goal.
        </div>
        <hr className="line-top border-dotted my-[5vh] h-[1px] border-navy"></hr>
        <div className="work-roles flex flex-row mb-[5vh]">
          <div className="roles-left w-[25%] font-[500]">Roles</div>
          <div className="roles-right flex flex-col w-[80%]">
            <div className="role-title flex flex-col mb-[3vh]">
              <h1 className="text-candy">Full-stack Engineering Intern</h1>
              <div className="org-date flex flex-row justify-between mb-[1vh]">
                <p1 className="org font-[400]">Mediaocean</p1>
                <p1 className="date font-[200] italic text-xs">Summer '22</p1>
              </div>
              <p1 className="desc font-[300] text-sm">
                Helped build Mediaocean's upcoming flagship advertising product.
                Learned a lot about GraphQL, Typescript, and CI/CD.
              </p1>
            </div>
            <div className="role-title flex flex-col mb-[3vh]">
              <h1 className="text-candy">Frontend Development Lead</h1>
              <div className="org-date flex flex-row justify-between mb-[1vh]">
                <p1 className="org font-[400]">Quant</p1>
                <p1 className="date font-[200] italic text-xs">
                  Since Feb '22
                </p1>
              </div>
              <p1 className="desc font-[300] text-sm">
                Building Quant's main website and internal member services.
                Quite full-stack actually.
              </p1>
            </div>
            <div className="role-title flex flex-col mb-[0]">
              <h1 className="text-candy">Course Assistant</h1>
              <div className="org-date flex flex-row justify-between mb-[1vh]">
                <p1 className="org font-[400]">CS 124 @ UIUC</p1>
                <p1 className="date font-[200] italic text-xs">
                  Aug '21 - Dec '21
                </p1>
              </div>
              <p1 className="desc font-[300] text-sm">
                Helped students learn and love CS by teaching them OOP in Java.
              </p1>
            </div>
          </div>
        </div>
        <hr className="line border-dotted my-[5vh] h-[1px] border-navy"></hr>
        <div className="work-projects flex flex-row mb-[3vh]">
          <div className="projects-left w-[25%] font-[500]">Projects</div>
          <div className="projects-right flex flex-col w-[80%]">
            <div className="project-title flex flex-col mb-[5vh]">
              <a
                className="text-candy"
                href="https://github.com/Szplugz/neelkhare.com"
                target="_blank"
                rel="noreferrer"
              >
                neelkhare.com
              </a>
              <p1 className="desc-short font-[400] mb-[1vh]">
                Personal Website
              </p1>
              <p1 className="desc-long font-[300] text-sm mb-[0.5vh]">
                You're looking at it. I wanted to build a simple, elegant
                website that would serve as a platform for the internet to meet
                and learn about me. It will also act as a playground for me to
                mess around with React and CSS and to test new features.
              </p1>
            </div>
            <div className="project-title flex flex-col mb-[5vh]">
              <a
                className="text-candy"
                href="https://github.com/Szplugz/berry"
                target="_blank"
                rel="noreferrer"
              >
                berry
              </a>
              <p1 className="desc-short font-[400] mb-[1vh]">
                HackIllinois 2022 Project
              </p1>
              <p1 className="desc-long font-[300] text-sm mb-[0.5vh]">
                Berry was meant to be a webapp where college students can
                connect their Instagram and Twitter profiles and see a list of
                mutuals enrolled in the same classes as them.
                <br></br>
                <br></br>
                If you check out the code, it'll be pretty obvious that this was
                my first hackathon. The project was never completed because we
                realized halfway through the sprint that Instagram's official
                API no longer supports logins to other apps (using OAuth or
                otherwise) without conducting an App Review, which usually take
                5+ days.
                <br></br>
                <br></br>
                We also ran into a bunch of other obstacles with Twitter's API
                and Firebase, which were difficult to overcome within our time
                limit. I think the original goal of Berry can still be achieved,
                but I just haven't got around to working on it yet.
              </p1>
            </div>
            <div className="project-title flex flex-col mb-[5vh]">
              <a
                className="text-candy"
                href="https://github.com/Szplugz/LinkBot"
                target="_blank"
                rel="noreferrer"
              >
                LinkBot
              </a>
              <p1 className="desc-short font-[400] mb-[1vh]">Discord Bot</p1>
              <p1 className="desc-long font-[300] text-sm mb-[0.5vh]">
                My first ever indie project. A simple Discord bot that generates
                Zoom and Google Meet links directly in Discord.
              </p1>
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
        <p className="navbar-neel text-candy relative flex items-center font-[400] font-inter mb-[10vh]">
          Work
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
            <li className="navbar-bits text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Tapas"} />
            </li>
            <li className="navbar-websites text-gray-600 font-forma relative flex items-center font-[300] text-[3vh] leading-none">
              <NavbarItem text={"Websites"} />
            </li>
            <li className="navbar-item font-[300] text-[3vh]">
              <a href="/work">
                <NavbarItem text={"Work"} />
              </a>
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
                href="https://www.twitter.com/szplugz/"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"twitter"} />
              </a>
            </li>
            <li className="navbar-youtube text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-youtubeRed transition duration-500 ease-in-out">
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

export default Work;
