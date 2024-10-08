import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import React from "react";
import { getAllPostIds, getPostData, getSortedPostsData } from "../mdToHtml";
import * as DOMPurify from "dompurify";
import { newsreader } from "@/app/fonts";
import "./page.css";
import MobileHeader from "@/app/components/MobileHeader";

export default async function Page({ params }) {
  const postdata = await getPostData(params.id);
  return (
    <div className="markdown flex flex-col justify-center items-center">
      <MobileHeader></MobileHeader>
      <div className="w-full sm:w-[70%]">
        <h1
          className={`${newsreader.className} markdown-title text-6xl text-navy font-semibold mb-10`}
        >
          {postdata.title}
        </h1>
        <div
          className="markdown-content flex flex-col"
          dangerouslySetInnerHTML={{ __html: postdata.contentHtml }}
        ></div>
      </div>
    </div>
  );
}
