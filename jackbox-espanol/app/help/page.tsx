// src/app/help/page.tsx
import Link from "next/link";
import { FAQ_REGISTRY } from "../data/faqRegistry"; // Ajusta la ruta según tu estructura de carpetas
import FaqItem from "../components/FaqItem";

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
        <div className="space-y-4">
        {FAQ_REGISTRY.map((faq, index) => (
          <FaqItem 
            key={index} 
            question={faq.question} 
            answer={faq.answer} 
          />
        ))}
      </div>
    </div>
  </div>
  );
}