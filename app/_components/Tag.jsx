import React from "react";

const Tag = ({ id, title, bgColor, borderColor, textColor }) => {
  return (
    <div
      className={`tag-${title} ${bgColor} border rounded ${borderColor} ${textColor} text-base flex justify-center items-center p-[3px] h-[100%] ml-2`}
      id={id}
    >
      <p>{title}</p>
    </div>
  );
};

export default Tag;
