import React from "react";
import Link from "next/link";
import Image from "next/image";

interface GameDownloadButtonProps {
  href: string;
  altText: string;
  imageSrc: string;
}

export default function GameDownloadButton({ href, altText, imageSrc }: GameDownloadButtonProps) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noreferrer"
      className="relative bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-2xl border border-slate-700/80 shadow-lg transition-all hover:scale-105 active:scale-95 flex flex-col items-center justify-center gap-2 w-24 h-24 text-center"
    >
      {/* 🖼️ COVER ART IMAGE FILL */}
      <Image
        src={imageSrc}
        alt={altText}
        fill
        className="object-cover transition-transform duration-500 rounded-2xl group-hover:scale-110"
      />
    </a>
  );
}