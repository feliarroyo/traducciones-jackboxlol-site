"use client";
import { useState } from "react";
import { CREDITS_REGISTRY } from "../data/creditsRegistry";
import { DUB_CREDITS_REGISTRY } from "../data/dubCreditsRegistry";
import CreditCardXL from "../components/CreditCardXL";
import CreditCardContainer from "../components/CreditCardContainer";
import CreditCardXLContainer from "../components/CreditCardXLContainer";
import DubGameCardXL from "../components/DubGameCardXL";
import DubGameCard from "../components/DubGameCard";

type CreditView = "translations" | "dubs";

export default function CreditsPage() {
  const [activeView, setActiveView] = useState<CreditView>("translations");
  const activeRegistry = activeView === "translations" ? CREDITS_REGISTRY : DUB_CREDITS_REGISTRY;
  const admins = CREDITS_REGISTRY.filter(c => c.category === "administrator");
  const majorContributors = CREDITS_REGISTRY.filter(c => c.category === "majorContributor");
  const minorContributors = CREDITS_REGISTRY.filter(c => c.category === "minorContributor");
  const miscContributors = CREDITS_REGISTRY.filter(c => c.category === "miscContributor");

  return (
    <div className="max-w-6xl mx-auto py-12 px-4 space-y-4">

      {/* PAGE HEADER */}
      <div className="text-center space-y-3">
        <h1 className="text-4xl font-black text-amber-400 tracking-tight">Créditos del proyecto</h1>
        <p className="text-sm text-slate-400 max-w-xl mx-auto">
          Se listan todos los traductores, editores de audio/video, actores de doblaje y otros colaboradores que han contribuido al proyecto.
        </p>
      </div>

      {/* SEGMENTED TOGGLE SWITCH CONTROLLER */}
      <div className="flex justify-center w-full">
        <div className="bg-slate-950/60 p-1 rounded-2xl border border-slate-800/60 flex items-center gap-1">
          <button
            onClick={() => setActiveView("translations")}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${activeView === "translations"
              ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
              : "text-slate-400 hover:text-slate-200"
              }`}
          >
            Traducciones
          </button>
          <button
            onClick={() => setActiveView("dubs")}
            className={`px-6 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-200 ${activeView === "dubs"
              ? "bg-amber-500 text-slate-950 shadow-md font-extrabold"
              : "text-slate-400 hover:text-slate-200"
              }`}
          >
            Doblajes
          </button>
        </div>
      </div>

      {/* CONDITIONAL REGISTRY ROUTING SECTIONS */}
      <div className="space-y-20 pt-4">
        {activeView === "translations" ? (
          <>
            {/* 🟦 TRANSLATIONS RENDER TRACKS */}
            <CreditCardXLContainer
              title="Administradores"
              data={admins}
            />
            <CreditCardContainer
              title="Colaboradores Principales"
              data={majorContributors}
            />
            <CreditCardContainer
              title="Colaboradores Asistentes"
              titleClassName="text-xl font-bold text-slate-200"
              data={minorContributors}
            />
            <CreditCardContainer
              title="Otros Aportes / Agradecimientos"
              titleClassName="text-lg font-bold text-slate-400"
              data={miscContributors}
            />
          </>
        ) : (
          <>
          {/* 🎮 NEW GAME-CENTRIC GRID FOR MAIN DUBS */ }
          <section className="space-y-6">
        <h2 className="text-2xl font-extrabold text-slate-200 border-b border-slate-800 pb-2">
          Doblajes completos
        </h2>
        <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full mx-auto">
          {DUB_CREDITS_REGISTRY.filter(g => g.category === "mainDub").map((game) => (
            <DubGameCardXL key={game.id} game={game} />
          ))}
        </div>
      </section>

      {/* 🎮 NEW GAME-CENTRIC CLOUD FOR MINOR DUBS */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-slate-400 border-b border-slate-800 pb-2">
          Doblajes parciales
        </h2>
        <div className="flex flex-row flex-wrap gap-4 justify-center items-start w-full mx-auto">
          {DUB_CREDITS_REGISTRY.filter(g => g.category === "minorDub").map((game) => (
            <DubGameCard key={game.id} game={game} />
          ))}
        </div>
      </section>
    </>
  )
}
        
      </div>
    </div>
  );
}