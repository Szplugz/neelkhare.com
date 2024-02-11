import React from "react";

import Link from "next/link";
import PhotoMenuButton from "./_components/PhotoMenuBar";

const PortfolioLayout = ({ children }) => {
  return (
    <main className="portfolio-layout">
      {children}
      <div className="portfolio-sidebar">
        <h2>Portfolio</h2>
        <p className="portfolio-sidebar-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <div className="portfolio-sidebar-buttons">
          <h4 className="portfolio-sidebar-button">
            <Link href="/portfolio/software">Software</Link>
          </h4>
          <h4 className="portfolio-sidebar-button">
            <Link href="/portfolio/photography?city=copenhagen">
              Photography
            </Link>
          </h4>
        </div>
      </div>
    </main>
  );
};

export default PortfolioLayout;
