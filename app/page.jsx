import Image from "next/image";
import lacabra from "./assets/images/lacabra.jpeg";
import logo from "./assets/images/StarLogoNeel.png";
import Link from "next/link";
import { newsreader } from "./fonts";
import "./page.css";
import Card from "./components/Card";

export default function Home() {
  return (
    <>
      <div className="center-text-box font-medium text-xl md:font-normal md:text-base md:mx-[84px]">
        <h4 className={`center-text-heading text-mud md:text-4xl`}>
          Hello, I&apos;m Neel.
        </h4>
        <p>
          I’m an artisan & engineer studying Computer Science at the University
          of Illinois, Urbana-Champaign. Currently, I spend most of my time
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
          <Link className="link" href="/work/">
            creating
          </Link>
          , learning, exercising, or socializing - preferably outdoors. I&apos;m
          deeply passionate about building software that everyone can leverage
          to strengthen human connection and enhance their feelings of wellness.
        </p>
        <p>
          If anything on this website resonates with you, I&apos;d love to hear
          from you at{" "}
          <Link className="link" href="mailto:youfoundneel@gmail.com">
            youfoundneel@gmail.com
          </Link>
          ! I&apos;m always eager to connect with people interested in talking
          about design, health, and the human experience.
        </p>
      </div>
      <div className="image-frame">
        <Image src={lacabra} alt="kitchen"></Image>
      </div>
    </>
  );
}
