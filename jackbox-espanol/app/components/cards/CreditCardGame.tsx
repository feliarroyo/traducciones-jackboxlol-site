"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { GAME_ASSETS } from "../../data/gameRegistry";
import { GameCreditItem } from "../../data/creditsRegistry";
import { AnimatePresence, motion } from "framer-motion";
import { useModal } from "../hooks/useModal";
import { BaseCard } from "../ui/BaseCard";
import { CreditModal } from "../ui/CreditModal";
import { FadeImage } from "../ui/FadeImage";

export default function CreditCardGame({ id, isAdaptation, isSolo, mainContributors, roles }: GameCreditItem) {
  const { isOpen, setIsOpen, mounted } = useModal();
  const asset = GAME_ASSETS[id] || { src: "/images/placeholder.png", alt: id };

  return (
    <>
      {/* 🟦 MAIN SQUARE CARD */}
      <BaseCard className="justify-center aspect-square">
        {/* Game Logo Container */}
        <div className="flex flex-col w-full">
          {
            <div className=" w-full h-16 relative shrink-0 mt-2 justify-center items-center">
              <Image src={asset.src} alt={id} fill sizes="(max-width: 640px) 100vw, 250px" className="object-contain" />
            </div>
          }
          {mainContributors.length > 0 && (
            <span className="text-slate-200 block font-bold text-[10px] my-1 py-1">
              {isAdaptation ? "Adaptación" : "Traducción"}{!isSolo && " principal"}
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
          className="text-xs font-bold text-cyan-400 hover:text-cyan-300 hover:underline transition-colors cursor-pointer"
        >
          Ver contribuciones
        </button>
      </BaseCard>

      {mounted && (
        <CreditModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <div className="flex items-center justify-between border-b border-slate-600 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-20 h-10 relative">
                <FadeImage src={asset.src} alt={id} fill sizes="80px" className="object-contain" />
              </div>
              <h3 className="text-lg font-black text-amber-400 uppercase tracking-wider pl-2 border-l border-slate-600">
                Créditos de traducción
              </h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="w-7 h-7 rounded-full flex items-center justify-center bg-slate-800 hover:bg-slate-700 text-slate-400 text-xs transition-colors shrink-0">✕</button>
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
        </CreditModal>
      )}
    </>
  );
}