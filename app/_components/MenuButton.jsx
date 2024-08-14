"use client";

import React from "react";
import Link from "next/link";
import { newsreader } from "../fonts";
import "../page.css";

const MenuButton = (props) => {
  let { key_, title, styles, url, target, selected = false } = props;
  target = target === null ? "_blank" : target;

  return (
    <div className={`menu-button text-lg font-medium flex flex-row ${styles}`}>
      {selected && (
        <div className="hidden md:block selected bg-candy w-[3px] h-[3px] rounded-[50%] md:translate-x-[-16px] md:translate-y-3 absolute"></div>
      )}
      <Link href={url} target={target} className="block">
        <p>
          <span className="menu-key hidden md:inline">{key_} </span>
          {title}
        </p>
      </Link>
    </div>
  );
};

export default MenuButton;
