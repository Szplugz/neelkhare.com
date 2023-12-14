import React from "react";

const PortfolioSection = ({ name, children }) => {
  return (
    <div className="portfolio-section flex flex-col">
      <h2>{name}</h2>
      {children}
    </div>
  );
};

export default PortfolioSection;
