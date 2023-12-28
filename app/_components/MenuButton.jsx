"use client";

import React from "react";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";
import { useState } from "react";

const MenuButton = (props) => {
  let { key_, page, styles, url } = props;
  let target = "_blank";
  if (!url) {
    url = `\\${page}`.toLowerCase();
    target = "_self";
  }
  const [hover, setHover] = useState(0);
  return (
    <div className={`menu-button ${styles}`}>
      <Link
        href={url}
        target={target}
        onMouseEnter={() => setHover(1)}
        onMouseLeave={() => setHover(0)}
      >
        <p className="menu-text">
          <RoughNotation type="underline" show={hover} color="#D12D35">
            <span className="menu-key">{key_} </span>
            {page}
          </RoughNotation>
        </p>
      </Link>
    </div>
  );
};

export default MenuButton;
