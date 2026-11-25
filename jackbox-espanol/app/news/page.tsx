import { Metadata } from "next";
import NewsFeed from "../components/NewsFeed";
import { getNewsPage } from "../lib/markdownParser";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Descubre las últimas noticias y actualizaciones sobre el proyecto de traducción al español de los juegos de Jackbox.",
};

export default function NewsHubPage() {
  const { posts, totalPages } = getNewsPage(1);
  return <NewsFeed posts={posts} currentPage={1} totalPages={totalPages} />;
}
