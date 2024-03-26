import MobileHeader from "@/app/_components/MobileHeader";
import React from "react";

const People = () => {
  return (
    <div className="people-page">
      {/* Navabr is hidden on mobile because of index.css in case you get stuck on it for hours again */}
      <div className="people-content flex-col md:w-[70%] mx-auto overflow-y-hidden font-inter sm:text-lg text-sm">
        <MobileHeader></MobileHeader>
        <div className="p1 mb-5 text-base">
          The internet affords me access to the minds of a variety of people
          from across the globe, and most of my ideas, interests, and lifestyle
          choices are heavily inspired by a group of fascinating people I follow
          online:
        </div>
        <div className="people-technology">
          <div className="technology-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            Technology & Entrepreneurship
          </div>
          <div className="people-list text-base mb-3">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Paul Graham</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="http://paulgraham.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
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
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="http://patrickcollison.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
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
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.mollymielke.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/mollyfmielke"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Jake Chvatal</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://jake.isnt.online/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.are.na/jake-isnt"
                  target="_blank"
                  rel="noreferrer"
                >
                  are.na
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Erik Torenberg</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://eriktorenberg.substack.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/eriktorenberg"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Marc Andreesen</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://pmarca.substack.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/pmarca"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="people-life">
          <div className="life-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            Health, Wellness, & Life
          </div>
          <div className="people-list text-base mb-3">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Andrew Huberman</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://hubermanlab.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/hubermanlab"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Tim Ferriss</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://tim.blog/new-start-here/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/tferriss"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy w-[40%]">Jordan Peterson</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.jordanbpeterson.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Isabel Hazan</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://mindmine.substack.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/isabelunraveled"
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
                  className="people-link text-candy  hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://waitbutwhy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://twitter.com/waitbutwhy"
                  target="_blank"
                  rel="noreferrer"
                >
                  twitter
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="people-art mb-[5vh]">
          <div className="art-header flex flex-row justify-between items-center text-chinaRose mb-3 text-xl font-[500]">
            Art & Design
          </div>
          <div className="people-list text-base mb-3">
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Tim Kellner</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <div></div>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.youtube.com/user/TimtotheWild"
                  target="_blank"
                  rel="noreferrer"
                >
                  youtube
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Justin Shen</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.shennyvisuals.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.instagram.com/shenny.visuals/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                >
                  instagram
                </a>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Cody Hudson</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://www.struggleinc.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <div></div>
              </div>
            </div>
            <div className="person flex flex-row justify-between">
              <div className="text-navy">Rasmus Andersson</div>
              <div className="person-links flex flex-row justify-between w-[40%]">
                <a
                  className="people-link text-candy hover:text-navy ease-in-out transition duration-[300ms]"
                  href="https://rsms.me/"
                  target="_blank"
                  rel="noreferrer"
                >
                  website
                </a>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
