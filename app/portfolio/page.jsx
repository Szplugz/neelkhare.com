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
        Everything I create is an attempt to weave myself into the fabric of the
        world a little more.
      </Card>
      <Tile number="00" heading="Software" linkTo="/portfolio/software/">
        <p>
          {" "}
          I’m deeply curious about how we can build beautiful software to{" "}
          <br></br>
          <br></br> a) enhance our health and wellbeing <br></br>
          <br></br> b) strengthen our sense of community.
        </p>
      </Tile>
      <Tile number="01" heading="Photography" linkTo="/portfolio/photography">
        <p>Capturing the beauty that surrounds me. </p>
      </Tile>
      <Tile number="02" heading="Essays" linkTo="">
        <p>Trying to document the human condition.</p>
        <p className="text-mud mt-4">Coming soon!</p>
      </Tile>
      <Tile number="03" heading="City Guides" linkTo="">
        <p>{`I love traveling, and I'm fortunate enough to have had the opportunity to visit some fantastic cities around the world. If you ever find yourself looking for things to do in one of these places, I gotchu.`}</p>
        <p className="text-mud mt-4">Coming soon!</p>
      </Tile>
    </div>
  );
};

export default page;
