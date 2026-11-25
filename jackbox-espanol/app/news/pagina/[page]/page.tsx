import { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsFeed from "../../../components/NewsFeed";
import { getNewsPage, getNewsPageCount } from "../../../lib/markdownParser";

interface NewsPageProps {
  params: Promise<{ page: string }>;
}

// Only the pages generated at build time exist; anything else is a 404
export const dynamicParams = false;

export function generateStaticParams() {
  const totalPages = getNewsPageCount();
  // Page 1 lives at /news
  return Array.from({ length: Math.max(totalPages - 1, 0) }, (_, i) => ({ page: String(i + 2) }));
}

export async function generateMetadata({ params }: NewsPageProps): Promise<Metadata> {
  const { page } = await params;
  return {
    title: `Novedades (página ${page})`,
    description: "Descubre las últimas noticias y actualizaciones sobre el proyecto de traducción al español de los juegos de Jackbox.",
  };
}

export default async function NewsArchivePage({ params }: NewsPageProps) {
  const { page } = await params;
  const pageNumber = Number(page);
  const { posts, totalPages } = getNewsPage(pageNumber);
  if (!Number.isInteger(pageNumber) || posts.length === 0) notFound();

  return <NewsFeed posts={posts} currentPage={pageNumber} totalPages={totalPages} />;
}
