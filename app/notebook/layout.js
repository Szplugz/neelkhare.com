"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const NotebookLayout = ({ children }) => {
  const pathname = usePathname();
  const [currPage, updateCurrPage] = useState(null);
  useEffect(() => {
    updateCurrPage(pathname);
  }, [pathname]);

  // Should be a separate import
  const paths = {
    home: "/notebook",
    testing: "/testing",
    essays: "/essays",
    notes: "/notes",
    people: "/people",
  };

  const homePath = paths.home;
  // Should be a separate import
  let sideBar;
  if (currPage !== homePath) {
    sideBar = (
      <div className="notebook-sidebar-buttons">
        <h4
          className={`notebook-sidebar-button ${
            currPage == `${homePath + paths.testing}` && "text-candy"
          }`}
        >
          <Link href={`${homePath + paths.testing}`} id="software-button">
            Testing
          </Link>
        </h4>
        <h4 className="notebook-sidebar-button">
          <Link href="">Photography</Link>
        </h4>
      </div>
    );
  }

  return (
    <main className="notebook-layout">
      {children}
      <div className="notebook-sidebar">
        <h2 className="text-5xl">Notebook</h2>
        <p className="notebook-sidebar-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        {sideBar}
      </div>
    </main>
  );
};

export default NotebookLayout;
