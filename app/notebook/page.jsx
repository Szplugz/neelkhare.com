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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Card>
      <Tile number={"00"} heading="Essays" linkTo="/notebook/testing">
        <p>
          I write about whatever comes to my mind, really. And documenting the
          human condition.
        </p>
      </Tile>
      <Tile number={"01"} heading="Notes" linkTo="">
        <p>Caffeine</p>
        <p>Podcast Notes</p>
      </Tile>
      <Tile number={"02"} heading="People" linkTo="">
        <p>Friends and strangers I look up to and draw inspiration from.</p>
      </Tile>
      <Tile number={"03"} heading="Tapas" linkTo="">
        <p>Hwatevs</p>
      </Tile>
    </div>
  );
};

export default page;
