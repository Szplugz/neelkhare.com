import React from "react";
import Link from "next/link";
import { newsreader } from "../fonts";

const Tile = ({ number, heading, linkTo, children }) => {
  return (
    <Link
      className="tile flex flex-col min-w-[33%] w-1/2 md:w-fit hover:bg-[#DED0C1] rounded-md p-6 h-fit min-h-[250px]"
      href={linkTo}
    >
      <h3 className={`${newsreader.className} tile-heading font-normal mb-6`}>
        <span className="text-[#8B8B8B]">{number}</span>
        {` ${heading}`}
      </h3>
      <div className="tile-contents text-lightMud md:max-w-[159px]">
        {children}
      </div>
    </Link>
  );
};

export default Tile;
