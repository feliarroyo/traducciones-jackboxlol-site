import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
};

// Placeholder 404 page: rendered inside the main layout (header, footer, background)
export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-6 py-24">
      <p className="text-6xl font-black text-amber-400">404</p>
      <h1 className="text-2xl md:text-3xl font-extrabold text-slate-100">
        Página no encontrada
      </h1>
      <p className="text-slate-400 max-w-md">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold px-6 py-3 rounded-2xl transition-colors"
      >
        Volver a la página principal
      </Link>
    </div>
  );
}
