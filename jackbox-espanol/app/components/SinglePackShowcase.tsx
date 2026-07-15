import React from "react";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";

interface SinglePackShowcaseProps {
    gameLogos: string[];
}

export default function SinglePackShowcase({
    gameLogos
}: SinglePackShowcaseProps) {
    return (
        <div className="flex-initial min-w-50 bg-slate-950/30 border border-slate-800/60 rounded-3xl p-6 flex items-center gap-4 md:backdrop-blur-sm transition-all duration-300 hover:border-slate-700/60">
            {/* INNER GAME LOGOS ROW */}
            <div className="flex flex-row items-center justify-center gap-6 w-full py-2">
                {gameLogos.map((game, index) => (
                    <div
                        key={index}
                        className="w-28 h-20 relative transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                    >
                        <Image src={GAME_ASSETS[game]?.src} alt={GAME_ASSETS[game]?.alt} fill sizes="112px" className="object-contain" draggable={false}/>
                    </div>
                ))}
            </div>
        </div>
    )
}