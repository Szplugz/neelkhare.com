import React from "react";
import Tile from "../_components/Tile";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const page = () => {
  return (
    <div className="notebook-grid">
      <Tile number={"00"} heading="Essays" linkTo="/notebook/testing">
        <Link href="https://neelkhare.com/notes/caffeine" className="tile-page">
          Huberman
        </Link>
        <p className="tile-page">Tim Ferriss</p>
        <p className="tile-page">Whatever</p>
      </Tile>
      <Tile number={"01"} heading="Notes">
        <p className="tile-page">Caffeine</p>
        <p className="tile-page">Podcast Notes</p>
      </Tile>
    </div>
  );
};

export default page;
