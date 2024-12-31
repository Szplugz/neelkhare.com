"use client";

import React from "react";
import Image from "next/image";
import logo from "../assets/images/StarLogoNeel.png";
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

  const [leftFadeOpacity, setLeftFadeOpacity] = useState(0);
  const [rightFadeOpacity, setRightFadeOpacity] = useState(1);
  const navigationMenuRef = useRef(null);

  const updateFadeOpacity = () => {
    if (navigationMenuRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        navigationMenuRef.current;
      const maxScroll = scrollWidth - clientWidth;

      setLeftFadeOpacity(Math.min(scrollLeft / 20, 1));
      setRightFadeOpacity(Math.min((maxScroll - scrollLeft) / 20, 1));
    }
  };

  useEffect(() => {
    const navigationMenu = navigationMenuRef.current;
    if (navigationMenu) {
      navigationMenu.addEventListener("scroll", updateFadeOpacity);
      updateFadeOpacity(); // Initial call to set fade opacity
    }

    return () => {
      if (navigationMenu) {
        navigationMenu.removeEventListener("scroll", updateFadeOpacity);
      }
    };
  }, []);

  return (
    <React.Fragment>
      <div className="navigation-block md:flex md:flex-col md:flex-shrink-0 mb-4">
        <div className="logo-container flex items-center md:px-4">
          <Link href="/">
            <Image src={logo} className="mb-4" alt={"Kitchen"} height={50} />
          </Link>
        </div>
        <div className="navigation-menu-container">
          <div
            className="fade-overlay left-fade"
            style={{ opacity: leftFadeOpacity }}
          ></div>
          <div className="navigation-menu" ref={navigationMenuRef}>
            <div className="menu-items-container">
              <div className="navigation-explore flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <MenuButton
                  className="work-button"
                  key_="1"
                  title="WORK"
                  selected={pathname.startsWith("/work")}
                  url="/work/"
                  target="_self"
                />
                <div className="md:hidden selected bg-candy w-[3px] h-[3px] rounded-[50%]"></div>
                <MenuButton
                  key_="2"
                  title="NOTEBOOK"
                  url="/notebook/"
                  selected={pathname.startsWith("/notebook")}
                  styles="md:mt-2"
                />
                <div className="md:hidden selected bg-candy w-[3px] h-[3px] rounded-[50%]"></div>
              </div>
              <div className="navigation-social flex md:flex-col items-center md:items-start gap-4 md:gap-0">
                <MenuButton
                  key_="A"
                  title="ARE.NA"
                  styles="md:mt-2"
                  url={"https://are.na/neel-khare/channels"}
                  target="_blank"
                />
                <div className="md:hidden selected bg-candy w-[3px] h-[3px] rounded-[50%]"></div>
                <MenuButton
                  key_="T"
                  title="TWITTER"
                  styles="md:mt-2"
                  url={"https://twitter.com/Szplugz"}
                  target="_blank"
                />
                <div className="md:hidden selected bg-candy w-[3px] h-[3px] rounded-[50%]"></div>
                <MenuButton
                  key_="G"
                  title="GITHUB"
                  styles="md:mt-2"
                  url={"https://github.com/Szplugz"}
                  target="_blank"
                />
              </div>
            </div>
          </div>
          <div
            className="fade-overlay right-fade"
            style={{ opacity: rightFadeOpacity }}
          ></div>
        </div>
      </div>
      <SearchBox isVisible={isSearchActive} id="searchbox" ref={searchBoxRef} />
    </React.Fragment>
  );
};

export default Navigation;
