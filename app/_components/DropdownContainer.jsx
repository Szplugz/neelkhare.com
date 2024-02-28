import React from "react";
import Link from "next/link";
import routes from "../_utils/routes";
import { useState } from "react";
import { newsreader } from "../fonts";
import Dropdown from "./Dropdown";

const DropdownContainer = ({
  pages = [""],
  openStyles = {},
  closedStyles = {},
}) => {
  let nestedRoutes = routes;

  return (
    <div className="dropdown-container flex">
      {pages.map((page, index) => {
        // for every nested page, return a dropdown element
        // you should keep a tack of the state of each dropdown, and only a single one
        // should be toggled at once
        const currentPage = pages[index]; // returns first page in array
        console.log(currentPage);
        const currentPageRoutes = nestedRoutes[currentPage.toLowerCase()];
        const nestedPages = currentPageRoutes.pages;
        nestedRoutes = nestedPages;

        let dropDownOptions = [];
        for (const [key, value] of Object.entries(nestedPages)) {
          dropDownOptions.push(value);
        }

        return (
          <>
            <Dropdown
              pages={dropDownOptions}
              currentPage={currentPage}
            ></Dropdown>
            <h4 className="text-lightMud ml-4 font-thin h-full">/</h4>
          </>
        );
      })}
    </div>
  );
};

export default DropdownContainer;
