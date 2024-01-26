"use client";

import React from "react";
import { useContext, useState } from "react";

export const pageContext = React.createContext({
  activePage: null,
  setActivePage: () => {},
});

const PageProvider = ({ children, defaultPage }) => {
  const [activePage, setActivePage] = useState(defaultPage);
  return (
    <pageContext.Provider value={{ activePage, setActivePage }}>
      {children}
    </pageContext.Provider>
  );
};

export default PageProvider;
