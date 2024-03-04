"use client";

import React from "react";
import Image from "next/image";
import PortfolioItem from "../_components/PortfolioItem";
import { newsreader } from "@/app/fonts";
import "../../page.css";
import MobileHeader from "@/app/_components/MobileHeader";

const Software = () => {
  return (
    <>
      <div className="software-contents flex-col justify-between max-w-full md:w-[60%] mx-auto">
        <MobileHeader></MobileHeader>
        <div className="software-image mb-10 flex md:px-[5rem] justify-center">
          <div className="image-container">
            <Image
              className="rounded-md md:hidden"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/v1/assets/software-mobile`}
              width={533}
              height={400}
              alt="smalltalk-and-children"
            ></Image>
            <Image
              className="rounded-md hidden md:block"
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/v1709224359/assets/software-desktop.webp`}
              width={533}
              height={400}
              alt="smalltalk-and-children"
            ></Image>
          </div>
        </div>
        <div className="software-sections flex flex-col">
          <PortfolioItem
            heading="The Library Of Life"
            tags={[
              {
                title: "Designed",
                styles: "bg-[#FFE0C1] border-[#E8A251] text-[#E8A251] text-xs",
              },
            ]}
          >
            <p className="mb-4">
              An iOS app built to expand the accessibility and effectiveness of
              the non-proprietary science & science-based tools mentioned on the
              Huberman Lab podcast.
            </p>
            <a
              href="https://www.figma.com/file/jTAzLBxLkMJBwXEUXik16a/The-Huberman-Library?type=design&node-id=0-1&mode=design&t=mFGW1cUslObiKxpH-0"
              target="_blank"
            >
              Learn More ↗
            </a>
          </PortfolioItem>
          <PortfolioItem
            heading="neelkhare.com"
            tags={[
              {
                title: "Designed",
                styles: "bg-[#FFE0C1] border-[#E8A251] text-[#E8A251] text-xs",
              },
              {
                title: "Built",
                styles:
                  "bg-[#A5A8B2] border-[#403D44] text-[#403D44] ml-2 text-xs",
              },
            ]}
          >
            <p>My digital home. You&apos;re here!</p>
          </PortfolioItem>
          <PortfolioItem
            heading="Quant Website"
            tags={[
              {
                title: "Designed",
                styles: "bg-[#FFE0C1] border-[#E8A251] text-[#E8A251] text-xs",
              },
              {
                title: "Built",
                styles:
                  "bg-[#A5A8B2] border-[#403D44] text-[#403D44] ml-2 text-xs",
              },
            ]}
          >
            <p className="mb-4">
              Designed and built the website for Quant, UIUC&apos;s first and
              largest student-run quantitative finance and HFT organization.
            </p>
            <a href="https://quantillinois.com" target="_blank">
              Website ↗
            </a>
          </PortfolioItem>
          <PortfolioItem
            heading="Placeranker"
            tags={[
              {
                title: "Designed",
                styles: "bg-[#FFE0C1] border-[#E8A251] text-[#E8A251] text-xs",
              },
              {
                title: "Built",
                styles:
                  "bg-[#A5A8B2] border-[#403D44] text-[#403D44] ml-2 text-xs",
              },
            ]}
          >
            <p className="mb-4">
              Placeranker lets you rank various kinds of places in your city
              based on one of the many comparable parameters provided by
              Google&apos;s Places API.
            </p>
            <a
              href="https://www.figma.com/file/Hbk2oiju5HYHs4vH7fJ2VM/placeholder?type=design&mode=design&t=kPwiwSEWBeEAhfhF-1"
              target="_blank"
            >
              Preview the design ↗
            </a>
          </PortfolioItem>
        </div>
      </div>
    </>
  );
};

export default Software;
