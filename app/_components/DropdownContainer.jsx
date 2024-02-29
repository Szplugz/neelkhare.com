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
    <div className="dropdown-container flex h-fit items-center">
      {pages.map((page, index) => {
        // for every nested page, return a dropdown element
        // you should keep a tack of the state of each dropdown, and only a single one
        // should be toggled at once
        const currentPage = pages[index]; // returns first page in array
        const currentPageRoutes = nestedRoutes[currentPage.toLowerCase()];
        const nestedPages = currentPageRoutes.pages;

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
