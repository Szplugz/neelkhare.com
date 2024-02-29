import React from "react";
import Link from "next/link";
import defaultRoutes from "../_utils/routes";
import { useState } from "react";
import { newsreader } from "../fonts";
import Dropdown from "./Dropdown";

const DropdownContainer = ({
  pages = [""],
  openStyles = {},
  closedStyles = {},
  routes = defaultRoutes,
}) => {
  let nestedRoutes = routes;
  console.log("Nested routes:", nestedRoutes);
  console.log("Pages", pages);

  return (
    <div className="dropdown-container flex h-fit items-center">
      {pages.map((page, index) => {
        // for every nested page, return a dropdown element
        // you should keep a tack of the state of each dropdown, and only a single one
        // should be toggled at once
        const currentPage = pages[index]; // returns first page in array
        console.log("current page:", currentPage);
        const currentPageRoutes = nestedRoutes[currentPage.toLowerCase()];
        console.log("current page routes:", currentPageRoutes);
        const nestedPages = currentPageRoutes.pages;
        console.log("nestedPages:", nestedPages);

        let dropDownOptions = [];
        for (const [key, value] of Object.entries(nestedRoutes)) {
          if (key.toLowerCase() !== currentPage.toLowerCase()) {
            dropDownOptions.push(value);
          }
        }
        nestedRoutes = nestedPages;

        return (
          <>
            <Dropdown
              pages={dropDownOptions}
              currentPage={currentPage}
            ></Dropdown>
            {index < pages.length - 1 && (
              <h4 className="text-lightMud ml-4 font-thin h-full">/</h4>
            )}
          </>
        );
      })}
    </div>
  );
};

export default DropdownContainer;
