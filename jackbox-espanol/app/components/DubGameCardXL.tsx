// src/components/DubGameCardXL.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";
import { DubCreditItem } from "../data/dubCreditsRegistry";

interface DubGameCardXLProps {
    game: DubCreditItem;
}

export default function DubGameCardXL({ game }: DubGameCardXLProps) {
    const [isOpen, setIsOpen] = useState(false);
    const asset = GAME_ASSETS[game.id as string] || { src: "/images/placeholder.png", alt: game.id };

    return (
        <>
            {/* 🟦 MAIN GAME SQUARE CARD */}
            <div className="shrink-0 aspect-square bg-slate-950/40 border border-slate-800/80 rounded-3xl p-4 flex flex-col items-center py-4 justify-between text-center backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 group">

                {/* Game Logo Container */}
                <div className="w-full border-b border-slate-500/40 pb-2 mb-2">
                    <div className="w-full h-16 relative shrink-0 mt-2 justify-center">
                        <Image src={asset.src} alt={asset.alt} fill className="object-contain" />
                    </div>
                    {/* Game Details if available */}
                    {game.details && (
                        <p className="text-[10px] text-slate-400/80 font-medium tracking-wide mt-1 px-1">
                            {game.details}
                        </p>
                    )}
                </div>
                {/* Media Control Buttons */}
                {(game.demoUrl || game.songUrl) ? (
                    <div className="flex flex-col gap-1 w-full px-2 mb-2">
                        {game.demoUrl && (
                            <a
                                href={game.demoUrl} target="_blank" rel="noopener noreferrer"
                                className="text-[10px] py-1 px-2 font-bold bg-slate-900 border border-slate-800 hover:border-amber-500/30 hover:bg-amber-950/20 text-slate-300 hover:text-amber-400 rounded-lg transition-all whitespace-nowrap"
                            >
                                Ver muestra de doblaje
                            </a>
                        )}
                        {game.songUrl && (
                            <a
                                href={game.songUrl} target="_blank" rel="noopener noreferrer"
                                className="text-[10px] py-1 font-bold bg-slate-900 border border-slate-800 hover:border-amber-500/30 hover:bg-amber-950/20 text-slate-300 hover:text-amber-400 rounded-lg transition-all whitespace-nowrap"
                            >
                                🎵 Escuchar canción
                            </a>
                        )}
                    </div>
                ) : null}

                {/* Read More Trigger Link Button */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 hover:underline mb-1 tracking-wide"
                >
                    Ver créditos de doblaje
                </button>
            </div>

            {/* 🚀 CAST OVERLAY MODAL LIST WINDOW */}
            {isOpen && (
                <div className="text-center fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" onClick={() => setIsOpen(false)}>
                    <div className="bg-slate-900 border border-slate-800 w-full max-w-lg max-h-[75vh] overflow-y-auto rounded-3xl p-6 space-y-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>

                        {/* Modal Header */}
                        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                            <div className="flex items-center gap-3">
                                <div className="w-20 h-10 relative">
                                    <Image src={asset.src} alt={asset.alt} fill className="object-contain" />
                                </div>
                                <h3 className="text-lg font-black text-amber-400 uppercase tracking-wider pl-2 border-l border-slate-800">
                                    Créditos de doblaje
                                </h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-colors">✕</button>
                        </div>

                        {/* Loop Over All Contributed Talent/Roles for this specific game */}
                        <div className="space-y-4 divider-y divider-slate-800">
                            {game.roles.map((actor, idx) => (
                                <div key={idx} className="flex flex-col gap-1">
                                    <div className="flex items-center justify-center gap-2 flex-wrap">
                                        <span className="font-bold text-slate-100 text-sm">{actor.username}</span>
                                        {actor.tags && actor.tags.map((t, tIdx) => (
                                            <span key={tIdx} className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 uppercase">{t}</span>
                                        ))}
                                    </div>
                                    {actor.roles.map((role, rIdx) => (
                                        <p key={rIdx} className="text-xs text-slate-400 italic leading-relaxed">
                                            {role}
                                        </p>
                                    ))}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            )}
        </>
    );
}