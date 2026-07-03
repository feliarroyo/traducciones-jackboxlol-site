"use client";

import React, { useState } from "react";
import DownloadButton from "../components/DownloadButton";
import { WindowsIcon, MacIcon, LinuxIcon, SwitchIcon, EpicIcon, MicrosoftIcon } from "../components/icons/PlatformIcons";
import { DOWNLOADS_REGISTRY } from "../data/downloadRegistry";


export default function DownloadsPage() {
    // 2. TOGGLE FILTER STATES
    const [platformFilter, setPlatformFilter] = useState("win-linux"); // win-linux, mac, switch
    const [storeFilter, setStoreFilter] = useState("default");       // default, epic, microsoft, nintendo
    const [langFilter, setLangFilter] = useState("latam");       // latam, spain

    return (
        <div className="space-y-8 py-6">

            {/* HEADER CODES */}
            <div className="space-y-2">
                <h1 className="text-3xl font-black text-amber-400">Parches Disponibles</h1>
                <p className="text-sm text-slate-400">Filtra según tu plataforma, tienda de compra y localización preferida.</p>
            </div>

            {/* THREE INTERACTIVE TOGGLE BARS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80 text-xs font-bold">

                {/* A. PLATFORM TOGGLE */}
                <div className="space-y-2">
                    <label className="text-amber-500 block text-center">Sistema Operativo</label>
                    <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                        {["win-linux", "mac", "switch"].map((p) => (
                            <button key={p} onClick={() => setPlatformFilter(p)} className={`flex-1 py-1.5 rounded-lg capitalize transition-all ${platformFilter === p ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}>
                                {p === "win-linux" ? "Win/Linux" : p}
                            </button>
                        ))}
                    </div>
                </div>

                {/* B. STOREFRONT TOGGLE */}
                {/* If platform is switch, we dim out the buttons and prevent clicking */}
                <div className="space-y-2">
                    <label className="text-amber-500 block text-center">Tienda de compra</label>
                    <div className={`flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 transition-all ${platformFilter === "switch" ? "opacity-40 pointer-events-none" : ""}`}>
                        {platformFilter === "switch" ? (
                            // Hardcoded presentation when Switch is active
                            <button className="flex-1 py-1.5 rounded-lg bg-slate-800 text-amber-500 cursor-not-allowed">
                                Nintendo eShop
                            </button>
                        ) : (
                            // Normal options for PC / Mac
                            ["default", "epic", "microsoft"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setStoreFilter(s)}
                                    className={`flex-1 py-1.5 rounded-lg capitalize transition-all ${storeFilter === s ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}
                                >
                                    {s === "default" ? "Steam" : s === "epic" ? "Epic" : "MS Store"}
                                </button>
                            ))
                        )}
                    </div>
                </div>

                {/* C. LANGUAGE REGION TOGGLE */}
                <div className="space-y-2">
                    <label className="text-amber-500 block text-center">¿Usar parche de España si hubiera uno?</label>
                    <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
                        {[
                            { id: "latam", label: "No" },
                            { id: "spain", label: "Sí" }
                        ].map((l) => (
                            <button key={l.id} onClick={() => setLangFilter(l.id)} className={`flex-1 py-1.5 rounded-lg transition-all ${langFilter === l.id ? "bg-amber-500 text-slate-950" : "text-slate-400 hover:text-slate-200"}`}>
                                {l.label}
                            </button>
                        ))}
                    </div>
                </div>

            </div>

            {/* DATA GRID DRAWER ELEMENT */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {DOWNLOADS_REGISTRY.map((game) => {
                    // Determine the active storefront parameter to match against
                    const targetStoreToMatch = platformFilter === "switch" ? "nintendo" : storeFilter;

                    // Filter targets based on the user's active selections
                    const environmentMatches = game.targets.filter((t) =>
                        t.platforms.includes(platformFilter) && t.stores.includes(targetStoreToMatch)
                    );

                    // See if has spain patches for this game, and if so, use them. Otherwise, fallback to LatAm.
                    let matchingTargets = [];
                    if (langFilter === "spain") {

                        const spainTargets = environmentMatches.filter(t => t.lang === "spain");

                        if (spainTargets.length > 0) {
                            matchingTargets = spainTargets;
                        } else {
                            // FALLBACK: If no Spain files exist, display Latam version instead
                            matchingTargets = environmentMatches.filter(t => t.lang === "latam");
                        }
                    } else {
                        // Display Latam version
                        matchingTargets = environmentMatches.filter(t => t.lang === "latam");
                    }

                    // If no patches are available for this specific selection, hide the game card
                    if (matchingTargets.length === 0) return null;

                    return (
                        <div key={game.id} className="bg-slate-950/20 border border-slate-800/60 p-5 rounded-2xl flex flex-col justify-between gap-4">
                            <div>
                                <h3 className="text-lg font-bold text-slate-200">{game.title}</h3>
                            </div>

                            {/* Dynamic Square Button Row outputs matching configurations */}
                            <div className="flex flex-wrap gap-3">
                                {matchingTargets.map((target, idx) => (
                                    <DownloadButton
                                        key={idx}
                                        href={target.link}
                                        label={target.name}
                                        icon={
                                            platformFilter === "switch" ? <span className="text-xl"><SwitchIcon /></span> :
                                                platformFilter === "mac" ? <MacIcon className="w-full h-full" /> :
                                                storeFilter === "microsoft" ? <MicrosoftIcon className="w-full h-full" /> :
                                                storeFilter === "epic" ? <EpicIcon className="w-full h-full" /> :
                                                    <WindowsIcon className="w-full h-full" />
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
    );
}