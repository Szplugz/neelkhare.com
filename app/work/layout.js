"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { capitalizeFirstLetter } from "../utils/utilFunctions";
import { newsreader } from "../fonts";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import defaultRoutes from "../utils/routes";
import Image from "next/image";

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
  for (let i = 0; i < pages.length - 1; i++) {
    let page = pages[i];
    routes = routes[page.toLowerCase()].pages;
  }

  return (
    <main className="portfolio-layout w-full">
      {children}
      <div className="portfolio-sidebar hidden md:flex md:flex-col md:w-[300px] md:items-end">
        <Dropdown
          desktop={true}
          currentPage={capitalizeFirstLetter(currPage)}
          routes={routes}
        ></Dropdown>
        <Card styles="mt-4 text-end text-lightMud text-sm">
          Everything I create is an attempt to weave myself into the fabric of
          the world a little more.{" "}
        </Card>
        {currPage == "portfolio" && (
          <Image
            className="rounded-md mt-4"
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/v1/assets/lookingatmelookingatyou.webp`}
            width={533}
            height={400}
            alt="smalltalk-and-children"
          ></Image>
        )}
      </div>
    </main>
  );
};

export default PortfolioLayout;
