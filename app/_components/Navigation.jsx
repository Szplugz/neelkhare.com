"use client";

import React from "react";
import Image from "next/image";
import logo from "../_assets/images/StarLogoNeel.png";
import MenuButton from "./MenuButton";
import SearchBox from "./SearchBox";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";

const Navigation = ({ props }) => {
  const searchBoxRef = useRef(null);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const pathname = usePathname();
  const keyMappings = {
    1: {
      url: "/work",
      target: "_parent",
      external: false,
    },
    2: {
      url: "/notebook",
      target: "_parent",
      external: false,
    },
    a: {
      url: "https://sander.are.na/neel-khare/channels",
      target: "_blank",
      external: true,
    },
    t: {
      url: "https://twitter.com/Szplugz",
      target: "_blank",
      external: true,
    },
    r: {
      url: "https://read.cv/szplugz",
      target: "_blank",
      external: true,
    },
    g: {
      url: "https://github.com/szplugz",
      target: "_blank",
      external: true,
    },
  };

  const showSearchBox = (e) => {
    setIsSearchActive(true);
  };

  const hideSearchBox = () => {
    setIsSearchActive(false);
  };

  const handleKeyPress = (event) => {
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
      <div className="navigation-block md:flex md:flex-col md:flex-shrink-0 hidden">
        <div className="navigation-menu">
          <Link href="/">
            <Image
              src={logo}
              className="mb-4"
              alt={"Kitchen"}
              height={50}
            ></Image>
          </Link>
          <div className="navigation-explore">
            <MenuButton
              className="work-button"
              key_="1"
              title="WORK"
              selected={pathname.startsWith("/work")}
              url="/work/"
              target="_self"
            />
            <MenuButton
              key_="2"
              title="NOTEBOOK"
              url="/notebook/"
              selected={pathname.startsWith("/notebook")}
              styles="mt-2"
            />
          </div>
          <div className="navigation-about">
            <MenuButton
              key_="R"
              title="RESUME"
              url="https://drive.google.com/file/d/1pf0zSwgYH2oAd5o6n2qvPDXXx2xhVJBO/view?usp=sharing"
              styles="mt-2"
              target="_blank"
            />
          </div>
          <div className="navigation-socials">
            <MenuButton
              key_="A"
              title="ARE.NA"
              styles="mt-2"
              url={"https://are.na/neel-khare/channels"}
            />
            <MenuButton
              key_="T"
              title="TWITTER"
              styles="mt-2"
              url={"https://twitter.com/Szplugz"}
            />
            <MenuButton
              key_="G"
              title="GITHUB"
              styles="mt-2"
              url={"https://github.com/Szplugz"}
            />
          </div>
        </div>
        {/* <button onClick={showSearchBox} className="search-button">
          Search...
        </button> */}
      </div>
      <SearchBox isVisible={isSearchActive} id="searchbox" ref={searchBoxRef} />
    </React.Fragment>
  );
};

export default Navigation;
