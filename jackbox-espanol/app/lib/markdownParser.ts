// src/lib/markdownParser.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const newsDirectory = path.join(process.cwd(), "app/content/news");

// Frontmatter fields of each news .md file
type PostFrontmatter = {
  title: string;
  date: string;
  category?: string;
  image?: string;
  // Optional summary for search engines and social previews.
  // When missing, a generic description is used instead.
  description?: string;
};

export interface PostMetadata extends PostFrontmatter {
  slug: string;
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
        ...(data as PostFrontmatter),
      };
    });

  // Sort posts by date descending
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// 1b. PAGINATION HELPERS (the full feed is too heavy for a single page)
export const NEWS_PER_PAGE = 24;

export function getNewsPageCount(): number {
  return Math.max(1, Math.ceil(getAllNewsPosts().length / NEWS_PER_PAGE));
}

export function getNewsPage(page: number): { posts: PostMetadata[]; totalPages: number } {
  const all = getAllNewsPosts();
  const start = (page - 1) * NEWS_PER_PAGE;
  return {
    posts: all.slice(start, start + NEWS_PER_PAGE),
    totalPages: Math.max(1, Math.ceil(all.length / NEWS_PER_PAGE)),
  };
}

// 2. GET A SINGLE POST BY SLUG (For the Individual Article Page)
export async function getPostBySlug(slug: string) {
  const fullPath = path.join(newsDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) return null;
  
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  
  // Convert markdown syntax (*, #, [link]) into HTML tags (<em>, <h1>, <a href>)
  // Embedded iframes (YouTube) load only when scrolled near, instead of on page load
  const htmlContent = (await marked.parse(content)).replace(
    /<iframe(?![^>]*\bloading=)/g,
    '<iframe loading="lazy"'
  );

  return {
    metadata: {
      slug,
      ...(data as PostFrontmatter),
    },
    htmlContent,
  };
}