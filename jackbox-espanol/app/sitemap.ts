import type { MetadataRoute } from "next";
import { getAllNewsPosts, getNewsPageCount } from "./lib/markdownParser";
import { SITE_URL } from "./lib/siteConfig";

// Generated at build time as /sitemap.xml: lists every public page so search engines can find them
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllNewsPosts();
  // News dates use "YYYY/MM/DD"
  const toDate = (date: string) => new Date(date.replaceAll("/", "-"));
  const latestNews = posts.length > 0 ? toDate(posts[0].date) : undefined;

  const mainPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1, lastModified: latestNews },
    { url: `${SITE_URL}/downloads`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/news`, changeFrequency: "weekly", priority: 0.8, lastModified: latestNews },
    { url: `${SITE_URL}/help`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/credits`, changeFrequency: "monthly", priority: 0.5 },
  ];

  const newsPages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(getNewsPageCount() - 1, 0) },
    (_, i) => ({ url: `${SITE_URL}/news/pagina/${i + 2}`, changeFrequency: "weekly", priority: 0.3 })
  );

  const newsPosts: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${SITE_URL}/news/${post.slug}`,
    lastModified: toDate(post.date),
    changeFrequency: "yearly",
    priority: 0.4,
  }));

  return [...mainPages, ...newsPages, ...newsPosts];
}
