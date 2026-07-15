import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";
import { DubCreditItem } from "../data/dubCreditsRegistry";

interface DubGameCardProps {
    game: DubCreditItem;
}

export default function DubGameCard({ game }: DubGameCardProps) {
    const asset = GAME_ASSETS[game.id as string] || { src: "/images/placeholder.png", alt: game.id };

    return (
        <div className="w-[calc(50%-12px)] sm:w-44 md:w-48 shrink-0 aspect-square bg-slate-950/40 border border-slate-800/80 rounded-3xl p-4 flex flex-col items-center justify-evenly text-center md:backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30 group">

            {/* Game Logo Header */}
            <div className="w-full border-b border-slate-500/40 pb-2 mb-2">
                <div className="w-full h-16 relative shrink-0 mt-2 justify-center">
                    <Image src={asset.src} alt={asset.alt} fill sizes="(max-width: 640px) 50vw, 192px" className="object-contain" />
                </div>
                {/* Game Details if available */}
                {game.details && (
                    <p className="text-[10px] text-slate-400/80 font-medium tracking-wide mt-1 px-1">
                        {game.details}
                    </p>
                )}
            </div>
            {game.songUrl && (
            <div className="flex flex-col gap-1 mb-2">
                {/* Optional Quick Link Song Footer helper track */}
                
                    <a
                        href={game.songUrl} target="_blank" rel="noopener noreferrer"
                        className="text-[10px] px-2 py-1 font-bold bg-slate-900 border border-slate-800 hover:border-amber-500/30 hover:bg-amber-950/20 text-slate-300 hover:text-amber-400 rounded-lg transition-all whitespace-nowrap"
                    >
                        🎵 Escuchar canción
                    </a>  
            </div>
            )}
            {/* Embedded Compact Roster View */}
            <div className="space-y-2 w-full ">
                {game.roles.map((actor, idx) => (
                    <div key={idx} className="text-center text-[11px] leading-snug">
                        <span className="text-slate-200 block font-bold">
                            {actor.username}
                        </span>
                        <span className="text-slate-400 italic text-[10px]">
                            {actor.roles.join(", ")}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}