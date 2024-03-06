import React from "react";
import Tile from "../_components/Tile";
import Link from "next/link";
import Card from "../_components/Card";
import MobileHeader from "../_components/MobileHeader";

const page = () => {
  return (
    <div className="notebook-grid flex flex-wrap md:px-20 md:w-[calc(100%-300px)] w-full">
      <MobileHeader></MobileHeader>
      <Card styles="md:hidden text-base mb-4">
        Because I have a lot of thoughts, and I suck at remembering them.
      </Card>
      <Tile number={"01"} heading="Notes" linkTo="/notebook/notes">
        <p>A rough, disorganized, and incomplete database of my brain.</p>
      </Tile>
      <Tile number={"02"} heading="People" linkTo="/notebook/people">
        <p>Friends and strangers I look up to and draw inspiration from.</p>
      </Tile>
      <Tile number={"03"} heading="Tapas" linkTo="">
        <p>Tidbits of knowledge</p>
        <p className="text-oak mt-4">Coming soon!</p>
      </Tile>
    </div>
  );
};

export default page;
