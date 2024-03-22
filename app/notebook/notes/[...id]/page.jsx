import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import React from "react";
import { getPostData, getSortedPostsData } from "../mdToHtml";
import * as DOMPurify from "dompurify";

// export async function generateStaticParams() {
//   const posts = await getSortedPostsData();

//   // console.log(posts);

//   return posts.map((post) => ({
//     id: [post.id],
//     title: post.title,
//     content: <h2 className="text-spruce font-black">{post.content}</h2>,
//   }));
// }

export default async function Page({ params }) {
  const postdata = await getPostData(params.id);
  // const cleanHtml = DOMPurify(postdata.contentHtml);
  return (
    <div>
      My Post: {params.id}
      <div dangerouslySetInnerHTML={{ __html: postdata.contentHtml }}></div>
    </div>
  );
}
