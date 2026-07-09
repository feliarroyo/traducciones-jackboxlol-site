"use client";

import { useState } from "react";
import Image from "next/image";
import { GAME_ASSETS } from "../data/gameRegistry";
import { GameCreditItem } from "../data/creditsRegistry";

export default function CreditCardGame({ id, isAdaptation, isSolo, mainContributors, roles }: GameCreditItem) {
  const [isOpen, setIsOpen] = useState(false);
  const asset = GAME_ASSETS[id] || { src: "/images/placeholder.png", alt: id };

  return (
    <>
      {/* 🟦 MAIN SQUARE CARD */}
      <div className="bg-slate-950/40 border border-slate-800/80 rounded-3xl p-6 flex flex-col items-center justify-center gap-4 backdrop-blur-sm aspect-square text-center transition-all duration-300 hover:border-amber-500/30 group">

        {/* Game Logo Container */}
        <div className="flex flex-col w-full border-b border-slate-500/40 pb-2 mb-2">
          {
            <div className=" w-full h-16 relative shrink-0 mt-2 justify-center items-center">
              <Image src={asset.src} alt={id} fill className="object-contain" />
            </div>
          }
          {mainContributors.length > 0 && (
            <span className="text-slate-200 block font-bold text-[10px] my-1 py-1">
              {isAdaptation? "Adaptación" : "Traducción"}{!isSolo && " principal"}
              {mainContributors.map((user, idx) => (
                <div key={idx} className="text-center text-[11px] leading-snug">
                  <p className="text-slate-400/80 font-medium tracking-wide ">
                    {user}
                  </p>
                </div>
              ))
              }
            </span>
          )}
        </div>


        <button
          onClick={() => setIsOpen(true)}
          className="mt-2 text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors cursor-pointer"
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
            <div className="flex items-center justify-between border-b border-slate-600 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-20 h-10 relative">
                  <Image src={asset.src} alt={id} fill className="object-contain" />
                </div>
                <h3 className="text-lg font-black text-amber-400 uppercase tracking-wider pl-2 border-l border-slate-600">
                  Créditos de traducción
                </h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-colors">✕</button>
            </div>


            {/* Roles Matrix content */}
            <div className="space-y-6 pr-2">
              {roles.map((role, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-1 flex-wrap">
                  <span className="font-bold text-slate-100 text-sm">
                    {role.username}
                  </span>
                  <span className="text-xs text-slate-400 italic leading-relaxed">
                    {role.roles.join(", ")}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}