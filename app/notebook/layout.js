"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "../_components/Card";
import defaultRoutes from "../_utils/routes";
import Dropdown from "../_components/Dropdown";
import Image from "next/image";
import { capitalizeFirstLetter } from "../_utils/utilFunctions";

const NotebookLayout = ({ children }) => {
  const pathname = usePathname();
  const [currPage, updateCurrPage] = useState("notebook");
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
    <main className="notebook-layout">
      {children}
      <div className="notebook-sidebar hidden md:flex md:flex-col md:w-[300px] md:items-end">
        <Dropdown
          desktop={true}
          currentPage={capitalizeFirstLetter(currPage)}
          routes={routes}
        ></Dropdown>
        <Card styles="mt-4 text-end text-lightMud text-base">
          Because I have a lot of thoughts, and I suck at remembering them.
        </Card>
        {currPage === "notebook" && (
          <Image
            className="rounded-md mt-4"
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/f_auto,q_auto/v1/assets/cozywriting.webp`}
            width={533}
            height={400}
            alt="smalltalk-and-children"
          ></Image>
        )}
      </div>
    </main>
  );
};

export default NotebookLayout;
