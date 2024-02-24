import React from "react";
import Tile from "../_components/Tile";
import Link from "next/link";

const page = () => {
  return (
    <div className="notebook-grid flex flex-wrap px-20">
      <Tile heading="Software" linkTo="/portfolio/software/">
        <p>I build beautiful software with high utility to people.</p>
      </Tile>
      <Tile heading="Photography" linkTo="/portfolio/photography">
        <p>Also I like taking pictures</p>
      </Tile>
    </div>
  );
};

export default page;
