"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Tag from "@/app/_components/Tag";

const PhotoMenuBar = (props) => {
  const cities = [
    "Copenhagen",
    "Berlin",
    "Florence",
    "Chicago",
    "Urbana-Champaign",
  ];

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [currentCity, setCurrentCity] = useState(cities[0].toLowerCase());

  const handleClick = (e) => {
    const clickedCity = e.target.innerText;
    setCurrentCity(clickedCity.toLowerCase());
    const params = new URLSearchParams(searchParams);
    if (cities.includes(clickedCity)) {
      params.set("city", clickedCity.toLowerCase());
    } else {
      console.log(`${clickedCity} is not a valid city`);
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="photography-menu-bar flex flex-row items-start overflow-scroll">
      {cities.map((city, index) => {
        return (
          <button
            className="photography-menu-button flex flex-row"
            key={index}
            onClick={handleClick}
          >
            {currentCity === city.toLowerCase() ? (
              <Tag
                title={city}
                styles={"bg-goldenMud text-mud border-mud ml-2"}
              ></Tag>
            ) : (
              <p className="photography-menu-button-text text-base ml-2">
                {city}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default PhotoMenuBar;
