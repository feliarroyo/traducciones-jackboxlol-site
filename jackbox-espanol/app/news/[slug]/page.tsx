import { notFound } from "next/navigation";
import { getPostBySlug } from "../../lib/markdownParser";
import Image from "next/image";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndividualPostPage({ params }: PostPageProps) {
  const resolvedParams = await params;
  const post = await getPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound(); // Triggers your standard 404 handler gracefully
  }

  const { metadata, htmlContent } = post;

  return (
    <article className="max-w-3xl mx-auto py-8 space-y-6">
      {/* 📸 HERO FEATURED IMAGE */}
      {metadata.image && (
        <div className="w-full h-48 md:h-80 relative rounded-3xl overflow-hidden bg-slate-950/40 border border-slate-800/80 shadow-2xl">
          <Image
            src={metadata.image}
            alt={`Banner para ${metadata.title}`}
            fill
            priority // Tells Next.js to load this instantly since it's above the fold
            className="object-cover"
          />
        </div>
      )}

      {/* ARTICLE METADATA PANEL */}
      <div className="space-y-3 border-b border-slate-800/60 pb-6">
        <h1 className="text-3xl md:text-4xl font-black text-slate-100 tracking-tight">
          {metadata.title}
        </h1>
        <p className="text-xs text-slate-500">
          Publicado el {new Date(metadata.date).toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>
      </div>

      {/* RENDER DYNAMIC MARKDOWN BODY CONTENTS */}
      {/* Tailwind's 'prose' layer handles styling raw HTML markup strings beautifully */}
      <div 
        className="prose prose-invert prose-amber max-w-none text-slate-300 text-sm md:text-base leading-relaxed space-y-4
          prose-headings:text-slate-100 prose-headings:font-extrabold prose-headings:tracking-tight
          prose-strong:text-amber-400 prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
          prose-ul:list-disc prose-ul:pl-5 prose-ol:list-decimal prose-ol:pl-5"
        dangerouslySetInnerHTML={{ __html: htmlContent }} 
      />

    </article>
  );
}