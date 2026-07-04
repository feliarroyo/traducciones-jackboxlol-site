// src/app/news/page.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getAllNewsPosts } from "../lib/markdownParser";

export default function NewsHubPage() {
    const posts = getAllNewsPosts();
    return (
        <div className="space-y-12 py-6 max-w-4xl mx-auto">

            {/* SECTION TOP HEADER */}
            <div className="space-y-2">
                <h1 className="text-3xl font-black text-amber-400 tracking-tight">
                    Noticias y Actualizaciones
                </h1>
                <p className="text-sm text-slate-400">
                    Sigue de cerca los anuncios oficiales, parches de traducción y novedades de la comunidad.
                </p>
            </div>

            {/* FEED TIMELINE */}
            <div className="space-y-6">
                {posts.length === 0 ? (
                    <div className="text-center py-12 text-slate-500 text-sm border border-dashed border-slate-800 rounded-3xl">
                        No se encontraron noticias. Crea un archivo <code className="text-amber-500">.md</code> en <code className="text-slate-400">src/content/news/</code> para empezar.
                    </div>
                ) : (
                    posts.map((post) => (
                        <article
                            key={post.slug}
                            className="bg-slate-950/40 border border-slate-800/80 rounded-3xl overflow-hidden p-6 md:p-8 flex flex-col md:flex-row gap-6 transition-all hover:border-slate-700/60"
                        >
                            {/* Conditional Thumbnail Box */}
                            {post.image && (
                                <div className="w-full md:w-48 h-32 relative rounded-2xl overflow-hidden bg-slate-900 shrink-0">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            )}

                            {/* Post Metadata Text Elements */}
                            <div className="flex-1 flex flex-col justify-between space-y-4">
                                <div className="space-y-2">
                                    <div className="flex items-center gap-3 text-xs">
                                        <span className="text-slate-500 font-medium">
                                            {new Date(post.date).toLocaleDateString("es-ES", {
                                                year: "numeric",
                                                month: "long",
                                                day: "numeric",
                                            })}
                                        </span>
                                        <span className="px-2 py-0.5 rounded-md font-bold text-[10px] uppercase tracking-wider bg-amber-500/10 border border-amber-500/20 text-amber-400">
                                            {post.category}
                                        </span>
                                    </div>

                                    <h2 className="text-xl font-bold text-slate-100 hover:text-amber-400 transition-colors">
                                        <Link href={`/news/${post.slug}`}>
                                            {post.title}
                                        </Link>
                                    </h2>

                                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
                                        {post.excerpt}
                                    </p>
                                </div>

                                <div>
                                    <Link
                                        href={`/news/${post.slug}`}
                                        className="text-xs text-cyan-400 hover:underline font-bold inline-flex items-center gap-1"
                                    >
                                        Leer más <span>→</span>
                                    </Link>
                                </div>
                            </div>
                        </article>
                    ))
                )}
            </div>

        </div>
    );
}