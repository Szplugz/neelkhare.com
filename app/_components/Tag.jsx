import React from "react";

const Tag = ({ id, title, bgColor, borderColor }) => {
  return (
    <div
      className={`tag-${title} ${bgColor} border rounded-sm ${borderColor} flex justify-center items-center h-4 text-xs`}
      id={id}
    >
      <p>{title}</p>
    </div>
  );
};

export default Tag;
