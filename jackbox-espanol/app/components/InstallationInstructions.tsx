import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface InstructionsProps {
    platformFilter: string;
    storeFilter: string;
}

export default function InstallationInstructions({ platformFilter,
    storeFilter }: InstructionsProps) {
    // DYNAMIC TEXT GENERATOR BASED ON FILTERS
    const [showInstructions, setShowInstructions] = useState(false);
    const animationOpen = 0.25;
    
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
                <>Nota: hay bugs menores en esta plataforma que no interfieren con la experiencia y se listan en la <Link href="./help" target="_self" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">sección de Ayuda</Link>.</>
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
                <>Una explicación textual más detallada de los métodos puede encontrarse en la <Link href="./help" target="_self" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-semibold">sección de Ayuda</Link>.
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
        <div className="w-full max-w-2xl mx-auto mb-4 flex flex-col items-center">

            {/* INSTRUCTION BUTTON */}
            <motion.button
                onClick={() => setShowInstructions(!showInstructions)}
                initial={false}
                animate={{ width: showInstructions ? "100%" : "fit-content" }}
                transition={{
                    duration: 0.15,
                    ease: "easeInOut",
                    delay: showInstructions ? 0 : animationOpen
                }}
                className={`relative overflow-hidden py-2.5 px-6 font-bold rounded-xl border transition-colors flex items-center justify-center gap-3 text-xs uppercase tracking-wider whitespace-nowrap z-10 ${showInstructions
                    ? "bg-amber-500 text-slate-950 border-amber-400"
                    : "bg-slate-900 text-slate-200 border-slate-800 hover:border-slate-700 hover:bg-slate-850"
                    }`}
            >
                <motion.svg
                    animate={{ rotate: showInstructions ? 180 : 0 }}
                    transition={{ duration: animationOpen }}
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
                                duration: animationOpen,
                                ease: "easeOut",
                                delay: animationOpen / 3
                            }
                        }}
                        exit={{
                            height: 0,
                            opacity: 0,
                            marginTop: 0,
                            transition: {
                                duration: animationOpen,
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
    );
}