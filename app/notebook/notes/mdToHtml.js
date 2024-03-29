import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import wikiLinkPlugin from "remark-wiki-link";

const postsDirectory = path.join(process.cwd(), "/app/notebook/notes/data");

export async function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // console.log(fileContents);

    // Use gray-matter to parse the post metadata section
    const { data, content } = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      data,
      content,
    };
  });

  //   console.log(allPostsData);
  return allPostsData;

  // Sort posts by date
  //   return allPostsData.sort((a, b) => {
  //     if (a.date < b.date) {
  //       return 1;
  //     } else {
  //       return -1;
  //     }
  //   });
}

export function getAllPostsMetadata() {
  const fileNames = fs.readdirSync(postsDirectory);
  const fileMetadata = [];
  fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const metadata = matter(fileContents).data;
    fileMetadata.push({
      id,
      ...metadata,
    });
  });
  return fileMetadata;
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  // returns a file object
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(wikiLinkPlugin)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  console.log(contentHtml);

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
