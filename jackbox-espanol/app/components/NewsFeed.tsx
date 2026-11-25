import Link from "next/link";
import Image from "next/image";
import NewsLink from "./NewsLink";
import type { PostMetadata } from "../lib/markdownParser";

interface NewsFeedProps {
    posts: PostMetadata[];
    currentPage: number;
    totalPages: number;
}

const pageHref = (page: number) => (page === 1 ? "/news" : `/news/pagina/${page}`);

const pagerLinkClass =
    "px-3 py-2 rounded-xl border border-slate-800 bg-slate-950/40 text-slate-300 hover:text-amber-400 hover:border-amber-500/30 transition-colors";

export default function NewsFeed({ posts, currentPage, totalPages }: NewsFeedProps) {
    return (
        <div className="space-y-12 py-6 max-w-4xl mx-auto">

            {/* SECTION TOP HEADER */}
            <div className="space-y-2">
                <h1 className="text-4xl text-center font-black text-amber-400 tracking-tight">
                    Novedades
                </h1>
                <p className="text-sm text-center text-slate-400">
                    Registro de las actualizaciones realizadas durante los años en el proyecto.
                </p>
            </div>

            {/* FEED TIMELINE */}
            <div className="space-y-6">
                {posts.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-sm border border-dashed border-slate-800 rounded-3xl">
                        No se encontraron noticias.
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {posts.map((post, index) => (
                            <article
                                key={post.slug}
                                className="bg-slate-950/40 border border-slate-800/80 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:border-slate-700/60 hover:-translate-y-1 group shadow-lg"
                            >
                                {/* Conditional Thumbnail Box */}
                                {post.image && (
                                    <div className="w-full aspect-video relative bg-slate-900 shrink-0 border-b border-slate-800/50 overflow-hidden">
                                        <NewsLink href={`/news/${post.slug}`} className="relative block w-full h-full">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 440px"
                                                // First row is above the fold
                                                preload={index < 2}
                                                className="object-cover"
                                            />
                                        </NewsLink>
                                    </div>
                                )}

                                {/* Post Metadata Text Elements */}
                                <div className="flex-1 flex flex-col justify-between space-y-4 p-4">
                                    <div className="space-y-2">
                                        <h2 className="text-xl font-bold text-slate-100 hover:text-amber-400 transition-colors">
                                            <NewsLink href={`/news/${post.slug}`}>
                                                {post.title}
                                            </NewsLink>
                                        </h2>
                                        <div className="flex items-center gap-3 text-xs">
                                            <span className="font-semibold text-slate-400">
                                                {new Date(post.date).toLocaleDateString("es-ES", {
                                                    year: "numeric",
                                                    month: "long",
                                                    day: "numeric",
                                                })}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                )}
            </div>

            {/* PAGINATION */}
            {totalPages > 1 && (
                <nav aria-label="Paginación de novedades" className="flex flex-wrap items-center justify-center gap-2 text-sm font-bold">
                    {currentPage > 1 && (
                        <Link href={pageHref(currentPage - 1)} className={pagerLinkClass}>
                            ← Anterior
                        </Link>
                    )}
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <Link
                            key={page}
                            href={pageHref(page)}
                            aria-current={page === currentPage ? "page" : undefined}
                            className={page === currentPage
                                ? "min-w-10 text-center px-3 py-2 rounded-xl border bg-amber-500 border-amber-400 text-slate-950"
                                : `min-w-10 text-center ${pagerLinkClass}`}
                        >
                            {page}
                        </Link>
                    ))}
                    {currentPage < totalPages && (
                        <Link href={pageHref(currentPage + 1)} className={pagerLinkClass}>
                            Siguiente →
                        </Link>
                    )}
                </nav>
            )}
        </div>
    );
}
