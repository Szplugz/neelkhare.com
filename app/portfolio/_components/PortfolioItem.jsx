import React from "react";

const PortfolioItem = (props) => {
  const { heading, children } = props;
  return (
    <div className="portfolio-item flex flex-row">
      <p className="portfolio-item-heading text-spruce">{heading}</p>
      <div className="portfolio-item-description flex flex-col">{children}</div>
    </div>
  );
};

export default PortfolioItem;