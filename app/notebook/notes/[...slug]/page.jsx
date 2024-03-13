import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import React from "react";

export async function generateStaticParams() {
  //   const posts = await fetch("https://.../posts").then((res) => res.json());

  //   return posts.map((post) => ({
  //     slug: post.slug,
  //   }));

  return [{ slug: ["one"] }, { slug: ["two"] }, { slug: ["three"] }];
}

const Page = ({ params }) => {
  const { slug } = params;
  return <div>My Post: {slug}</div>;
};

export default Page;
