import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
import "./Index.css";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Title } from "@mui/icons-material";

const theme = createTheme({
  palette: {
    lightPink: {
      main: "#EE9B86",
    },
    navy: {
      main: "#003547",
    },
  },
});

const Index = () => {
  return (
    <div className="index-page bg-eggshell2 h-screen w-screen flex flex-row justify-center selection:bg-mangoHighlight">
      <Helmet>
        <title>Index | Neel Khare</title>
      </Helmet>
      <Navbar />
      <div className="index-content float flex-col w-[30%] my-[10vh] ml-[7.5vw] overflow-y-auto font-inter">
        <div className="header text-navy mb-[5vh] sm:text-3xl text-2xl">
          Index
        </div>
        <div className="p1 mb-[2vh]">
          An index of everything that interests me. The elements of my
          personality. If the (top-level) contents of my mind were to be
          summarized in a list, it would look something like this.
        </div>
        <div className="subtext text-navy font-inter font-[300] text-xs mb-[5vh]">
          <em>I'm still working on the writeups for some of these items.</em>
        </div>
        {/* <Navmobile /> */}
      </div>
    </div>
  );
};

export default Index;
