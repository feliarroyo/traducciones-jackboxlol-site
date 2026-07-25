"use client";

import { ExtraCreditItem } from "../data/creditsRegistry";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "./hooks/useModal";
import { BaseCreditCard } from "./ui/BaseCreditCard";
import { CreditModal } from "./ui/CreditModal";

export default function CreditCardText({ extras }: { extras: ExtraCreditItem[] }) {
  const { isOpen, setIsOpen, mounted } = useModal();

  return (
    <>
      {/* 🟦 MAIN SQUARE CARD */}
      <BaseCreditCard className="p-6 gap-4">
        {/* Game Logo Container */}
        <div>
          <button
            onClick={() => setIsOpen(true)} className="text-slate-200 hover:underline transition-colors block font-bold text-md cursor-pointer">
            Ver créditos adicionales
          </button>
        </div>
      </BaseCreditCard>

      {/* Overlay Modal */}
      {mounted && (
        <CreditModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <div className="flex items-center gap-3">
              <h3 className="text-lg items-center justify-center font-black text-amber-400 uppercase tracking-wider pl-2">
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
                <span>
                  {extra.roles.map((role, rIdx) => (
                    <p key={rIdx} className="text-center text-xs text-slate-400 italic leading-relaxed">
                      {role}
                    </p>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </CreditModal>
      )}
    </>
  );
}