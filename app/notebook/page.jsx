import React from "react";
import Tile from "../_components/Tile";
import Link from "next/link";

const page = () => {
  return (
    <div className="notebook-grid flex flex-wrap px-20">
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
