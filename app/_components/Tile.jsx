import React from "react";
import Link from "next/link";
import { newsreader } from "../fonts";

const Tile = ({ number, heading, linkTo, children }) => {
  return (
    <Link
      className="tile flex flex-col min-w-[33%] w-1/2 md:w-fit md:max-w-[33%] hover:bg-[#DED0C1] rounded-md p-6 h-fit min-h-[250px]"
      href={linkTo}
    >
      <h4
        className={`${newsreader.className} tile-heading font-normal mb-6 inline-block`}
      >
        <span className="text-[#8B8B8B]">{number}</span>
        {` ${heading}`}
      </h4>
      <div className="tile-contents text-lightMud md:max-w-[159px] text-sm">
        {children}
      </div>
    </Link>
  );
};

export default Tile;
