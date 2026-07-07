"use client";

import { useState } from "react";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";

// 🏷️ Define the strict TypeScript shape for the Admin data structure
interface CreditCardXLProps {
  admin: {
    username: string;
    avatarUrl?: string;
    profileUrl?: string;
    tags?: string[];
    roles: {
      roleName: string;
      games?: string[];
      textNotes?: string[];
    }[];
  };
}

export default function CreditCardXL({ admin }: CreditCardXLProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🟦 MAIN SQUARE CARD */}
      <div className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 backdrop-blur-sm aspect-square text-center transition-all duration-300 hover:border-amber-500/30 group">

        {admin.avatarUrl && (
          <div className="w-24 h-24 relative rounded-2xl overflow-hidden border-2 border-amber-500/10 bg-slate-900 group-hover:border-amber-500/30 transition-colors shrink-0">
            <Image
              src={admin.avatarUrl}
              alt={admin.username}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div className="space-y-1">
          <h3 className="text-xl font-bold transition-colors">
            {admin.profileUrl ? (
              <a
                href={admin.profileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-100 hover:text-amber-400 group-hover:text-amber-400"
              >
                {admin.username}
              </a>
            ) : (
              <span className="text-slate-100 group-hover:text-amber-400">{admin.username}</span>
            )}
            {/* TAGS (if present) */}
        {admin.tags && admin.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 justify-center max-w-full my-1 px-1">
            {admin.tags.map((tag, tIdx) => (
              <span
                key={tIdx}
                className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 whitespace-nowrap tracking-wide uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
          </h3>
        </div>

        

        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
        >
          Ver contribuciones
        </button>
      </div>

      {/* Overlay Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="bg-slate-900 border border-slate-800 w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-3xl p-6 md:p-8 space-y-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-4">
                {admin.avatarUrl !== undefined && (
                  <div className="w-12 h-12 relative rounded-xl overflow-hidden border border-amber-500/20 bg-slate-950">
                    <Image src={admin.avatarUrl} alt={admin.username} fill className="object-cover" />
                  </div>
                )}
                <h3 className="flex flex-col text-2xl font-black">
                  {admin.profileUrl ? (
                    <a href={admin.profileUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline">
                      {admin.username}
                    </a>
                  ) : (
                    <span className="text-amber-400">{admin.username}</span>
                  )}
                  {/* TAGS */}
                    {admin.tags && admin.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-extrabold px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                </h3>
                
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-slate-200 text-lg transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Roles Matrix content */}
            <div className="space-y-6 pr-2">
              {admin.roles.map((role, idx) => (
                <div key={idx} className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 border-l-2 border-amber-500/50 pl-2">
                    {role.roleName}
                  </h4>

                  {role.games && (
                    <div className="flex flex-wrap gap-3 items-center bg-slate-950/40 p-3 rounded-xl border border-slate-800/40">
                      {role.games.map((game, gIdx) => (
                        <div key={gIdx} className="w-28 h-14 relative shrink-0" title={GAME_ASSETS[game]?.alt}>
                          <Image src={GAME_ASSETS[game]?.src} alt={GAME_ASSETS[game]?.alt} fill className="object-contain" />
                        </div>
                      ))}
                    </div>
                  )}

                  {role.textNotes && (
                    <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
                      {role.textNotes.map((note, nIdx) => (
                        <li key={nIdx} className="leading-relaxed">{note}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}