"use client";

import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Card from "../_components/Card";
import routes from "../_utils/routes";
import Dropdown from "../_components/Dropdown";

const NotebookLayout = ({ children }) => {
  const pathname = usePathname();
  const [currPage, updateCurrPage] = useState(null);
  useEffect(() => {
    updateCurrPage(pathname);
  }, [pathname]);

  return (
    <main className="notebook-layout">
      {children}
      <div className="notebook-sidebar hidden md:flex md:flex-col md:w-[300px] md:items-end">
        <Dropdown
          desktop={true}
          currentPage="notebook"
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

export default NotebookLayout;
