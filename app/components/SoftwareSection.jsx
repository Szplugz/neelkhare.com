import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import cloudinary from "../utils/cloudinary";

export default async function SoftwareSection({ title, date, tags, children }) {
  const folderName = title.toLowerCase().replace(/\s+/g, "");
  const images = await fetchImages({ folderName });

  return (
    <div className="mb-20">
      <div className="header sticky top-[96px]">
        <div className="title flex flex-row justify-between text-2xl mb-2">
          <h className="font-semibold text-spruce">{title}</h>
          <h className="font-medium text-lightMud">{date}</h>
        </div>
        <div className="tags flex flex-row">
          {tags?.map((tag, index) => {
            return <Tag key={index} title={tag.title} styles={tag.styles} />;
          })}
        </div>
      </div>
      {children}
      <div className="images flex-col">{images}</div>
    </div>
  );
}

// combine this function with the one in photography to avoid duplicates
async function fetchImages({ folderName }) {
  const res = await cloudinary.search
    .expression(
      `folder:${process.env.CLOUDINARY_FOLDER}/software/${folderName}/*`
    )
    .sort_by("public_id", "asc")
    .max_results(10)
    .execute();

  const resources = res.resources.sort(function (a, b) {
    var textA = a.filename.toUpperCase();
    var textB = b.filename.toUpperCase();
    return textA > textB;
  });

  const images = (
    <div className="images mt-4 flex-col">
      <div className="top mb-2">
        {resources[0] && (
          <Image
            src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/f_auto,q_auto/v1/${resources[0].public_id}.${resources[0].format}`}
            width={720}
            height={480}
            alt={`${folderName} previews`}
          />
        )}
      </div>
      <div className="bottom flex gap-2">
        <div className="image-container-left flex flex-col w-1/2 gap-2">
          {resources[1] && (
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/f_auto,q_auto/v1/${resources[1].public_id}.${resources[1].format}`}
              width={720}
              height={480}
              alt={`${folderName} previews`}
            />
          )}
          {resources[2] && (
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/f_auto,q_auto/v1/${resources[2].public_id}.${resources[2].format}`}
              width={720}
              height={480}
              alt={`${folderName} previews`}
            />
          )}
        </div>
        <div className="image-container mb-2 w-1/2">
          {resources[3] && (
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/f_auto,q_auto/v1/${resources[3].public_id}.${resources[3].format}`}
              width={720}
              height={480}
              alt={`${folderName} previews`}
            />
          )}
        </div>
      </div>
    </div>
  );

  return images;
}
