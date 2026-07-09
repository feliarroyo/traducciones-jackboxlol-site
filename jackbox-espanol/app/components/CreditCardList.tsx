"use client";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";

interface CreditCardListProps {
    title: string;
    users: string[];
}

export default function CreditCardList({ title, users }: CreditCardListProps) {
    return (
        <div
            className="flex flex-col w-full bg-slate-950/20 border border-slate-800/40 rounded-2xl p-4 justify-start gap-3 hover:border-slate-500/40 transition-all duration-300"
        >
            <div className="w-full">
                {/* Centered Username */}
                <h3 className="font-bold text-slate-100 text-sm text-center px-1 border-b border-slate-500/40 pb-2 mb-2">
                    {title}
                </h3>
                {/* Contributions Matrix — Always Visible */}
                <div className="flex flex-wrap gap-5 items-center justify-center">
                    {users.map((user, idx) => (
                        <div key={user} className="text-[11px] text-center">
                            <span className="text-slate-400 font-semibold">
                                {user}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}