// src/components/DubGameCardXL.tsx
"use client";

import Image from "next/image";
import { GAME_ASSETS } from "../../data/gameRegistry";
import { DubCreditItem } from "../../data/dubCreditsRegistry";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../hooks/useModal";
import { BaseCard } from "../ui/BaseCard";
import { CreditModal } from "../ui/CreditModal";

interface DubGameCardXLProps {
    game: DubCreditItem;
}

export default function DubGameCardXL({ game }: DubGameCardXLProps) {
    const { isOpen, setIsOpen, mounted } = useModal();
    const asset = GAME_ASSETS[game.id as string] || { src: "/images/placeholder.png", alt: game.id };

    return (
        <>
            {/* 🟦 MAIN GAME SQUARE CARD */}
            <BaseCard className="shrink-0 aspect-square py-4">
                {/* Game Logo Container */}
                <div className="w-full">
                    <div className="w-full h-16 relative shrink-0 mt-2 justify-center">
                        <Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 640px) 100vw, 300px" className="object-contain" />
                    </div>
                    {/* Game Details if available */}
                    {game.details && (
                        <p className="text-[10px] text-slate-400/80 font-medium tracking-wide mt-1 px-1">
                            {game.details}
                        </p>
                    )}
                    <span className="text-slate-200 block font-bold text-[10px] my-1 py-1">
                        {game.roles[0].isDuo ? "Voces principales" : "Voz principal"}
                        <div className="text-center text-[11px] leading-snug mt-1 flex flex-col items-center justify-center gap-0.5">
                            {game.roles[0].username instanceof Array ? (
                                game.roles[0].username.map((name, nIdx) => (
                                    <span key={nIdx} className="text-slate-400/80 font-medium tracking-wide block">
                                        {name}
                                    </span>
                                ))
                            ) : (
                                <span className="text-slate-400/80 font-medium tracking-wide block">
                                    {game.roles[0].username}
                                </span>
                            )}
                        </div>

                    </span>
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
                    className="text-[11px] font-bold text-cyan-400 hover:text-cyan-300 hover:underline mb-1 tracking-wide cursor-pointer"
                >
                    Ver créditos de doblaje
                </button>
            </BaseCard>

            {/* 🚀 CAST OVERLAY MODAL LIST WINDOW */}
            {mounted && (
                <CreditModal isOpen={isOpen} onClose={() => setIsOpen(false)}>

                    {/* Modal Header */}
                    <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                        <div className="flex items-center gap-3">
                            <div className="w-20 h-10 relative">
                                <Image src={asset.src} alt={asset.alt} fill sizes="80px" className="object-contain" />
                            </div>
                            <h3 className="text-lg font-black text-amber-400 uppercase tracking-wider pl-2 border-l border-slate-800">
                                Créditos de doblaje
                            </h3>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-colors">✕</button>
                    </div>

                    {/* Loop Over All Contributed Talent/Roles for this specific game */}
                    <div className="text-center space-y-4 divider-y divider-slate-800">
                        {game.roles.map((actor, idx) => (
                            <div key={idx} className="flex flex-col gap-1">
                                <div className="flex items-center justify-center gap-2 flex-wrap">
                                    <span className="font-bold text-slate-100 text-sm">{actor.username instanceof Array ? actor.username.join(" y ") : actor.username}</span>
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
                </CreditModal>
            )}
        </>
    );
}