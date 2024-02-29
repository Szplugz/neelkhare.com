import React from "react";
import Tile from "../_components/Tile";
import Link from "next/link";
import MobileHeader from "../_components/MobileHeader";
import Card from "../_components/Card";

const page = () => {
  return (
    <div className="notebook-grid flex flex-wrap md:px-20 md:w-[calc(100%-300px)] w-full">
      <MobileHeader></MobileHeader>
      <Card styles="md:hidden text-base mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Card>
      <Tile heading="Software" linkTo="/portfolio/software/">
        <p>I build beautiful software with high utility to people.</p>
      </Tile>
      <Tile heading="Photography" linkTo="/portfolio/photography">
        <p>Also I like taking pictures</p>
      </Tile>
      <Tile heading="Writing" linkTo="/portfolio/photography">
        <p>Coming soon!</p>
      </Tile>
    </div>
  );
};

export default page;
