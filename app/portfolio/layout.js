"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "../_utils/utilFunctions";
import { newsreader } from "../fonts";
import Card from "../_components/Card";
import Dropdown from "../_components/Dropdown";
import defaultRoutes from "../_utils/routes";

const PortfolioLayout = ({ children }) => {
  const pathname = usePathname();
  const [currPage, updateCurrPage] = useState("portfolio");
  const [pages, setPages] = useState([]);
  useEffect(() => {
    let newPages = pathname.split("/");
    newPages = newPages.filter((page) => page.length);
    setPages(newPages);
    let nestedPage = newPages[newPages.length - 1];
    updateCurrPage(nestedPage);
  }, [pathname]);

  let routes = defaultRoutes;
  console.log(pages);
  for (let i = 0; i < pages.length - 1; i++) {
    let page = pages[i];
    routes = routes[page.toLowerCase()].pages;
  }

  console.log("routes:", routes);
  console.log("currpage:", currPage);

  return (
    <main className="portfolio-layout w-full">
      {children}
      <div className="portfolio-sidebar hidden md:flex md:flex-col md:w-[300px] md:items-end">
        <Dropdown
          desktop={true}
          currentPage={capitalizeFirstLetter(currPage)}
          routes={routes}
        ></Dropdown>
        <Card styles="mt-4 text-end text-lightMud text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </Card>
      </div>
    </main>
  );
};

export default PortfolioLayout;
