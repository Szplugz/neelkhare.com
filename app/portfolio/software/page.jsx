"use client";

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
            <PortfolioItem heading="neelkhare.com">
              <p>My digital home. You're here!</p>
            </PortfolioItem>
            <PortfolioItem heading="Quant Website">
              <p>
                Designed and built the website for Quant, UIUC's first and
                largest student-run quantitative finance and HFT organization.
              </p>
              <a href="https://www.google.com" target="_blank">
                Website
              </a>
            </PortfolioItem>
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
          </PortfolioSection>
        </div>
      </div>
    </>
  );
};

export default Software;
