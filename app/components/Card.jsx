import React from "react";

const Card = ({ styles, children }) => {
  return <div className={`bg-oatmilk rounded p-6 ${styles}`}>{children}</div>;
};

export default Card;
