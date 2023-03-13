import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "../../components/navbar/Navbar";
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

const TableEntry = ({ hash, title, newWindow }) => {
  <tr className="table-entry">
    <td className="hash text-lightMud w-[20%]">{hash}</td>
    <td className="text-mud">
      <p className="hover:mr-4 ease-in-out duration-200">{title}</p>
      {newWindow} ?{" "}
      <p className="hover:translate-x-4 ease-in-out duration-200">↗</p> :{" "}
      <p className="hover:translate-x-4 ease-in-out duration-200">-></p>
    </td>
  </tr>;
};

const Index = () => {
  return (
    <div className="index-page bg-eggshell2 h-screen w-screen flex flex-row justify-center selection:bg-mangoHighlight">
      <Helmet>
        <title>Index | Neel Khare</title>
      </Helmet>
      <Navbar />
      <div className="index-content float flex-col w-[50%] my-[10vh] overflow-y-auto font-inter">
        <div className="index-contents mb-5">
          <div className="index-item mb-10 flex sm:flex-row flex-col sm:align-top justify-between">
            <div className="index-item-heading flex flex-col justify-start sm:text-base text-sm font-semibold w-[30%] tracking-normal text-mud text-right mr-[5%]">
              Notebook
            </div>
            <div className="index-item-contents sm:text-base text-sm text-lightMud flex flex-col w-[65%]">
              <div className="index-item-description mb-2">
                Because I have a lot of thoughts and I suck at remembering them.
                Notes are rough, poorly organized, and constantly updated.
              </div>
              <table className="index-item-list">
                <tr className="index-entry">
                  <td className="hash text-lightMud w-[20%]">ea5044fc</td>
                  <td className="text-mud ">
                    <a
                      href="/notes/caffeine"
                      className="transition hover:underline decoration-dotted hover:ease-in-out duration-700"
                    >
                      on caffeine
                    </a>{" "}
                    ->
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="index-item mb-5 flex flex-row align-top justify-between">
            <div className="index-item-heading flex flex-col justify-start sm:text-base text-sm font-semibold w-[30%] tracking-normal text-mud text-right mr-[5%]">
              People
            </div>
            <div className="index-item-contents sm:text-base text-sm text-lightMud flex flex-col w-[65%]">
              <div className="index-item-description mb-2">
                I love meeting and learning about interesting people who think
                deeply about and are perpetually invested in the world around
                them.{" "}
                <a href="/people">
                  <span className="text-mud">Meet just a few of them -></span>
                </a>
              </div>
              <table className="index-item-list">
                <tr className="index-entry"></tr>
              </table>
            </div>
          </div>
          <div className="index-item mb-5 flex flex-row align-top justify-between">
            <div className="index-item-heading flex flex-col justify-start sm:text-base text-sm font-semibold w-[30%] tracking-normal text-mud text-right mr-[5%]">
              Portfolio
            </div>
            <div className="index-item-contents sm:text-base text-sm text-lightMud flex flex-col w-[65%]">
              <div className="index-item-description mb-2">
                I strive to build, create, and curate beautiful things with high
                utility to people.{" "}
                <a href="/portfolio">
                  <span className="text-mud">See what I've created -></span>
                </a>
              </div>
              <table className="index-item-list">
                <tr className="index-entry"></tr>
              </table>
            </div>
          </div>
        </div>
        {/* <Navmobile /> */}
      </div>
    </div>
  );
};

export default Index;
