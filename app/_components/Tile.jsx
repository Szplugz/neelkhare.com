import React from "react";
import Link from "next/link";
import { newsreader } from "../fonts";

const Tile = ({ number, heading, linkTo, children }) => {
  return (
    <Link
      className="tile mb-10 flex flex-col w-1/2 hover:bg-[#DED0C1] rounded-md p-6 min-h-[250px] max-h-[300px] h-full"
      href={linkTo}
    >
      <h4
        className={`${newsreader.className} text-2xl tile-heading font-normal mb-6 inline-block`}
      >
        <span className="text-[#8B8B8B]">{number}</span>
        {` ${heading}`}
      </h4>
      <div className="tile-contents text-lightMud text-sm overflow-y-scroll">
        {children}
      </div>
    </Link>
  );
};

export default Tile;
