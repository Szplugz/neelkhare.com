"use client";

import React from "react";
import Image from "next/image";
import logo from "../_assets/images/StarLogoNeel.png";
import MenuButton from "./MenuButton";
import SearchBox from "./SearchBox";
import { useEffect, useState, useRef } from "react";

const Navigation = ({ props }) => {
  const searchBoxRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  console.log(isSearchActive);
  const keyMappings = {
    a: {
      url: "https://sander.are.na/neel-khare/channels",
      target: "_blank",
    },
    t: {
      url: "https://twitter.com/Szplugz",
      target: "_self",
    },
  };

  const showSearchBox = () => {
    console.log("search");
    setIsSearchActive(true);
  };

  const hideSearchBox = () => {
    setIsSearchActive(false);
  };

  const handleKeyPress = (event) => {
    console.log(event);
    if (event.metaKey == true) {
      cmdPressed.current = true;
    }
    const pressedKey = event.key.toLowerCase();
    if (cmdPressed.current === true) {
      if (pressedKey == "k") {
        if (cmdPressed.current === true) {
          showSearchBox();
        }
      }
    } else if (pressedKey == "escape") {
      console.log("yuh");
      // something weird going on here, if you add an if statement to check whether isSearchActive is true before setting
      // it to false, it doesn't fire
      hideSearchBox();
    } else if (event.srcElement.id !== "searchbox") {
      if (pressedKey in keyMappings) {
        try {
          window.open(
            keyMappings[pressedKey].url,
            keyMappings[pressedKey].target
          );
        } catch (e) {
          console.log(e);
        }
      }
    }
  };

  const handleKeyRelease = (event) => {
    if (event.code == "MetaLeft") {
      cmdPressed.current = false;
    }
  };

  let cmdPressed = useRef(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    window.addEventListener("keyup", handleKeyRelease);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      window.removeEventListener("keyup", handleKeyRelease);
    };
  }, []);

  useEffect(() => {
    const handleClick = (event) => {
      const element = searchBoxRef.current;
      if (!element.contains(event.target)) {
        hideSearchBox();
      }
    };

    if (isSearchActive) {
      document.addEventListener("pointerdown", handleClick);
      searchBoxRef.current.focus();
    }

    return () => {
      document.removeEventListener("pointerdown", handleClick);
    };
  });

  return (
    <React.Fragment>
      <div className="navigation-block">
        <div className="navigation-menu">
          <Image src={logo} alt={"Kitchen"} height={50}></Image>
          <div className="navigation-explore">
            <MenuButton key_="1" page="PORTFOLIO" styles="mt-5" />
            <MenuButton key_="2" page="INTAKE" styles="mt-1" />
            <hr className="text-[#8B8B8B] mt-3"></hr>
          </div>
          <div className="navigation-about">
            <MenuButton key_="B" page="BIOGRAPHY" styles="mt-1" />
            <MenuButton key_="R" page="RESUME" styles="mt-1" />
            <MenuButton key_="C" page="CONTACT" styles="mt-1" />

            <hr></hr>
          </div>
          <div className="navigation-socials">
            <MenuButton
              key_="A"
              page="ARE.NA"
              styles="mt-1"
              url={"https://sander.are.na/neel-khare/channels"}
            />
            <MenuButton
              key_="T"
              page="TWITTER"
              styles="mt-1"
              url={"https://twitter.com/Szplugz"}
            />
            <hr className=""></hr>
          </div>
        </div>
        <button onClick={showSearchBox} className="">
          Search...
        </button>
      </div>
      <SearchBox isVisible={isSearchActive} id="searchbox" ref={searchBoxRef} />
    </React.Fragment>
  );
};

export default Navigation;
