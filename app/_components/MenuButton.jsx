"use client";

import React from "react";
import Link from "next/link";

const MenuButton = (props) => {
  let { key_, title, styles, url, target } = props;
  target = target === null ? "_blank" : target;

  return (
    <div className={`menu-button ${styles}`}>
      <Link href={url} target={target}>
        <p className={`font-[500]`}>
          <span className="menu-key">{key_} </span>
          {title}
        </p>
      </Link>
    </div>
  );
};

export default MenuButton;
