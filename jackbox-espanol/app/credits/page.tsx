"use client";
import { useState } from "react";
import { CREDITS_REGISTRY_ADMINS, CREDITS_REGISTRY_EXTRAS, CREDITS_REGISTRY_GAMES } from "../data/creditsRegistry";
import { DUB_CREDITS_REGISTRY } from "../data/dubCreditsRegistry";
import CreditCardContainer from "../components/CreditCardContainer";
import CreditCardAdminContainer from "../components/CreditCardAdminContainer";
import DubGameCardXL from "../components/DubGameCardXL";
import DubGameCard from "../components/DubGameCard";
import CreditCardList from "../components/CreditCardList";
import CreditCardGame from "../components/CreditCardGame";
import CreditCardText from "../components/CreditCardText";

type CreditView = "translations" | "dubs";

export default function CreditsPage() {
  const [activeView, setActiveView] = useState<CreditView>("translations");
  const admins = CREDITS_REGISTRY_ADMINS.filter(c => c.category === "administrator");
  const techContributors = CREDITS_REGISTRY_ADMINS.filter(c => c.category === "techContributor");
  const minorContributors = CREDITS_REGISTRY_ADMINS.filter(c => c.category === "minorContributor");

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
            <CreditCardAdminContainer
              title="Administradores"
              subtitle="Los administradores realizaron una cantidad considerable de contribuciones al proyecto."
              data={admins}
            />
            <CreditCardContainer
              title="Créditos por juego"
              subtitle="Se listan aquí los créditos de cada juego, en detalle."
              data={CREDITS_REGISTRY_GAMES}
            />
            <section className="space-y-6">
              <div>
                <h2 className="text-center text-2xl font-extrabold text-amber-400/90">
                  Otros créditos
                </h2>

                <p className="text-center mt-2 text-sm text-slate-400 max-w-xl mx-auto">
                  Aquí se listan aportes que van más allá de lo que fue el proceso de traducción de un juego en particular.
                </p>

              </div>
              <div className="flex flex-row gap-6 justify-center items-center w-full mx-auto">
                <CreditCardText extras={CREDITS_REGISTRY_EXTRAS} />
                <CreditCardList
                  title="Donaciones para mantener el dominio"
                  users={["Akira896", "Hanzel Translations", "Eleiber", "alexbg724", "MakaayX", "david.az.4", "Tonycam21", "Erickelnd", "Erick López", "Sergio Junco", "Daniel Sánchez", "Juan Herranz", "Mario Edher", "Alba Franganillo", "Erick Guerrero"]
                  }
                />
              </div>
            </section>





          </>
        ) : (
          <>
            {/* 🎮 NEW GAME-CENTRIC GRID FOR MAIN DUBS */}
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
            <section className="space-y-6">
              <h2 className="text-2xl font-extrabold text-slate-200 border-b border-slate-800 pb-2">
                Próximamente
              </h2>
              <div className="flex flex-row flex-wrap gap-6 justify-center items-center w-full mx-auto">
                {DUB_CREDITS_REGISTRY.filter(g => g.category === "comingSoon").map((game) => (
                  <DubGameCardXL key={game.id} game={game} />
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