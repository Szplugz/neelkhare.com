"use client";

import React from "react";
import Link from "next/link";

const MenuButton = (props) => {
  let { key_, page, styles, url, target } = props;
  target = target === null ? "_blank" : target;
  if (!url) {
    url = `\\${page}`.toLowerCase();
    target = "_self";
  }

  return (
    <div className={`menu-button ${styles}`}>
      <Link href={url} target={target}>
        <p className={`font-[500]`}>
          <span className="menu-key">{key_} </span>
          {page}
        </p>
      </Link>
    </div>
  );
};

export default MenuButton;
