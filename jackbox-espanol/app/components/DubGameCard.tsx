// src/components/DubGameCard.tsx
import React from "react";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";
import { DubCreditItem } from "../data/dubCreditsRegistry";

interface DubGameCardProps {
    game: DubCreditItem;
}

export default function DubGameCard({ game }: DubGameCardProps) {
    const asset = GAME_ASSETS[game.id as string] || { src: "/images/placeholder.png", alt: game.id };

    return (
        <div className="flex-initial min-w-37.5 max-w-xs bg-slate-950/20 border border-slate-800/40 rounded-2xl p-4 flex flex-col justify-start gap-3 hover:border-slate-700/40 transition-all duration-300">

            {/* Game Logo Header */}
            <div className="w-full h-8 relative mt-1 border-b border-slate-800/40 pb-2 mb-1">
                <Image src={asset.src} alt={asset.alt} fill className="object-contain" />
            </div>

            {/* Game Details if available */}
            {game.details && (
                <p className="text-[9px] text-center text-slate-500 font-medium tracking-wider -mt-1 mb-1">
                    {game.details}
                </p>
            )}
            {/* Embedded Compact Roster View */}
            <div className="space-y-2 w-full">
                {game.roles.map((actor, idx) => (
                    <div key={idx} className="text-center text-[11px] leading-snug">
                        <span className="text-slate-200 block font-bold">
                            {actor.username}:
                        </span>
                        <span className="text-slate-400 italic text-[10px]">
                            {actor.roles.join(", ")}
                        </span>
                    </div>
                ))}
            </div>

            {/* Optional Quick Link Song Footer helper track */}
            {game.songUrl && (
                <a
                    href={game.songUrl} target="_blank" rel="noopener noreferrer"
                    className="text-[10px] py-1 font-bold bg-slate-900 border border-slate-800 hover:border-amber-500/30 hover:bg-amber-950/20 text-slate-300 hover:text-amber-400 rounded-lg transition-all whitespace-nowrap"
                >
                    🎵 Escuchar Canción
                </a>
            )}
        </div>
    );
}