import React from "react";

const routes = {
  work: {
    name: "work",
    path: "/work",
    pages: {},
  },
  notebook: {
    name: "notebook",
    path: "/notebook",
    pages: {
      photography: {
        name: "photography",
        path: "/notebook/photography",
        pages: {},
      },
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
