"use client";

import Image from "next/image";
import kitchen from "./_assets/images/kitchen.jpg";
import lacabra from "./_assets/images/lacabra.jpeg";
import logo from "./_assets/images/StarLogoNeel.png";
import Navigation from "./_components/Navigation.jsx";
import { useEffect, useRef, useState } from "react";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="center-text-box">
        <h3 className="center-text-heading">Hello, I'm Neel.</h3>
        <p>
          I’m an artisan engineer studying Computer Science at the University of
          Illinois, Urbana-Champaign. I currently live in Vienna, Austria.
        </p>
        <p>
          I spend most of my time creating, learning, exercising, and
          socializing - preferably outdoors.
        </p>
        <p>
          I've tried to design this website in a manner that reveals more about
          myself, my work, and my values than a few words on the home page do.
          Make yourself comfortable, take a look around, and if anything
          resonates with you, say hi :)
        </p>
      </div>
      <div className="image-frame">
        <Image src={lacabra} alt="kitchen"></Image>
      </div>
    </>
  );
}
