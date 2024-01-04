import React from "react";
import Image from "next/image";
import smalltalk from "../../_assets/images/smalltalk.jpg";
import PortfolioSection from "../_components/PortfolioSection";
import PortfolioItem from "../_components/PortfolioItem";
import "../../page.css";

const Software = () => {
  return (
    <>
      <div className="software-contents">
        <Image
          className="rounded-md"
          src={smalltalk}
          width={400}
          alt="smalltalk-and-children"
        ></Image>
        <div className="software-sections">
          <PortfolioSection name="Software">
            <PortfolioItem heading="Placeranker">
              <p>
                Placeranker lets you rank various kinds of places in your city
                based on one of the many comparable parameters provided by
                Google's Places API.
              </p>
              <a
                href="https://www.figma.com/file/Hbk2oiju5HYHs4vH7fJ2VM/placeholder?type=design&mode=design&t=kPwiwSEWBeEAhfhF-1"
                target="_blank"
              >
                Preview the design
              </a>
            </PortfolioItem>
            <PortfolioItem heading="maceholder">
              <p>whatever</p>
              <a href="https://www.google.com" target="_blank">
                moog
              </a>
            </PortfolioItem>
          </PortfolioSection>
        </div>
      </div>
      <div className="portfolio-sidebar">
        <h2>Portfolio</h2>
        <p className="portfolio-sidebar-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <div className="portfolio-sidebar-buttons">
          <h4 className="portfolio-sidebar-button">Software</h4>
          <h4 className="portfolio-sidebar-button">Photography</h4>
          <h4 className="portfolio-sidebar-button">Writing</h4>
          <h4 className="portfolio-sidebar-button">Video</h4>
        </div>
      </div>
    </>
  );
};

export default Software;
