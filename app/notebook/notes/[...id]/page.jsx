import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import React from "react";
import { getPostData, getSortedPostsData } from "../mdToHtml";
import * as DOMPurify from "dompurify";
import { newsreader } from "@/app/fonts";
import "./page.css";

export default async function Page({ params }) {
  const postdata = await getPostData(params.id);
  return (
    <div className="markdown flex justify-center">
      <div className="w-[70%]">
        <h4 className={`markdown-title text-xl font-semibold mb-5`}>
          {postdata.title}
        </h4>
        <div
          className="markdown-content flex flex-col"
          dangerouslySetInnerHTML={{ __html: postdata.contentHtml }}
        ></div>
      </div>
    </div>
  );
}
