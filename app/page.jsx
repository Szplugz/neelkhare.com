"use client";

import Image from "next/image";
import lacabra from "./assets/images/lacabra.jpeg";
import logo from "./assets/images/StarLogoNeel.png";
import Link from "next/link";
import { basteleur, newsreader, bricolage, piazolla, et_book } from "./fonts";
import "./page.css";
import Card from "./components/Card";
import { useState, useEffect } from "react";

export default function Home() {
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const currentDate = new Date();
    const dayName = currentDate.toLocaleDateString("en-US", {
      weekday: "long",
    });

    // Set a small delay to ensure the initial "Hey!" animation is visible
    setTimeout(() => {
      setDayOfWeek(dayName);
      setShowContent(true);
    }, 500); // Adjust this delay as needed
  }, []);

  return (
    <>
      <div className="text-box max-w-[500px] flex flex-col font-medium text-lg leading-normal md:font-normal md:text-md md:mx-[84px] gap-4">
        <h4 className={`text-3xl font-bold mb-2 ${et_book.className}`}>
          <em>
            <span className="inline-block animate-fade-in opacity-0">Hey!</span>{" "}
            <span
              className={`inline-block transition-opacity duration-1000 ease-in-out ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              It&apos;s {dayOfWeek} and I&apos;m Neel.
            </span>
          </em>
        </h4>
        <div
          className={`transition-opacity duration-1000 ease-in-out text-base flex flex-col gap-4 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="text-body">
            I&apos;m currently building{" "}
            <Link
              className={`text-link ${et_book.className}`}
              href="https://szplugz.substack.com/p/seeking-aliveness"
              target="_blank"
            >
              <em>Anecdote</em>
            </Link>
            , a coffee shop and community space for people who <em>care</em>.
          </p>
          <p className="text-body">
            I spend a lot of time{" "}
            <Link
              className={`link ${et_book.className} text-xl leading-none`}
              href="https://szplugz.substack.com/"
              target="_blank"
            >
              <em>writing</em>
            </Link>{" "}
            - mostly about my building journey, human agency, and ways to live
            better.
          </p>
          <p className="text-body">
            I also spend a lot of time moving - whether it&apos;s lifting,
            taking long walks in nature, playing sports, or dancing.
          </p>
          <p className="text-body">
            I live for beautiful spaces, walkable cities, good writing,
            nourishing food, reggaeton, coffee, potlucks, electric
            conversations, the sun, and dancing!
          </p>
          <p className="text-body">
            My curiosity far exceeds my ability to remember, which is why I love
            curating.
          </p>
          <p className="text-body">
            I&apos;d describe most of my friends as social technologists.
            They’re thoughtful, curious, benevolent, charming, have a bias for
            action, and they care about people. If that sounds like you, or if
            you resonate with anything on my website, please reach out :)
          </p>
        </div>
      </div>
    </>
  );
}
