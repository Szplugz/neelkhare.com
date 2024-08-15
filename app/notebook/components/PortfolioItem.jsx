import React from "react";
import Tag from "@/app/components/Tag";

const PortfolioItem = (props) => {
  const { heading, roles, children, tags } = props;
  return (
    <div className="portfolio-item flex md:flex-row flex-col m-4">
      <div className="portfolio-item-data flex flex-col mb-4 min-w-[30%] md:pr-4 md:items-end">
        <p className="portfolio-item-heading text-spruce font-[500] mb-2">
          {heading}
        </p>
        <div className="tags flex flex-row">
          {tags?.map((tag, index) => {
            return <Tag key={index} title={tag.title} styles={tag.styles} />;
          })}
        </div>
      </div>
      <div className="portfolio-item-description flex flex-col">{children}</div>
    </div>
  );
};

export default PortfolioItem;
