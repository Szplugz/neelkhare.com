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
    }, 1000); // Adjust this delay as needed
  }, []);

  return (
    <>
      <div className="center-text-box font-medium text-lg leading-normal md:font-normal md:text-md md:mx-[84px]">
        <h4 className={`text-3xl font-bold ${et_book.className}`}>
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
          className={`transition-opacity duration-1000 ease-in-out ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
        >
          <p>
            I&apos;m currently building Anecdote, a coffee shop and community
            space meant to bring cool people together and increase serendipity.
          </p>
          <p>
            I love beautiful spaces, walkable cities, good writing, nourishing
            food, coffee, potlucks, thoughtful questions, well-produced movies,
            and dancing!
          </p>
          <p>
            I also love curating. I curate places on{" "}
            <Link
              className="link"
              href="https://www.corner.inc/neel"
              target="_blank"
            >
              corner
            </Link>{" "}
            and fragments of life on{" "}
            <Link
              className="link"
              href="https://www.corner.inc/neel"
              target="_blank"
            >
              are.na
            </Link>
            .
          </p>
          <p>
            I believe that in order to survive in this world, you need a robust
            garden of beliefs. I call mine Axioms of the Soul - they will likely
            change over time and with new information.
          </p>

          <p>
            I&apos;d describe most of my friends as social technologists.
            They’re thoughtful, curious, benevolent, charming, have a bias for
            action, and they care about people.
          </p>
          <h4 className={`text-3xl font-bold ${et_book.className}`}>
            <em>Things I Think About A Lot</em>
          </h4>
          <ol>
            <li>How we can live better</li>
            <li>The role of agency in individuals, and how to cultivate it</li>
            <li>Creating vitalizing spaces</li>
            <li>The necessity of craftsmanship and beauty</li>
            <li>Learning to narrate enticing stories</li>
          </ol>
          <h4
            className={`${et_book.className} center-text-heading font-bold text-mud md:text-3xl`}
          >
            <em>Words I live by</em>
          </h4>
          <p>
            Optimism, Curiosity, Agency, Benevolence, Longevity, Creativity,
            Authenticity, Beauty, Growth
          </p>
        </div>
      </div>
      <div className={`image-frame`}>
        <Image src={lacabra} alt="kitchen"></Image>
      </div>
    </>
  );
}
