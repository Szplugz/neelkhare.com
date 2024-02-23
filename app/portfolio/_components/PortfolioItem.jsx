import React from "react";
import Tag from "@/app/_components/Tag";

const PortfolioItem = (props) => {
  const { heading, roles, children, tags } = props;
  return (
    <div className="portfolio-item flex flex-row m-4">
      <div className="portfolio-item-data flex flex-col min-w-[30%] pr-4 items-end">
        <p className="portfolio-item-heading text-spruce font-[500] mb-2">
          {heading}
        </p>
        <div className="tags flex flex-row">
          {tags?.map((tag, index) => {
            return (
              <Tag
                key={index}
                title={tag.title}
                bgColor={tag.bgColor}
                borderColor={tag.borderColor}
                textColor={tag.textColor}
              />
            );
          })}
        </div>
      </div>
      <div className="portfolio-item-description flex flex-col">{children}</div>
    </div>
  );
};

export default PortfolioItem;
