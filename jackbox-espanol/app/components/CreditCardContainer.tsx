import React from "react";
import CreditCard from "./CreditCard";
import Image from "next/image";
import CreditCardGame from "./CreditCardGame";

interface GamePackItem {
  packId: string;
  isText?: boolean;
  games: {
    id: string;
    mainContributors: string[];
    isAdaptation?: boolean;
    roles: {
      username: string;
      roles: string[];
    }[];
  }[];
}
interface CreditCardContainerProps {
  title: string;
  subtitle?: string;
  data: GamePackItem[];
  titleClassName?: string; // Allows fine-tuning headers hierarchy if needed
}

export default function CreditCardContainer({
  title,
  subtitle,
  data,
  titleClassName = "text-center text-2xl font-extrabold text-amber-400/90"
}: CreditCardContainerProps) {
  return (
    <section className="space-y-6">
      <div>
        <h2 className={titleClassName}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-center mt-2 text-sm text-slate-400 max-w-xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
      <div className="flex flex-col flex-wrap gap-4 w-full mx-auto">
        {data.map((pack, idx) => (
          <div key={idx} className="flex flex-col gap-4 w-full">
            {pack.isText && (
              <h3 className="text-xl font-bold text-slate-400 pb-2 mb-2">
                {pack.packId}
              </h3>
            )}
            <div className="flex flex-row flex-wrap gap-4 justify-center w-full mx-auto">
              {!pack.isText && (
                <div className="pb-4">
                  {<Image src={`/images/buttons/${pack.packId}.webp`} alt={pack.packId} width={96} height={96} className="group relative bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-2xl border border-slate-700/80 shadow-lg transition-all hover:scale-105 active:scale-95 flex flex-col items-start justify-center gap-2 w-18 h-18 text-center" />}
                </div>)
              }
              {pack.games.map((game) =>
                <CreditCardGame key={game.id} id={game.id} isAdaptation={game.isAdaptation} mainContributors={game.mainContributors} roles={game.roles} />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}