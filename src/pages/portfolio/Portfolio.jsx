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
                href="https://youtu.be/34dsHW0mBrA"
                target="_blank"
                rel="noreferrer"
              >
                HHC Documentary (preview)
              </a>
              <ArrowOutwardIcon sx={{ fontSize: 15 }} />
            </li>
            <li className="block flex justify-start">
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="https://youtu.be/34dsHW0mBrA"
                target="_blank"
                rel="noreferrer"
              >
                HHC Documentary (preview)
              </a>
              <ArrowOutwardIcon sx={{ fontSize: 15 }} />
            </li>
            <li className="block flex justify-start">
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="https://www.figma.com/file/Hbk2oiju5HYHs4vH7fJ2VM/placeholder?node-id=0%3A1&t=xxni4F3Sw2sEA5J1-1"
                target="_blank"
                rel="noreferrer"
              >
                Placeholder
              </a>
              <ArrowOutwardIcon sx={{ fontSize: 15 }} />
            </li>
            <li className="block flex justify-start">
              <a
                className="link text-almostBlack underline hover:decoration-solid decoration-dotted decoration-chinaRose transition duration-[1000ms] ease-in-out"
                href="https://quantillinois-com-kfb24.ondigitalocean.app/"
                target="_blank"
                rel="noreferrer"
              >
                Quant Website (In Progress)
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
