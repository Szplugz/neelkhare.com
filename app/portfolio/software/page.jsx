"use client";

import React from "react";
import Image from "next/image";
import PortfolioSection from "../_components/PortfolioSection";
import PortfolioItem from "../_components/PortfolioItem";
import Tag from "@/app/_components/Tag";
import "../../page.css";

const Software = () => {
  return (
    <>
      <div className="software-contents">
        <Image
          className="rounded-md"
          src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/assets/wf3lvtlsvvtmulx0ltda.webp`}
          width={300}
          height={375}
          alt="smalltalk-and-children"
        ></Image>
        <div className="software-sections">
          <PortfolioSection name="Software">
            <PortfolioItem
              heading="The Library Of Life"
              tags={[
                {
                  title: "Designed",
                  bgColor: "bg-[#FFE0C1]",
                  borderColor: "border-[#E8A251]",
                },
              ]}
            >
              <p>
                An iOS app built to expand the accessibility and effectiveness
                of the non-proprietary science & science-based tools mentioned
                on the Huberman Lab podcast.
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
                  bgColor: "bg-[#FFE0C1]",
                  borderColor: "border-[#E8A251]",
                },
                {
                  title: "Built",
                  bgColor: "bg-[#A5A8B2]",
                  borderColor: "border-[#403D44]",
                },
              ]}
            >
              <p>My digital home. You're here!</p>
            </PortfolioItem>
            <PortfolioItem
              heading="Quant Website"
              tags={[
                {
                  title: "Designed",
                  bgColor: "bg-[#FFE0C1]",
                  borderColor: "border-[#E8A251]",
                },
                {
                  title: "Built",
                  bgColor: "bg-[#A5A8B2]",
                  borderColor: "border-[#403D44]",
                },
              ]}
            >
              <p>
                Designed and built the website for Quant, UIUC's first and
                largest student-run quantitative finance and HFT organization.
              </p>
              <a href="https://www.google.com" target="_blank">
                Website
              </a>
            </PortfolioItem>
            <PortfolioItem
              heading="Placeranker"
              tags={[
                {
                  title: "Designed",
                  bgColor: "bg-[#FFE0C1]",
                  borderColor: "border-[#E8A251]",
                },
                {
                  title: "Built",
                  bgColor: "bg-[#A5A8B2]",
                  borderColor: "border-[#403D44]",
                },
              ]}
            >
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
