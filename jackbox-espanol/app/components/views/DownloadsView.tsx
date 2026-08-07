"use client";

import { useState } from "react";
import { DOWNLOADS_REGISTRY, ENG_DOWNLOADS_REGISTRY, EXTRA_DOWNLOADS_REGISTRY } from "../../data/downloadRegistry";
import GameDownloadButton from "../GameDownloadButton";
import JackboxUtilityCard from "../JackboxUtilityCard";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import InstallationInstructions from "../InstallationInstructions";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//     title: "Descargas",
//     description: "Descarga el parcheador, los parches de traducción y otros recursos útiles.",
// };

export default function DownloadsPage() {
    // TOGGLE FILTER STATES
    const [platformFilter, setPlatformFilter] = useState("win-linux"); // win-linux, mac, switch
    const [storeFilter, setStoreFilter] = useState("default");       // default, epic, microsoft, nintendo
    const [langFilter, setLangFilter] = useState("latam");       // latam, spain


    return (
        <div className="space-y-8 py-6">
            <div className="space-y-2">
                <h1 className="text-4xl text-center font-black text-amber-400 tracking-tight">
                    Descargas
                </h1>
                <p className="text-sm text-center text-slate-400">
                    Encuentra enlaces de descarga para el parcheador, descargas individuales para cada parche, y más.
                </p>
            </div>
            {/* JACKBOX UTILITY CARD */}
            <section className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-8 md:p-12 shadow-xl">
                <JackboxUtilityCard footerText="Recomendamos el uso de Jackbox Utility para la instalación de las traducciones, pero se ofrecen parches de instalación manual debajo como alternativa (necesarios para Nintendo Switch)." />
            </section>
            {/* HEADER CODES */}
            <section>
                <div className="space-y-2 mb-4">
                    <h2 className="text-3xl text-center font-black text-amber-400">Descarga manual</h2>
                    <p className="text-sm text-center text-slate-400">Filtra según tu plataforma, tienda de compra y localización preferida.</p>
                </div>

                {/* DYNAMIC INSTRUCTION ACCORDION AREA */}
                <InstallationInstructions platformFilter={platformFilter} storeFilter={storeFilter} />

                {/* THREE INTERACTIVE TOGGLE BARS */}
                <LayoutGroup><div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80 text-xs font-bold">

                    {/* PLATFORM TOGGLE */}
                    <div className="space-y-2">
                        <label className="text-amber-500 block text-center">Plataforma</label>
                        <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 relative">
                            {["win-linux", "mac", "switch"].map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPlatformFilter(p)}
                                    className={`relative flex-1 py-1.5 rounded-lg capitalize transition-colors duration-200 z-0 ${platformFilter === p ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-slate-200"}`}
                                >
                                    {p === "win-linux" ? "Win/Linux" : p}

                                    {/* Animation for Platform */}
                                    {platformFilter === p && (
                                        <motion.div
                                            layoutId="activePlatform"
                                            className="absolute inset-0 bg-amber-500 rounded-lg -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* STOREFRONT TOGGLE */}
                    <div className="space-y-2">
                        <label className="text-amber-500 block text-center">Versión</label>
                        <div className={`flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 transition-all duration-300 relative ${platformFilter === "switch" ? "opacity-40 pointer-events-none" : ""}`}>
                            {platformFilter === "switch" ? (
                                // No interaction/animations on Switch
                                <button className="relative flex-1 py-1.5 rounded-lg bg-slate-800 text-amber-500 cursor-not-allowed z-10">
                                    Nintendo eShop
                                </button>
                            ) : (
                                ["default", "epic", "microsoft"].map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setStoreFilter(s)}
                                        className={`relative flex-1 py-1.5 rounded-lg capitalize transition-colors duration-200 z-0 ${storeFilter === s ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-slate-200"}`}
                                    >
                                        {s === "default" ? "Steam" : s === "epic" ? "Epic" : "MS Store"}

                                        {/* Animation for Storefront */}
                                        {storeFilter === s && (
                                            <motion.div
                                                layoutId="activeStore"
                                                className="absolute inset-0 bg-amber-500 rounded-lg -z-10"
                                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                            />
                                        )}
                                    </button>
                                ))
                            )}
                        </div>
                    </div>

                    {/* C. LANGUAGE REGION TOGGLE */}
                    <div className="space-y-2">
                        <label className="text-amber-500 block text-center">¿Usar parche de España si hubiera uno?</label>
                        <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 relative">
                            {[
                                { id: "latam", label: "No" },
                                { id: "spain", label: "Sí" }
                            ].map((l) => (
                                <button
                                    key={l.id}
                                    onClick={() => setLangFilter(l.id)}
                                    className={`relative flex-1 py-1.5 rounded-lg transition-colors duration-200 z-0 ${langFilter === l.id ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-slate-200"}`}
                                >
                                    {l.label}
                                    {/* Animation for Language */}
                                    {langFilter === l.id && (
                                        <motion.div
                                            layoutId="activeLang"
                                            className="absolute inset-0 bg-amber-500 rounded-lg -z-10"
                                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
                </LayoutGroup>

                {/* DATA GRID DRAWER ELEMENT */}
                <motion.div layout className="flex flex-row flex-wrap gap-4 justify-center items-center mt-4">
                    {(storeFilter === "microsoft" && platformFilter === "mac") && (
                        <motion.p
                            layout="position"
                            key="mac-ms-store-error"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            style={{ willChange: "opacity, transform" }}
                            className="w-full py-8 text-center text-slate-300 flex justify-center items-center gap-2"
                        >
                            Microsoft Store no está disponible en Mac <img src="/images/crazy.webp" alt="Burbujas de Bajo Trabajo con cara chistosa" fetchPriority="high" className="inline align-middle h-8 w-8" />
                        </motion.p>
                    )}

                    <AnimatePresence mode="popLayout">
                        {DOWNLOADS_REGISTRY.flatMap((game) => {
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
                                    // if no Spain files exist, display Latam version instead
                                    matchingTargets = environmentMatches.filter(t => t.lang === "latam");
                                }
                            } else {
                                // Display Latam version
                                matchingTargets = environmentMatches.filter(t => t.lang === "latam");
                            }

                            // Return wrapped motion elements to create the flat array
                            return matchingTargets.map((target) => {
                                // Key based on the gameID only
                                const uniqueKey = game.id;

                                return (
                                    <motion.div
                                        layout="position"
                                        key={uniqueKey}

                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.9 }}

                                        transition={{
                                            duration: 0.25,
                                            ease: "easeInOut"
                                        }}

                                        style={{ willChange: "opacity, transform" }}
                                    >
                                        <GameDownloadButton
                                            href={target.link}
                                            imageSrc={game.imageSrc || "/images/covers/default-pack.webp"}
                                            altText={`Descargar parche para ${game.title}`}
                                            isAdaptation={target.lang === "latam" && game.hasAdaptation}
                                            isSpain={target.lang === "spain"}
                                            noteTitle={game.title}
                                            notes={target.notes}
                                            version_file={target.version_file}
                                            version_property={target.version_property}
                                        />
                                    </motion.div>
                                );
                            });
                        })}
                    </AnimatePresence>
                </motion.div>
            </section >
            {/* OTHER DOWNLOADS */}
            < section className="mt-8" >
                <div className="space-y-2">
                    <h2 className="text-center text-3xl font-black text-amber-400">Descargas adicionales</h2>
                    <p className="text-center text-sm text-slate-400">El contenido de estas descargas debe instalarse <b>luego de instalar o actualizar los parches de traducción correspondientes</b>.
                    </p>
                </div>
            </section >
            <section className="mt-8">
                <div className="space-y-2">
                    <h3 className="text-center text-2xl font-black text-amber-400">Voces en inglés</h3>
                    <p className="text-center text-sm text-slate-400">Estos archivos restauran el contenido relacionado a doblajes no oficiales en parches previamente instalados, tanto en voces y canciones como textualmente.</p>
                </div>
                <div className="flex flex-row flex-wrap gap-4 justify-center items-center mt-4">
                    {ENG_DOWNLOADS_REGISTRY.map((game) => {
                        const games = game.targets;

                        return games.map((target, idx) => (
                            <GameDownloadButton
                                key={`${game.id}-${idx}`}
                                href={target.link}
                                imageSrc={game.imageSrc || "/images/covers/default-pack.webp"}
                                altText={`Descargar parche para ${game.title}`}
                                noteTitle={target.name}
                                notes={target.notes}
                            />
                        ));
                    })}
                </div>
            </section>
            <section className="mt-8 mb-8">
                <div className="space-y-2">
                    <h2 className="text-center text-2xl font-black text-amber-400">Extras</h2>
                    <p className="text-center text-sm text-slate-400">Se listan descargas que involucran contenido extra a lo que son los juegos en sí; o contenido obsoleto, como traducciones de títulos o doblajes retirados.</p>
                </div>
                <div className="flex flex-row flex-wrap gap-4 justify-center items-center mt-4">
                    {EXTRA_DOWNLOADS_REGISTRY.map((game) => {
                        const games = game.targets;

                        return games.map((target, idx) => (
                            <GameDownloadButton
                                key={`${game.id}-${idx}`}
                                href={target.link}
                                imageSrc={game.imageSrc || "/images/covers/default-pack.webp"}
                                altText={`Descargar parche para ${game.title}`}
                                noteTitle={target.name}
                                notes={target.notes}
                            />
                        ));
                    })}
                </div>
            </section>
        </div >
    );
}