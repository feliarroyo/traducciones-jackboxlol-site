"use client";

import { useState } from "react";
import { ExtraCreditItem } from "../data/creditsRegistry";

export default function CreditCardText({ extras }: { extras: ExtraCreditItem[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🟦 MAIN SQUARE CARD */}
      <div className="flex bg-slate-950/40 border border-slate-800/80 rounded-3xl p-6 items-center justify-center gap-4 backdrop-blur-sm text-center transition-all duration-300 hover:border-amber-500/30 group">

        {/* Game Logo Container */}
        <div>
          <button
            onClick={() => setIsOpen(true)} className="text-slate-200 hover:underline transition-colors block font-bold text-md">
            Ver créditos adicionales
          </button>
        </div>
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
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-lg font-black text-amber-400 uppercase tracking-wider pl-2 border-l border-slate-800">
                  Créditos adicionales
                </h3>
              </div>
              <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-colors">✕</button>
            </div>


            {/* Roles Matrix content */}
            <div className="flex flex-col space-y-6 pr-2">
              {extras.map((extra, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center gap-1 flex-wrap">
                  <span className="font-bold text-slate-100 text-sm">
                    {extra.username}
                  </span>
                  <span className="text-xs text-slate-400 italic leading-relaxed">
                    {extra.roles.join(", ")}
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