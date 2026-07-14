"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function BackButton() {
  const router = useRouter();
  const [cameFromNews, setCameFromNews] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const fromNews = sessionStorage.getItem("came-from-news");
      if (fromNews === "true") {
        setCameFromNews(true);
      }
    }
  }, []);

  const handleBack = () => {
    if (cameFromNews) {
      window.history.back();
    } else {
      router.push("/news");
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-amber-400 border border-slate-800 hover:border-amber-500/30 bg-slate-950/40 rounded-xl transition-all duration-200 group mb-4 cursor-pointer"
    >
      {/* Flechita animada hacia la izquierda */}
      <svg
        className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform fill-current"
        viewBox="0 0 20 20"
      >
        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      Volver a Novedades
    </button>
  );
}