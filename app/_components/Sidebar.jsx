import React from "react";

const Sidebar = (props) => {
  const { heading, children } = props;
  return <div className="sidebar-heading">{heading}</div>;
};

export default Sidebar;
