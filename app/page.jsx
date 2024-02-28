"use client";

import Image from "next/image";
import lacabra from "./_assets/images/lacabra.jpeg";
import logo from "./_assets/images/StarLogoNeel.png";
import Link from "next/link";
import { newsreader } from "./fonts";
import "./page.css";

export default function Home() {
  return (
    <>
      <div className="center-text-box font-medium text-xl md:font-normal md:text-base">
        <h4 className={`center-text-heading text-mud md:text-4xl`}>
          Hello, I'm Neel.
        </h4>
        <Image className="md:hidden" src={logo} height={50}></Image>
        <div
          className={`${newsreader.className} md:hidden text-navy text-xl leading-tight`}
        >
          <h4>
            <Link href="/portfolio">Portfolio</Link>
          </h4>
          <h4>
            <Link href="/notebook">Notebook</Link>
          </h4>
          <h4>
            <Link href="https://read.cv/szplugz">Resume</Link>
          </h4>
        </div>
        <p>
          I’m an artisan engineer studying Computer Science at the University of
          Illinois, Urbana-Champaign. Currently, I spend most of my time
          designing the future of electronic payments with{" "}
          <a className="link" href="https://resolv.finance" target="_blank">
            Resolv
          </a>
          . Previously, I helped visualize climate data at{" "}
          <a
            className="link"
            href="https://www.gro-intelligence.com/"
            target="_blank"
          >
            Gro Intelligence
          </a>
          .
        </p>
        <p>
          On any given day, you will find me either{" "}
          <Link className="link" href="/portfolio/">
            creating
          </Link>
          ,{" "}
          <Link className="link" href="/inspiration/">
            learning
          </Link>
          , exercising, or socializing - preferably outdoors. I'm deeply
          passionate about building software that everyone can leverage to
          strengthen human connection and enhance their feelings of wellness.
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
