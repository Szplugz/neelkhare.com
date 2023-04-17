import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import Navmobile from "../components/navbar/Navmobile";

const hubferris = () => {
  return (
    <div className="caffeine-page bg-eggshell2 h-auto w-screen flex sm:flex-row flex-col justify-center selection:bg-mangoHighlight font-inter sm:overflow-y-hidden overflow-y-visible">
      <Helmet>
        <title>huberman on ferris | Neel Khare</title>
      </Helmet>
      <Navbar />
      <div className="caffeine-notes flex flex-col float sm:mt-20 sm:ml-20 ml-[10%] sm:w-[40%] w-[80%] min-w-[240px] sm:overflow-y-scroll overflow-y-visible mt-[10vh] mb-10">
        <Navmobile />
        <div className="caffeine-heading text-mud flex justify-between sm:text-xl text-lg font-semibold mb-5">
          <div>Andrew Huberman on the Tim Ferriss Show</div>
          <div>2023-03-19</div>
        </div>
        <div className="text-sm mb-5 font-inter text-lightMud">
          <em>
            These are the notes I took while listening to episode #660 of the
            Tim Ferris show featuring Dr. Andrew Huberman.
          </em>
        </div>
        <div>
          <div className="mb-5 text-mud font-medium">
            5 Components that lay the foundation of a healthy life (First
            Principles of Self Care):
          </div>
          <div className="mb-5">
            <ol>
              <li className="ml-10 list-decimal">Sleep</li>
              <li className="ml-10 list-decimal">Nutrients</li>
              <li className="ml-10 list-decimal">Movement</li>
              <li className="ml-10 list-decimal">Light</li>
              <li className="ml-10 list-decimal">Relationships</li>
            </ol>
          </div>
          <div className="mb-5">
            <span className="font-medium text-mud">
              Hallmarks of good mental health
            </span>{" "}
            - the ability to lean into effort but also to relax and restore your
            system whenever necessary, to feel good about what you're doing, and
            the ability to move from driven to reflective effectively.
          </div>
          <div className="font-medium text-mud mb-5">
            Fadogia agrestsis will make you horny.
          </div>
          <div className="mb-5">
            <em>
              <a
                className="decoration-dotted underline decoration-chinaRose hover:decoration-solid"
                href="https://www.imdb.com/title/tt0099348/"
                target="_blank"
              >
                Dances with Wolves
              </a>{" "}
              movie?
            </em>
          </div>
          <div className="mb-5">
            It is very clear that the EMFs & Heat from your phone (if you leave
            it in your pocket) contribute to a reduction in sperm quality and
            testosterone.
          </div>
          <div className="mb-5">
            Freezing sperm and embryos early on in your life is a good idea (?)
          </div>
          <div className="mb-5">
            Printed receipts are the largest source of BPA - avoid them.
          </div>
          <div className="mb-5 text-lightMud">
            <em>“Alcohol borrows happiness from tomorrow”</em>
          </div>
          <div className="mb-5">
            MDMA has a very high safety threshold??? It is soon going to be a
            mainstream treatment for trauma under the supervision of a
            psychiatrist/physician.
          </div>
          <div className="mb-5">
            <span className="text-mud font-semibold">
              <em>psyche-delic</em>
            </span>{" "}
            - revealing the unconscious mind
          </div>
          <div className="mb-5">
            Huberman did an MDMA course (with a doctor, through MAPS & engages
            in psychotherapy.
          </div>
          Also DanceSafe helps you detect laced drugs. How to Change Your Mind
          on Netflix.
        </div>
      </div>
    </div>
  );
};

export default hubferris;
