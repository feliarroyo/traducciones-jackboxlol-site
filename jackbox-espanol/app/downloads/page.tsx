"use client";

import { useState } from "react";
import { DOWNLOADS_REGISTRY, ENG_DOWNLOADS_REGISTRY, EXTRA_DOWNLOADS_REGISTRY } from "../data/downloadRegistry";
import GameDownloadButton from "../components/GameDownloadButton";
import JackboxUtilityCard from "../components/JackboxUtilityCard";
import { motion, AnimatePresence } from "framer-motion";


export default function DownloadsPage() {
    // TOGGLE FILTER STATES
    const [platformFilter, setPlatformFilter] = useState("win-linux"); // win-linux, mac, switch
    const [storeFilter, setStoreFilter] = useState("default");       // default, epic, microsoft, nintendo
    const [langFilter, setLangFilter] = useState("latam");       // latam, spain

    const [showInstructions, setShowInstructions] = useState(false);

    // DYNAMIC TEXT GENERATOR BASED ON FILTERS
    const getPlatformName = () => {
        if (platformFilter === "switch") return "Nintendo Switch";
        if (storeFilter === "microsoft") return "Microsoft Store";
        if (platformFilter === "mac") return "Mac";
        return storeFilter === "epic" ? "EGS en Windows/Linux" : "Steam en Windows/Linux";
    };

    // STEP-BY-STEP INSTRUCTIONS DATA MATRIX
    const getInstructions = () => {
        if (platformFilter === "switch") {
            return [
                "Las traducciones pueden instalarse en una consola hackeada/modificada que posea Atmosphere. Debes usar la versión original de los juegos, y no la que posea el parche del online de Nintendo. Los parches se aplican por medio de LayeredFS. Se debe realizar lo siguiente:",
                "1. Instala el juego.",
                <>2. Descarga <a href="https://www.mediafire.com/file/muy73uck35g57gb/Jackbox+1-8+Online+Patch+Switch.zip/file" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">estos archivos</a>.</>,
                <>3. Extrae la carpeta correspondiente al id del juego (puedes encontrar el ID necesario en esta página) en \"atmosphere / contents\" de tu tarjeta SD.</>,
                "4. Descarga el parche de traducción del juego.",
                "5. Extrae el contenido del parche en \"atmosphere / contents / (id del juego)/romfs\" de tu tarjeta SD.",
                <>Nota: hay bugs menores en esta plataforma que no interfieren con la experiencia y se listan en la <a href="./help" target="_self" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">sección de Ayuda</a>.</>
            ];
        }
        if (storeFilter === "microsoft") {
            return [
                <>Una vez descargado el parche, extrae el contenido del zip en la carpeta <b>"Content"</b>, reemplazando todo lo necesario.</>,
                "En Microsoft Store, el directorio por defecto es \"C:\\XboxGames\\[Carpeta del juego]\"."
            ];
        }
        if (platformFilter === "mac") {
            return [
                "Hay dos métodos para instalar las traducciones en Mac, explicados en los siguientes videotutoriales:",
                <><a href="https://youtu.be/RTb0_aFtLLY" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Método 1 (recomendado)</a> | <a href="https://drive.google.com/file/d/1cqZ2mi9CKJwuc3pitR59f3jDASlKAvRF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">Método 2 (para usuarios avanzados)</a></>,
                <>Una explicación textual más detallada de los métodos puede encontrarse en la <a href="./help" target="_self" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">sección de Ayuda</a>.
                </>
            ];
        }

        if (storeFilter === "epic") {
            return [
                "Una vez descargado el parche, extrae el contenido del zip en la carpeta de instalación del juego, reemplazando todo lo necesario.",
                "Para ir al directorio de instalación del juego, haz clic en \"...\" del juego en tu biblioteca de Epic Games Store -> Gestionar -> Clickea en el ícono de carpeta de la sección instalación."
            ];
        }

        // Default (Steam)
        return [
            "Una vez descargado el parche, extrae el contenido del zip en la carpeta de instalación del juego, reemplazando todo lo necesario.",
            "Para ir al directorio de instalación del juego, haz clic derecho en el juego de tu biblioteca en Steam -> Administrar -> Explorar archivos locales."
        ];
    };

    const currentInstructions = getInstructions();
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
                <div className="w-full max-w-2xl mx-auto mb-4 flex flex-col items-center">

                    {/* INSTRUCTION BUTTON */}
                    <motion.button
                        onClick={() => setShowInstructions(!showInstructions)}
                        initial={false}
                        animate={{ width: showInstructions ? "100%" : "fit-content" }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut",
                            delay: showInstructions ? 0 : 0.1
                        }}
                        className={`relative overflow-hidden py-2.5 px-6 font-bold rounded-xl border transition-colors flex items-center justify-center gap-3 text-xs uppercase tracking-wider whitespace-nowrap z-10 ${showInstructions
                            ? "bg-amber-500 text-slate-950 border-amber-400"
                            : "bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-850"
                            }`}
                    >
                        <motion.svg
                            animate={{ rotate: showInstructions ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="w-4 h-4 fill-current shrink-0"
                            viewBox="0 0 20 20"
                        >
                            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </motion.svg>
                        <div className="flex items-center gap-1 flex-col">
                            <p>Instrucciones de instalación</p>
                            <p className="opacity-80">({getPlatformName()})</p>
                        </div>
                    </motion.button>

                    {/* INSTRUCTION TEXT */}
                    <AnimatePresence>
                        {showInstructions && (
                            <motion.div
                                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                                animate={{
                                    height: "auto",
                                    opacity: 1,
                                    marginTop: -10,
                                    transition: {
                                        duration: 0.3,
                                        ease: "easeOut",
                                        delay: 0.3
                                    }
                                }}
                                exit={{
                                    height: 0,
                                    opacity: 0,
                                    marginTop: 0,
                                    transition: {
                                        duration: 0.2,
                                        ease: "easeIn",
                                        delay: 0
                                    }
                                }}
                                className="w-full overflow-hidden bg-slate-950/80 border border-amber-500/30 rounded-b-xl text-center text-sm text-slate-300 shadow-xl"
                            >
                                <div className="p-5 space-y-3">
                                    <ol className="list-inside space-y-2 leading-relaxed text-xs">
                                        {currentInstructions.map((step, index) => (
                                            <li key={index} className="pl-1">
                                                <span className="text-slate-300">{step}</span>
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>

                {/* THREE INTERACTIVE TOGGLE BARS */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-950/40 p-4 rounded-2xl border border-slate-800/80 text-xs font-bold">

                    {/* PLATFORM TOGGLE */}
                    <div className="space-y-2">
                        <label className="text-amber-500 block text-center">Plataforma</label>
                        <div className="flex gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800 relative">
                            {["win-linux", "mac", "switch"].map((p) => (
                                <button
                                    key={p}
                                    onClick={() => setPlatformFilter(p)}
                                    className={`relative flex-1 py-1.5 rounded-lg capitalize transition-colors duration-200 z-10 ${platformFilter === p ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-slate-200"}`}
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
                                        className={`relative flex-1 py-1.5 rounded-lg capitalize transition-colors duration-200 z-10 ${storeFilter === s ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-slate-200"}`}
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
                                    className={`relative flex-1 py-1.5 rounded-lg transition-colors duration-200 z-10 ${langFilter === l.id ? "text-slate-950 font-extrabold" : "text-slate-400 hover:text-slate-200"}`}
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

                {/* DATA GRID DRAWER ELEMENT */}
                <div className="flex flex-row flex-wrap gap-4 justify-center items-center mt-4">
                    {(storeFilter === "microsoft" && platformFilter === "mac") && (
                        <p>Microsoft Store no está disponible en Mac <img src="/images/crazy.webp" alt="Burbujas de Job Job con cara chistosa" className="inline align-middle h-8 w-8" /></p>
                    )}
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
                        if (matchingTargets.length === 0) return

                        return matchingTargets.map((target, idx) => (
                            <GameDownloadButton
                                key={`${game.id}-${idx}`}
                                href={target.link}
                                // Pass the game or pack image asset down instead of text labels
                                imageSrc={game.imageSrc || "/images/covers/default-pack.webp"}
                                altText={`Descargar parche para ${game.title}`}
                                isSpain={target.lang === "spain"}
                                noteTitle={game.title}
                                notes={target.notes}
                            />
                        ));
                    })}
                </div>
            </section>
            {/* OTHER DOWNLOADS */}
            <section className="mt-8">
                <div className="space-y-2">
                    <h2 className="text-center text-3xl font-black text-amber-400">Descargas adicionales</h2>
                    <p className="text-center text-sm text-slate-400">El contenido de estas descargas debe instalarse <b>luego de instalar o actualizar los parches de traducción correspondientes</b>.
                    </p>
                </div>
            </section>
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
        </div>

    );
}