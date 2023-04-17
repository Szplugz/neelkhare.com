import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import Navmobile from "../../components/navbar/Navmobile";
import newlogo from "../../utils/StarLogoNeel.png";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MobileFooter from "../../components/navbar/MobileFooter";

const Portfolio = () => {
  return (
    <div>
      <div className="portfolio-page bg-[#d4d4d4] h-screen w-screen flex flex-row justify-center selection:bg-mangoHighlight overflow-visible">
        <Helmet>
          <title>Portfolio | Neel Khare</title>
        </Helmet>
        <Navbar />
        <div className="people-content float flex-col w-[40%] pt-[10vh] ml-[7.5vw] overflow-y-hidden font-inter text-base">
          <Navmobile />
          <div className="header flex flex-row justify-between items-center text-navy mb-5 sm:text-3xl text-2xl font-[500]">
            <div className="title">Portfolio</div>
            <img className="portfolio-stars h-[4vh]" src={newlogo}></img>
          </div>
          <div className="warning w-full mb-5 text-lightMud">
            <em>This page is under construction.</em>
          </div>
          <div className="p1 mb-5 text-base">
            For all of my visual(izable) projects.
          </div>{" "}
          <ul className="list mb-5">
            <li className="block flex justify-start">
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="/photography"
                target="_blank"
                rel="noreferrer"
              >
                Photography
              </a>
              <ArrowOutwardIcon sx={{ fontSize: 15 }} />
            </li>

            <li className="block flex justify-start">
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="https://quantillinois.com"
                target="_blank"
                rel="noreferrer"
              >
                Quant Website
              </a>
              <ArrowOutwardIcon sx={{ fontSize: 15 }} />
            </li>
          </ul>
          <MobileFooter />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
