import React from "react";

const Tag = ({ id, title, styles }) => {
  return (
    <div
      className={`tag-${title} ${styles} border rounded flex justify-center items-center p-[3px] h-[100%]`}
      id={id}
    >
      <p>{title}</p>
    </div>
  );
};

export default Tag;
