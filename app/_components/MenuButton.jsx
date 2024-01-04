"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";

const MenuButton = (props) => {
  let { key_, page, styles, url, target, setActivePage, currActivePage } =
    props;
  target = target === null ? "_blank" : target;
  if (!url) {
    url = `\\${page}`.toLowerCase();
    target = "_self";
  }

  const background = currActivePage === key_ ? "#9A4C5C" : "#43392E";
  console.log(
    `Active page: ${currActivePage}, key: ${key_}, background: ${background}`
  );

  const handleClick = () => {
    console.log(`Clicked on ${key_}`);
    setActivePage(`${key_}`);
  };

  return (
    <div className={`menu-button ${styles}`}>
      <Link href={url} target={target} onClick={handleClick}>
        <p className={`text-[${background}] font-[500]`}>
          <span className="menu-key">{key_} </span>
          {page}
        </p>
      </Link>
    </div>
  );
};

export default MenuButton;
