"use client";

import React from "react";
import Software from "./software/page";
import Photography from "./photography/page";
import { useState } from "react";

// Eventually I want to replace most hard-coded values with dynamically pulled content from an external database

const views = {
  software: <Software />,
  photography: <Photography />,
};

const page = () => {
  const [currentPage, setCurrentPage] = useState("software");
  let view = null;
  try {
    view = views[currentPage];
  } catch (e) {
    view = <p>Broken code :( look at console and pls report</p>;
    throw e;
  }

  return (
    <main className="portfolio-page">
      <div className="w-[50%]">{view}</div>
      <div>
        <button onClick={() => setCurrentPage("software")}>Software</button>
        <button onClick={() => setCurrentPage("photography")}>Software</button>
      </div>
    </main>
  );
};

export default page;
