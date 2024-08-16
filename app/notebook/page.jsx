import React from "react";
import Tile from "../components/Tile";
import Link from "next/link";
import Card from "../components/Card";
import MobileHeader from "../components/MobileHeader";

const page = () => {
  return (
    <div className="notebook-grid flex flex-wrap md:px-20 md:w-[calc(100%-300px)] w-full">
      <Card styles="md:hidden text-base mb-4">
        Because I have a lot of thoughts, and I suck at remembering them.
      </Card>
      <Tile number="01" heading="Photography" linkTo="/notebook/photography">
        <p>Capturing the beauty that surrounds me. </p>
      </Tile>
      <Tile number={"02"} heading="Notes" linkTo="/notebook/notes">
        <p>A rough, disorganized, and incomplete database of my brain.</p>
      </Tile>
      <Tile number={"03"} heading="People" linkTo="/notebook/people">
        <p>Friends and strangers I look up to and draw inspiration from.</p>
      </Tile>
      <Tile number={"04"} heading="Tapas" linkTo="">
        <p>Tidbits of knowledge</p>
        <p className="text-oak mt-4">Coming soon!</p>
      </Tile>
    </div>
  );
};

export default page;
