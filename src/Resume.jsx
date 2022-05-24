import React from "react";
import resume from "./utils/resume.pdf";

const Resume = () => {
  return (
    <div className="resume bg-almostBlack h-screen text-eggshell">
      <a href={resume} target="_blank">
        Resumé
      </a>
    </div>
  );
};

export default Resume;
