import React from "react";
import Link from "next/link";
import { newsreader } from "../fonts";

const Tile = ({ number, heading, linkTo, children }) => {
  if (linkTo) {
    return (
      <Link href={linkTo}>
        <div className="tile flex flex-col w-[275px] h-[250px] hover:bg-[#DED0C1] rounded-md">
          <div className={`${newsreader.className} tile-heading`}>
            <h3>{number}</h3>
            <h3>{heading}</h3>
          </div>
          <div className="tile-contents">{children}</div>
        </div>
      </Link>
    );
  } else
    return (
      <div className="tile flex flex-col w-[275px] h-[250px] hover:bg-[#DED0C1] rounded-md">
        <div className={`${newsreader.className} tile-heading`}>
          <h3>{number}</h3>
          <h3>{heading}</h3>
        </div>
        <div className="tile-contents">{children}</div>
      </div>
    );
};

export default Tile;
