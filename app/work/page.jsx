import React from "react";
import { newsreader } from "../fonts";
import MobileHeader from "../_components/MobileHeader";

const page = () => {
  return (
    <div
      className={`work-content flex flex-col justify-between max-w-full md:w-[60%] mx-auto`}
    >
      <MobileHeader></MobileHeader>
      <div className="work-intro mb-12">
        <h1
          className={`${newsreader.className} tite text-navy text-6xl mb-6 font-medium`}
        >
          Work
        </h1>
        <p className="">
          {`As a frontend-focused fullstack engineer, most of my work revolves around building beautiful digital
          experiences. My daily toolbox consists of react, javascript, python, tailwind, and figma, but I'm always eager to try new tools.`}
        </p>
      </div>
      {/* Because of the subtext, having the same margin below the heading makes it seem off, so setting mb = 10 */}
      <div className="work-section flex flex-col gap-6 mb-12">
        <div
          className={`${newsreader.className} text-navy flex flex-col items-center mb-4`}
        >
          <h1 className="work-section-heading text-4xl font-medium">
            Industry Work
          </h1>
          <h4>
            <em>Kind of Professional</em>
          </h4>
        </div>
        <div className="entry">
          <p className="text-spruce font-medium">Resolv</p>
          <p className="text-lightMud mb-2">Fullstack Engineer</p>
          <p>
            Building Resolv's website and the frontend infrastructure for their
            digital asset protection tool. Learning about web security,
            authentication, complex state management with context, and web3.
          </p>
        </div>
        <div className="entry">
          <p className="text-spruce font-medium">Gro Intelligence</p>
          <p className="text-lightMud mb-2">Analyst Intern</p>
          <p>
            As a fullstack intern on the special projects team, I designed &
            built Gro's global tradeflow visualisation tool and helped
            streamline their internal developer tools. Learned a lot about
            React's rendering cycle & Context API, web interactivity, and taking
            data apart in python.
          </p>
        </div>
        <div className="entry">
          <p className="text-spruce font-medium">Mediaocean</p>
          <p className="text-lightMud mb-2">Software Engineering Intern</p>
          <p>
            At Mediaocean, I helped the ad software team migrate their RESTful
            APIs to GraphQL, and built parts of their client-facing webapp.
            Learned how to design APIs and write custom build jobs.
          </p>
        </div>
      </div>
      <div className="work-section flex flex-col gap-6">
        <div
          className={`${newsreader.className} text-navy flex flex-col items-center`}
        >
          <h1 className={`work-section-heading text-4xl font-medium mb-2 `}>
            Fun Projects
          </h1>
          <h4>
            <em>Less Professional</em>
          </h4>
        </div>
        <div className="entry">
          <p className="text-spruce font-medium mb-2">feynman</p>
          <p>
            An AI tool that simplifies academic papers without loss of
            information so that <em>anyone</em> can extract relevant, actionable
            information from them. I built this mostly because I was getting
            tired of hearing conflicting opinions about nutrition data and was
            having a hard time understanding the statistical methods and
            industry-specific jargon used in the studies I was reading. Learning{" "}
            <em>a lot</em> about async requests, data streaming, and CSS.
          </p>
        </div>
        <div className="entry">
          <p className="text-spruce font-medium mb-2">neelkhare.com</p>
          <p>
            This website; it's more complicated than it should be, and that's
            only because I wanted to implement almost everything from scratch to
            teach myself the fundamentals of web architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
