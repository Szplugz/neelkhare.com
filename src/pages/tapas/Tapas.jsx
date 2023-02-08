import React from "react";
import Navbar from "../../components/navbar/Navbar";
import { Helmet } from "react-helmet";
import newlogo from "../../utils/StarLogoNeel.svg";

const Tapas = () => {
  return (
    <div className="tapas-page bg-mangoHighlight h-screen w-screen flex flex-row justify-center selection:bg-mangoHighlight">
      <Helmet>
        <title>Tapas | Neel Khare</title>
      </Helmet>
      <Navbar />
      <div className="tapas-content float flex-col w-[40%] py-[10vh] ml-[7.5vw] overflow-y-hidden font-inter text-xl">
        <div className="header flex flex-row justify-between items-center text-chinaRose mb-[5vh] text-2xl font-[500]">
          <div className="title">Tapas</div>
          <img className="stars h-[4vh]" src={newlogo}></img>
        </div>
      </div>
    </div>
  );
};

export default Tapas;
