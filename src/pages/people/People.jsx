import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/Navbar";
import "./People.css";

const people = () => {
  return (
    <div className="bg-pastelGreen h-screen w-screen flex flex-row justify-center selection:bg-skyBlue">
      <Helmet>
        <title>People | Neel Khare</title>
      </Helmet>
      <Navbar />
      <div className="people-content float flex-col w-[30%] my-[10vh] ml-[7.5vw] overflow-y-auto font-inter">
        <div className="header text-navy mb-[5vh]">People</div>
        <div className="p1 mb-[2vh]">
          A list of cool internet people that do cool things from whom I
          regularly learn and draw inspiration. Interestingly, almost all of
          them write.
        </div>
        <div className="subtext text-navy font-inter font-[300] text-xs mb-[5vh]">
          <em>
            Most of them are in the same "twitter-tech-entrepreneur-writer"
            network.
          </em>
        </div>
        <div className="people-list">
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Paul Graham</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="http://paulgraham.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/paulg"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Patrick Collison</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="http://patrickcollison.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/patrickc"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Molly Mielke</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://www.mollymielke.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/mollyfmielke"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Ava Huang</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://ava.substack.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/noampomsky"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Devon Zuegel</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://devonzuegel.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/devonzuegel"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Aella</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://knowingless.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/aella_girl"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Tim Urban</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://waitbutwhy.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/waitbutwhy"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Randall Munroe</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://xkcd.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Michael Solana</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://piratewires.substack.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/micsolana"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Jonathan Haidt</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://jonathanhaidt.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
              <a
                className="people-link text-candy"
                href="https://twitter.com/jonhaidt"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Jordan Peterson</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <a
                className="people-link text-candy"
                href="https://www.jordanbpeterson.com/"
                target="_blank"
                rel="noreferrer"
              >
                website
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Matt Levine</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <div></div>
              <a
                className="people-link text-candy"
                href="https://twitter.com/matt_levine"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Rob Henderson</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <div></div>
              <a
                className="people-link text-candy"
                href="https://twitter.com/robkhenderson"
                target="_blank"
                rel="noreferrer"
              >
                twitter
              </a>
            </div>
          </div>
          <hr className="line border-dotted my-[0.5vh] h-[1px] border-navy"></hr>
          <div className="person flex flex-row justify-between">
            <div className="text-navy">Tim Kellner</div>
            <div className="person-links flex flex-row justify-between w-[40%]">
              <div></div>
              <a
                className="people-link text-candy"
                href="https://www.youtube.com/user/TimtotheWild"
                target="_blank"
                rel="noreferrer"
              >
                youtube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default people;
