// src/lib/markdownParser.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const newsDirectory = path.join(process.cwd(), "app/content/news");

export interface PostMetadata {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image?: string;
}

// 1. GET ALL POSTS SORTED BY DATE (For the News Hub Feed)
export function getAllNewsPosts(): PostMetadata[] {
  // Create directory if it doesn't exist yet
  if (!fs.existsSync(newsDirectory)) {
    fs.mkdirSync(newsDirectory, { recursive: true });
    return [];
  }

  const fileNames = fs.readdirSync(newsDirectory);
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(newsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      
      // gray-matter extracts the top --- section
      const { data } = matter(fileContents);

      return {
        slug,
        ...(data as { title: string; date: string; category: string; excerpt: string; image?: string }),
      };
    });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 2. GET A SINGLE POST BY SLUG (For the Individual Article Page)
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  // Convert markdown syntax (*, #, [link]) into HTML tags (<em>, <h1>, <a href>)
  const htmlContent = await marked.parse(content);

  return {
    metadata: {
      slug,
      ...(data as { title: string; date: string; category: string; excerpt: string; image?: string }),
    },
    htmlContent,
  };
}