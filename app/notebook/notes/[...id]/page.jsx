import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import React from "react";
import { getSortedPostsData } from "../mdToHtml";

export async function generateStaticParams() {
  const posts = await getSortedPostsData();

  return posts.map((post) => ({
    id: [post.id],
    title: post.title,
  }));
}

const Page = ({ params }) => {
  const { id, title } = params;
  return (
    <div>
      My Post: {id}
      <div>{title}</div>
    </div>
  );
};

export default Page;
