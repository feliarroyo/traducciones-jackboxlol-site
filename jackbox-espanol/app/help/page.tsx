// src/app/help/page.tsx
import Link from "next/link";
import { FAQ_REGISTRY } from "../data/faqRegistry"; // Ajusta la ruta según tu estructura de carpetas

export default async function HelpPage() {
  return (
    <div className="space-y-12 py-6 max-w-4xl mx-auto">
      {/* SECTION TOP HEADER */}
      <div className="space-y-2">
        <h1 className="text-4xl text-center font-black text-amber-400 tracking-tight md:text-5xl">
          Ayuda
        </h1>
        <p className="text-sm text-center text-slate-400">
          Aquí dejamos respuestas a algunas de las preguntas más frecuentes relacionadas al proyecto.
          Si no encuentras respuesta a tu pregunta, puedes intentar resolverla en{" "}
          <Link 
            href="https://discord.com/invite/k8MASuepRw" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-300 hover:underline font-bold transition-colors"
          >
            el servidor de Discord del proyecto
          </Link>.
        </p>
      </div>

      {/* FAQ SECTION */}
      <div className="space-y-4">
        {FAQ_REGISTRY.map((faq, index) => (
          <details
            key={index}
            className="group bg-slate-950/30 border border-slate-800/60 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 open:border-amber-500/30 open:bg-slate-950/50"
          >
            {/* Pregunta */}
            <summary className="flex items-center justify-between p-5 font-bold text-slate-200 cursor-pointer list-none select-none hover:bg-slate-800/20 group-open:border-b group-open:border-slate-800/50 transition-colors">
              <span className="text-base md:text-lg pr-4 group-open:text-amber-400 transition-colors">
                {faq.question}
              </span>
              {/* Flecha indicadora */}
              <span className="text-slate-500 group-open:rotate-180 group-open:text-amber-400 transition-transform duration-300 shrink-0">
                ▼
              </span>
            </summary>

            {/* Respuestas (Párrafos dinámicos) */}
            <div className="p-5 bg-slate-950/20 text-slate-300 space-y-4 leading-relaxed text-sm md:text-base">
              {faq.answer.map((paragraph, pIdx) => {
                // Validación para estilizar las listas numeradas si el texto empieza con un número
                const isListItem = /^\d+\./.test(paragraph);
                
                return (
                  <p 
                    key={pIdx} 
                    className={`${isListItem ? "pl-4 text-slate-400 border-l border-slate-800" : ""}`}
                  >
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </details>
        ))}
      </div>
    </div>
  );
}