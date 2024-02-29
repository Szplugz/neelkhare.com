import React from "react";
import { useState } from "react";
import { capitalizeFirstLetter } from "../_utils/utilFunctions";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import Link from "next/link";

const Dropdown = ({ pages, currentPage }) => {
  const [isDropdownToggled, toggleDropdown] = useState(false);

  const handleClick = (e) => {
    toggleDropdown(!isDropdownToggled);
  };
  return (
    <div className="dropdown flex flex-col relative">
      <div
        className={`dropdown-closed ml-4 mb-1 hover:bg-lightMud p-2 rounded w-fit box-content flex cursor-pointer`}
        onClick={handleClick}
      >
        <ArrowDropDownRoundedIcon />
        <h3>{capitalizeFirstLetter(currentPage)}</h3>
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
};

export default Dropdown;
