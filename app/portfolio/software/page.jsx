import SoftwareSection from "@/app/_components/SoftwareSection";
import Link from "next/link";
import React from "react";
import MobileHeader from "@/app/_components/MobileHeader";

const page = ({}) => {
  return (
    <div className="software-contents flex-col justify-between max-w-full md:w-[60%] mx-auto">
      <MobileHeader></MobileHeader>
      <div className="intro-text flex flex-col gap-4 mb-10 text-lightMud">
        <p>
          I use software as an instrument to create beautiful digital
          experiences. In the past, I helped Gro Intelligence build a webapp to
          visualize the global tradeflow of crops, and helped Mediaocean build
          their Unified Ad Manager. I'd like to spend the rest of my forseeable
          future building digital tools that enable people to live richer,
          healthier lives.
        </p>
        <p>Here are some things I've designed and built in the past:</p>
      </div>
      <Link
        href="https://www.figma.com/file/jTAzLBxLkMJBwXEUXik16a/The-Huberman-Library?type=design&node-id=0%3A1&mode=design&t=F3g7VLKE9SuZAMFZ-1"
        target="_blank"
      >
        <SoftwareSection
          title="The Library of Life"
          date="2023 - Present"
          tags={[
            {
              title: "Designed",
              styles: "bg-[#FFE0C1] border-[#E8A251] text-[#E8A251] text-xs",
            },
          ]}
        >
          <p className="my-4 text-lightMud">
            An iOS app built to expand the accessibility and effectiveness of
            the non-proprietary science & science-based tools mentioned on the
            Huberman Lab podcast.
          </p>
        </SoftwareSection>
      </Link>
      <Link href="https://quantillinois.com" target="_blank">
        <SoftwareSection
          title="Quant Website"
          date="2023"
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
          <p className="my-4 text-lightMud">
            Designed and built the website for Quant, UIUC&apos;s first and
            largest student-run quantitative finance and HFT organization.
          </p>
        </SoftwareSection>
      </Link>
      <Link href="https://resolv.finance" target="_blank">
        <SoftwareSection
          title="Resolv Website"
          date="2024"
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
          <p className="my-4 text-lightMud">
            Resolv protects your crypto assets from fraud. Built with{" "}
            <span className="font-medium text-mud">Next JS + TypeScript</span>.
          </p>
        </SoftwareSection>
      </Link>
    </div>
  );
};

export default page;
