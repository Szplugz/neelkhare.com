"use client";

import React from "react";
import Image from "next/image";
import logo from "../_assets/images/StarLogoNeel.png";
import { newsreader } from "../fonts";
import DropdownContainer from "./DropdownContainer";
import { usePathname } from "next/navigation";

const MobileHeader = () => {
  const pathname = usePathname();
  let pages = pathname.split("/");
  pages.shift();

  return (
    <div
      className={`${newsreader.className} flex md:hidden py-2 mb-5 min-h-[1.75rem] h-fit w-full items-start box-content overflow-x-scroll`}
    >
      <Image className="w-auto h-[28px]" src={logo} alt="star-logo"></Image>
      <h4 className="text-lightMud ml-4 font-thin">~</h4>
      <DropdownContainer
        pages={pages}
        closedStyles={`font-medium`}
      ></DropdownContainer>
    </div>
  );
};

export default MobileHeader;
