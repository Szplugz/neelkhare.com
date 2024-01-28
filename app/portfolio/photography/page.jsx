import React from "react";
import cloudinary from "../../_utils/cloudinary.js";

const Photography = async () => {
  const images = await fetchImages();
  console.log(images);
  return <div></div>;
};

const fetchImages = async () => {
  const results = await cloudinary.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  let reducedResults = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  return results;
};

export default Photography;
