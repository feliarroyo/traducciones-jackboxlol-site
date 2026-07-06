import React from "react";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";

interface PackShowcaseProps {
    packLogoSrc: string;
    packLogoAlt: string;
    gameLogos: string[];
}

export default function PackShowcase({
    packLogoSrc,
    packLogoAlt,
    gameLogos
}: PackShowcaseProps) {
    return (
        <div
            className="flex-initial min-w-50 bg-slate-950/30 border border-slate-800/60 rounded-3xl p-6 flex flex-col items-start gap-4 backdrop-blur-sm transition-all duration-300 hover:border-slate-700/60"
        >

            {/* PACK ICON */}
            <div className="w-12 h-12 relative opacity-60 hover:opacity-100 transition-opacity shrink-0">
                <Image src={packLogoSrc} alt={packLogoAlt} fill className="object-contain rounded-2xl draggable={false}" />
            </div>

            <div className="w-full border-t border-slate-800/40" />

            {/* INNER GAME LOGOS ROW */}
            <div className="flex flex-row items-center justify-center gap-6 w-full py-2">
                {gameLogos.map((game, index) => (
                    <div
                        key={index}
                        className="w-28 h-20 relative transition-transform duration-300 hover:scale-105 filter drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]"
                    >
                        <Image src={GAME_ASSETS[game]?.src} alt={GAME_ASSETS[game]?.alt} fill className="object-contain" draggable={false}/>
                    </div>
                ))}
            </div>

        </div>
    );
}