"use client";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";

interface CreditCardProps {
    user: {
        username: string;
        avatarUrl?: string;
        profileUrl?: string;
        tags?: string[];
        roles: {
            roleName: string;
            games?: string[];
            displayAsText?: boolean;
            textNotes?: string[];
        }[];
    };
}

export default function CreditCard({ user }: CreditCardProps) {
    return (
        <div
            className="flex-initial min-w-35 max-w-sm bg-slate-950/20 border border-slate-800/40 rounded-2xl p-4 flex flex-col justify-start gap-3 hover:border-slate-700/40 transition-all duration-300"
        >
            <div className="w-full">
                {user.avatarUrl && (
                    <div className="w-24 h-24 relative rounded-2xl overflow-hidden border-2 border-amber-500/10 bg-slate-900 group-hover:border-amber-500/30 transition-colors shrink-0 mx-auto mb-2">
                        <Image
                            src={user.avatarUrl}
                            alt={user.username}
                            fill
                            sizes="96px"
                            className="object-cover"
                        />
                    </div>
                )}
                {/* Centered Username */}
                <div className="border-b border-slate-500/40 pb-2 mb-2">

                    {user.profileUrl ? (
                        <a
                            href={user.profileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h3 className="font-bold text-slate-100 hover:text-amber-400  text-sm text-center leading-snug px-1">
                                {user.username}
                            </h3>
                        </a>
                    ) : (
                        <h3 className="font-bold text-slate-100 text-sm text-center leading-snug px-1">
                            {user.username}
                        </h3>
                    )}

                    {/* TAGS */}
                    {user.tags && user.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 justify-center max-w-full px-1 mb-2">
                            {user.tags.map((tag, tIdx) => (
                                <span
                                    key={tIdx}
                                    className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-800/60 border border-slate-700/40 text-slate-300 whitespace-nowrap tracking-wide uppercase"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                {/* Contributions Matrix — Always Visible */}
                <div className="space-y-3">
                    {user.roles.map((role, idx) => (
                        <div key={idx} className="text-[11px] text-center">
                            <span className="text-slate-400 block font-semibold mb-1">
                                {role.roleName}{(role.games || role.textNotes) && ":"}
                            </span>

                            {(role.roleName === "Traducción asistente" || role.displayAsText) && role.games && (
                                <p className="text-slate-300 font-medium leading-relaxed max-w-45 mx-auto">
                                    {role.games.map((g) => GAME_ASSETS[g]?.alt || g).join(", ")}
                                </p>
                            )}

                            {/* Game Logos Row */}
                            {role.games && role.roleName !== "Traducción asistente" && !role.displayAsText && (
                                <div className="flex flex-wrap gap-2 items-center justify-center mt-1.5">
                                    {role.games.map((game, gIdx) => (
                                        <div key={gIdx} className="w-28 h-14 relative shrink-0" title={GAME_ASSETS[game]?.alt}>
                                            <Image src={GAME_ASSETS[game]?.src} alt={GAME_ASSETS[game]?.alt} fill sizes="112px" className="object-contain" />
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Text Notes */}
                            {role.textNotes && (
                                <p className="text-slate-300 italic mt-0.5 max-w-45 mx-auto leading-relaxed">
                                    {role.textNotes.join(", ")}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}