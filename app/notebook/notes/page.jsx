import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MobileHeader from "@/app/_components/MobileHeader";
import { getAllPostsMetadata } from "./mdToHtml";
import Link from "next/link";

async function page() {
  const notesMetadata = getAllPostsMetadata();
  console.log(notesMetadata);

  return (
    <div className="md:w-[60%] mx-auto flex flex-col">
      <MobileHeader></MobileHeader>
      {notesMetadata.map((note, index) => {
        return (
          <>
            <div
              key={index}
              className="note-entry flex flex-row justify-between mt-2"
            >
              <Link href={`notes/${note.id}`}>{note.title}</Link>
              <p className="date">{note.date}</p>
            </div>
            <hr className="border-goldenMud mt-2"></hr>
          </>
        );
      })}
    </div>
  );
}

export default page;
