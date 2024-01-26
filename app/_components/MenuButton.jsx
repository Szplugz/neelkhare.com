"use client";

import React from "react";
import Link from "next/link";
import { pageContext } from "../pageprovider";
import { useState, useEffect } from "react";

const MenuButton = (props) => {
  let { key_, page, styles, url, target } = props;
  target = target === null ? "_blank" : target;
  if (!url) {
    url = `\\${page}`.toLowerCase();
    target = "_self";
  }

  const { activePage, setActivePage } = React.useContext(pageContext);

  const background = activePage === key_ ? "#9A4C5C" : "#43392E";
  console.log(
    `Active page: ${activePage}, key: ${key_}, background: ${background}`
  );

  const handleClick = () => {
    console.log(`Clicked on ${key_}`);
    setActivePage(`${key_}`);
  };

  return (
    <div className={`menu-button ${styles}`} style={{ color: background }}>
      <Link href={url} target={target} onClick={handleClick}>
        <p className={`font-[500]`}>
          <span className="menu-key">{key_} </span>
          {page}
        </p>
      </Link>
    </div>
  );
};

export default MenuButton;
