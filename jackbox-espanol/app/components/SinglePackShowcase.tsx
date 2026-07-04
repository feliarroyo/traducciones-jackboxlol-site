import React from "react";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";

interface SinglePackShowcaseProps {
    gameLogos: string[];
}

export default function SinglePackShowcase({
    gameLogos
}: SinglePackShowcaseProps) {
    const gameCount = gameLogos.length;
    return (
        <div
            className="bg-slate-950/30 border border-slate-800/60 rounded-3xl p-6 flex flex-col items-center gap-4 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/60"
            style={{
                // Dynamic Flex Basis: Allows the card to take up proportional space based on game count
                flexGrow: gameCount,
                flexShrink: 0,
                flexBasis: `${(gameCount / 3) * 100}%`,
                minWidth: "280px" // Safeguard so it looks clean on mobile screens
            }}
        >
            {/* 2. INNER GAME LOGOS ROW */}
            {/* If it has 1 game, it's centered. If it has more, they line up horizontally inside */}
            <div className="flex flex-row items-center justify-center gap-6 w-full py-2">
                {gameLogos.map((game, index) => (
                    <div
                        key={index}
                        className="w-28 h-20 relative transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                    >
                        <Image src={GAME_ASSETS[game]?.src} alt={GAME_ASSETS[game]?.alt} fill className="object-contain" />
                    </div>
                ))}
            </div>

        </div>
    )
}