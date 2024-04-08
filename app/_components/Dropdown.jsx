import React from "react";
import { useState } from "react";
import { capitalizeFirstLetter } from "../_utils/utilFunctions";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Link from "next/link";
import { newsreader } from "../fonts";

const Dropdown = ({ pages, currentPage, desktop = false, routes = {} }) => {
  const [isDropdownToggled, toggleDropdown] = useState(false);

  let dropDownOptions = [];
  for (const [key, value] of Object.entries(routes)) {
    if (key.toLowerCase() !== currentPage.toLowerCase()) {
      dropDownOptions.push(value);
    }
  }

  const handleClick = (e) => {
    toggleDropdown(!isDropdownToggled);
  };
  if (desktop) {
    return (
      <div className={`dropdown flex flex-col relative`}>
        <div
          className={`${newsreader.className} dropdown-closed ml-4 mb-2 hover:bg-lightMud p-2 rounded box-content flex cursor-pointer justify-end`}
          onClick={handleClick}
        >
          <ArrowDropDownRoundedIcon />
          <h3 className="inline-block">{capitalizeFirstLetter(currentPage)}</h3>
        </div>
        {isDropdownToggled && (
          <div
            className={`${newsreader.className} dropdown-open flex flex-col items-end`}
            onClick={handleClick}
          >
            {dropDownOptions.map((page, index) => {
              return (
                <div
                  className="w-fit h-fit hover:bg-goldenMud p-2 rounded box-content"
                  key={index}
                >
                  <div className="h-fit rounded flex justify-end">
                    <Link href={page.path} key={index}>
                      <h3>{capitalizeFirstLetter(page.name)}</h3>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div className="dropdown flex flex-col relative">
        <div
          className={`dropdown-closed hover:bg-lightMud p-2 rounded w-fit box-content flex cursor-pointer`}
          onClick={handleClick}
        >
          <ArrowDropDownRoundedIcon />
          <h4>{capitalizeFirstLetter(currentPage)}</h4>
        </div>
        {isDropdownToggled && (
          <div
            className={`dropdown-open flex flex-col items-end`}
            onClick={handleClick}
          >
            {pages.map((page, index) => {
              return (
                <div className="w-fit h-fit p-1" key={index}>
                  <div className="h-fit hover:bg-goldenMud rounded flex justify-end">
                    <Link className="text-2xl" href={page.path} key={index}>
                      {capitalizeFirstLetter(page.name)}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
};

export default Dropdown;
