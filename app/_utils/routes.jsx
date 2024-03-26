import React from "react";

const routes = {
  portfolio: {
    name: "portfolio",
    path: "/portfolio",
    pages: {
      software: {
        name: "software",
        path: "/portfolio/software",
        pages: {},
      },
      photography: {
        name: "photography",
        path: "/portfolio/photography",
        pages: {},
      },
    },
  },
  notebook: {
    name: "notebook",
    path: "/notebook",
    pages: {
      notes: {
        name: "notes",
        path: "/notebook/notes",
        pages: {},
      },
      people: {
        name: "people",
        path: "/notebook/people",
        pages: {},
      },
    },
  },
};

export default routes;
