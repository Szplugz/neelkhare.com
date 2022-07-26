import React, { useState } from "react";
import "./Navmobile.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    navy: {
      main: "#EE9B86",
    },
  },
});

const Navmobile = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="navbar-mobile">
      <div className="flexibleHead flex justify-between">
        <a
          href="/about"
          className="navbar-neel text-navy relative flex items-center text-4xl font-[500] font-inter mb-[5vh]"
        >
          Hello, I'm Neel.
        </a>
        <div>
          {open ? (
            <ThemeProvider theme={theme}>
              <IconButton
                className="button rounded-[50%] w-[3vh] scale-150"
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
                className="button rounded-[50%] w-[3vh] scale-150"
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
            <li className="navbar-index text-gray-600 font-forma relative flex items-center font-[300] text-2xl">
              <NavbarItem text={"Index"} />
            </li>
            <li className="navbar-item font-[300] text-2xl">
              <a href="/people">
                <NavbarItem text={"People"} />
              </a>
            </li>
            <li className="navbar-item font-[300] text-2xl">
              <a href="/photography">
                <NavbarItem text={"Photography"} />
              </a>
            </li>
            <li className="navbar-item font-[300] text-2xl">
              <a
                href="https://read.cv/szplugz"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"Resumé"} />
              </a>
            </li>
            <li className="navbar-bits text-gray-600 font-forma relative flex items-center font-[300] text-2xl">
              <NavbarItem text={"Tapas"} />
            </li>
            <li className="navbar-item font-[300] text-2xl">
              <a href="/work">
                <NavbarItem text={"Work"} />
              </a>
            </li>
          </div>
          <div className="navbar-external flex flex-col justify-start align-top">
            <li className="navbar-email text-almostBlack font-forma relative flex items-center font-[300] text-2xl hover:text-blue transition duration-500 ease-in-out">
              <a
                href="mailto:neelk2@illinois.edu"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"email"} />
              </a>
            </li>
            <li className="navbar-github text-almostBlack font-forma relative flex items-center font-[300] text-2xl hover:text-githubGrey transition duration-500 ease-in-out">
              <a
                href="https://github.com/Szplugz"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"github"} />
              </a>
            </li>
            <li className="navbar-twitter text-almostBlack font-forma relative flex items-center font-[300] text-2xl hover:text-twitterBlue transition duration-500 ease-in-out">
              <a
                href="https://www.instagram.com/secondhandneel/"
                target="_blank"
                rel="noreferrer"
              >
                <NavbarItem text={"twitter"} />
              </a>
            </li>
            <li className="navbar-youtube text-almostBlack font-forma relative flex items-center font-[300] text-2xl hover:text-youtubeRed transition duration-500 ease-in-out">
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

const Dropdown = () => {
  <div className="dropdown h-[100vh] w-[100vw]">
    <div className="navbar-menu flex flex-col">
      <li className="navbar-index text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"Index"} />
      </li>
      <li className="navbar-lyrics text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"Lyrics"} />
      </li>
      <li className="navbar-people text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"People"} />
      </li>
      <li className="navbar-photography text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"Photography"} />
      </li>
      <li className="navbar-projects text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"Projects"} />
      </li>
      <li className="navbar-quotes text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"Quotes"} />
      </li>
      <li className="navbar-item">
        <a href="https://read.cv/szplugz" target="_blank" rel="noreferrer">
          <NavbarItem text={"Resumé"} />
        </a>
      </li>
      <li className="navbar-websites text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"Websites"} />
      </li>
      <li className="navbar-bits text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none">
        <NavbarItem text={"Tapas"} />
      </li>
    </div>
    <div className="navbar-external flex flex-col justify-start align-top">
      <li className="navbar-email text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-blue transition duration-500 ease-in-out">
        <a href="mailto:neelk2@illinois.edu" target="_blank" rel="noreferrer">
          <NavbarItem text={"email"} />
        </a>
      </li>
      <li className="navbar-github text-almostBlack font-forma relative flex items-center font-[300] text-[3vh] leading-none hover:text-githubGrey transition duration-500 ease-in-out">
        <a href="https://github.com/Szplugz" target="_blank" rel="noreferrer">
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
  </div>;
};

const NavbarItem = ({ text }) => <div>{text}</div>;

export default Navmobile;
