import React from "react";
import Link from "next/link";
import { newsreader } from "../fonts";

const Tile = ({ number, heading, linkTo, children }) => {
  return (
    <Link
      className="tile flex flex-col w-1/3 hover:bg-[#DED0C1] rounded-md p-6 h-fit min-h-[250px]"
      href={linkTo}
    >
      <div className={`${newsreader.className} tile-heading`}>
        <h3 className="font-normal">
          <span className="text-[#8B8B8B]">{number}</span>
          {` ${heading}`}
        </h3>
      </div>
      <div className="tile-contents text-lightMud">{children}</div>
    </Link>
  );
};

export default Tile;
