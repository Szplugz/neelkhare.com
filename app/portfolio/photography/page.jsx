import React from "react";
import cloudinary from "../../_utils/cloudinary.js";
import Image from "next/image";
import PhotoMenuBar from "../_components/PhotoMenuBar.jsx";
import { useRouter } from "next/navigation";
import MobileHeader from "@/app/_components/MobileHeader.jsx";

const Photography = async ({ searchParams }) => {
  const currentCity = searchParams?.city || "copenhagen";
  // See if there's a way to update the url to reflect copenhagen without turning this into a client component

  const { wideImages, tallImages } = await fetchImages(currentCity);
  const leftImages = [];
  const rightImages = [];
  let left = true;
  while (wideImages.length && tallImages.length) {
    const wideImage = wideImages.shift();
    const tallImage = tallImages.shift();
    if (left) {
      leftImages.push(wideImage);
      leftImages.push(tallImage);
    } else {
      rightImages.push(tallImage);
      rightImages.push(wideImage);
    }
    left = !left;
  }
  // only one of these will be true
  while (wideImages.length) {
    // imageRows.push([wideImages.shift(), wideImages.shift()]);
    if (left) {
      leftImages.length > rightImages.length
        ? rightImages.push(wideImages.shift())
        : leftImages.push(wideImages.shift());
    } else {
      rightImages.length > leftImages.length
        ? leftImages.push(wideImages.shift())
        : rightImages.push(wideImages.shift());
    }
  }
  while (tallImages.length) {
    // imageRows.push([wideImages.shift(), wideImages.shift()]);
    left
      ? leftImages.push(tallImages.shift())
      : rightImages.push(tallImages.shift());
    left = !left;
  }

  return (
    <div className="photography-contents md:px-20 md:min-w-[650px] w-full">
      <MobileHeader></MobileHeader>
      <PhotoMenuBar />
      <div className="photo-gallery flex md:flex-row flex-col">
        <div className="photo-gallery-left">
          {leftImages.map(({ id, public_id, format }) => {
            return (
              <div className="image-container pb-1">
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={720}
                  height={480}
                  key={id}
                  alt={`A picture from ${currentCity}`}
                />
              </div>
            );
          })}
        </div>
        <div className="photo-gallery-right">
          {rightImages.map(({ id, public_id, format }) => {
            return (
              <div className="image-container pl-1 pb-1">
                <Image
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                  width={720}
                  height={480}
                  key={id}
                  alt={`A picture from ${currentCity}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const fetchImages = async (city) => {
  const results = await cloudinary.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${city}/*`)
    .sort_by("public_id", "asc")
    .max_results(400)
    .execute();

  let reducedResults = { wideImages: [], tallImages: [] };

  let i = 0;
  for (let result of results.resources) {
    result.width >= result.height
      ? reducedResults.wideImages.push({
          id: i,
          height: result.height,
          width: result.width,
          public_id: result.public_id,
          format: result.format,
        })
      : reducedResults.tallImages.push({
          id: i,
          height: result.height,
          width: result.width,
          public_id: result.public_id,
          format: result.format,
        });
    i++;
  }

  return reducedResults;
};

export default Photography;
