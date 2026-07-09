import React from "react";
import Link from "next/link";
import Image from "next/image";

interface GameDownloadButtonProps {
  href: string;
  altText: string;
  imageSrc: string;
  isSpain?: boolean;
  noteTitle?: string;
  notes?: string;
}

export default function GameDownloadButton({ href, altText, imageSrc, isSpain = false, noteTitle, notes }: GameDownloadButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-2xl border border-slate-700/80 shadow-lg transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 w-24 h-24 text-center"
    >
      {/* 🖼️ COVER ART IMAGE FILL */}
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover transition-transform duration-500 rounded-2xl group-hover:scale-110"
      />
      { /* Overlay icon if it's Spain translation*/ }
      {isSpain && (
        <div className="absolute top-2 right-2 w-6 h-6 rounded-md overflow-hidden shadow-md flex items-center justify-center z-0 animate-fade-in">
          <Image
            src="/images/spain.webp" // Replace with your Spain flag asset path location
            alt="Variante de España"
            width={36}
            height={24}
            className="object-contain w-full h-full"
          />
        </div>
      )}
      {/* FLOATING HOVER NOTE TOOLTIP */}
      { noteTitle && (
        <div 
          className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 z-30 p-2.5 rounded-xl bg-slate-950/95 border border-slate-800/90 backdrop-blur-md text-[10px] text-slate-200 text-center leading-normal shadow-2xl transition-all duration-300 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
        >
          <p className="font-medium text-amber-400 mb-0.5 uppercase tracking-wider text-[8px]">
            {noteTitle}
          </p>
          {notes && (<p className="italic text-slate-300">
            {notes}
          </p>)}
        </div>
      )}
    </a>
  );
}