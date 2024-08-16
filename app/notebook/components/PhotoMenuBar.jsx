"use client";

import React from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import Tag from "@/app/components/Tag";

const PhotoMenuBar = (props) => {
  const cities = ["Copenhagen", "Berlin", "Florence"];

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
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="photography-menu-bar flex flex-row items-start overflow-x-scroll py-1 pr-1 mb-5 bg-oatmilk rounded">
      {cities.map((city, index) => {
        return (
          <button
            className="photography-menu-button flex flex-row min-w-fit"
            key={index}
            onClick={handleClick}
          >
            {currentCity === city.toLowerCase() ? (
              <Tag
                title={city}
                styles={
                  "bg-goldenMud text-mud border-0 ml-2 md:text-base text-sm"
                }
              ></Tag>
            ) : (
              // applying the first: pseudo-selector doesn't work for some reason, maybe because it's a conditonal render.
              <Tag
                title={city}
                styles={"border-0 ml-2 md:text-base text-sm"}
              ></Tag>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default PhotoMenuBar;
