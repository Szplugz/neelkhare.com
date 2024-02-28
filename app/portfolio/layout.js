"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "../_utils/utilFunctions";
import { newsreader } from "../fonts";

const PortfolioLayout = ({ children }) => {
  const pathname = usePathname();
  const [currPage, updateCurrPage] = useState(null);
  useEffect(() => {
    let pages = pathname.split("/");
    let nestedPage = pages[pages.length - 1];
    updateCurrPage(nestedPage);
  }, [pathname]);

  // Should be a separate import
  const paths = {
    home: "/portfolio",
    testing: "/testing",
    essays: "/essays",
    notes: "/notes",
    people: "/people",
  };

  return (
    <main className="portfolio-layout w-full">
      {children}
      <div className="portfolio-sidebar">
        <h2 className={`${newsreader.className} text-5xl`}>
          {capitalizeFirstLetter(currPage)}
        </h2>
        <p className="portfolio-sidebar-description mt-4 text-end text-lightMud text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
    </main>
  );
};

export default PortfolioLayout;
