import React from "react";
import cloudinary from "../../_utils/cloudinary.js";
import Image from "next/image";
import PhotoMenuBar from "../_components/PhotoMenuBar.jsx";

const Photography = async ({ searchParams }) => {
  const currentCity = searchParams?.city || "";

  const images = await fetchImages(currentCity);
  const leftImages = images.filter(({ public_id }) => {
    return parseInt(public_id[public_id.length - 1]) % 2 == 0;
  });
  const rightImages = images.filter(({ public_id }) => {
    return parseInt(public_id[public_id.length - 1]) % 2 == 1;
  });
  // {
  //   images.map(({ public_id, format }) => {
  //     console.log(
  //       `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`
  //     );
  //   });
  // }
  return (
    <div className="photography-contents">
      <PhotoMenuBar />
      <div className="photo-gallery">
        <div className="photo-gallery-left">
          {leftImages.map(({ id, public_id, format }) => {
            return (
              <Image
                src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                key={id}
                alt="Next.js Conf photo"
              />
            );
          })}
        </div>
        <div className="photo-gallery-right">
          {rightImages.map(({ id, public_id, format }) => {
            return (
              <Image
                src={`https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                width={720}
                height={480}
                key={id}
                alt="Next.js Conf photo"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const fetchImages = async (city) => {
  console.log(city);
  const results = await cloudinary.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/${city}/*`)
    .sort_by("public_id", "asc")
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

  return reducedResults;
};

export default Photography;
